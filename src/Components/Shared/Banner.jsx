import React, { useRef, useEffect, useContext, useCallback } from 'react';
import { ThemeContext } from '../../Contaxt/ThemeContext';
import Spline from '@splinetool/react-spline';
import VectorLineDots from '../Common/VectorLineDots';

const Banner = () => {
    const { isLight } = useContext(ThemeContext);
    const audioRef = useRef(null);
    const playButtonRef = useRef(null);
    const scrollAnimationRef = useRef(null);
    const isScrollingRef = useRef(false);
    const lastTapTimeRef = useRef(0);
    const stopOnInteractionRef = useRef(null);
    const [showSpline, setShowSpline] = React.useState(false);
    const [splineLoaded, setSplineLoaded] = React.useState(false);


    // 🎯 Spline + Gyro refs
    const splineAppRef = useRef(null);
    const gyroTargetRef = useRef(null);


    // ✅ Device detection
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const getScrollElement = () => document.scrollingElement || document.documentElement;

    const setPageScrollTop = (top) => {
        const scrollElement = getScrollElement();
        scrollElement.scrollTop = top;
        document.body.scrollTop = top;
        window.scrollTo(0, top);
    };

    const stopScroll = useCallback(() => {
        isScrollingRef.current = false;

        if (scrollAnimationRef.current) {
            cancelAnimationFrame(scrollAnimationRef.current);
            scrollAnimationRef.current = null;
        }

        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }

        if (stopOnInteractionRef.current) {
            document.removeEventListener('click', stopOnInteractionRef.current);
            document.removeEventListener('touchstart', stopOnInteractionRef.current);
            document.removeEventListener('pointerdown', stopOnInteractionRef.current);
        }

    }, []);

    const stopOnInteraction = useCallback((e) => {
        if (playButtonRef.current?.contains(e.target)) return;
        stopScroll();
    }, [stopScroll]);

    useEffect(() => {
        stopOnInteractionRef.current = stopOnInteraction;
    }, [stopOnInteraction]);

    const startInfiniteScroll = () => {
        const speed = isMobile ? 90 : 80;

        const scrollStep = () => {
            if (!isScrollingRef.current) return;

            const scrollElement = getScrollElement();
            const maxScroll = scrollElement.scrollHeight - scrollElement.clientHeight;
            const currentScroll = scrollElement.scrollTop || window.pageYOffset || 0;

            if (currentScroll >= maxScroll - speed) {
                setPageScrollTop(0);
                scrollAnimationRef.current = requestAnimationFrame(scrollStep);
                return;
            }

            setPageScrollTop(currentScroll + speed);
            scrollAnimationRef.current = requestAnimationFrame(scrollStep);
        };

        scrollAnimationRef.current = requestAnimationFrame(scrollStep);
    };

    const handleClick = (e) => {
        e?.preventDefault();
        e?.stopPropagation();

        const now = Date.now();
        if (now - lastTapTimeRef.current < 400) return;
        lastTapTimeRef.current = now;

        if (!isScrollingRef.current) {
            isScrollingRef.current = true;
            document.documentElement.style.overflowY = 'auto';
            document.body.style.overflowY = 'auto';

            try {
                const playPromise = audioRef.current?.play();
                playPromise?.catch?.(() => { });
            } catch { }

            setPageScrollTop(0);
            startInfiniteScroll();

            setTimeout(() => {
                if (!stopOnInteractionRef.current) return;

                document.addEventListener('click', stopOnInteractionRef.current);
                document.addEventListener('touchstart', stopOnInteractionRef.current, { passive: true });
                document.addEventListener('pointerdown', stopOnInteractionRef.current);
            }, 0);
        } else {
            stopScroll();
        }
    };

    useEffect(() => {
        return () => stopScroll();
    }, [stopScroll]);

    // /* ================= GYROSCOPE ================= */
    // useEffect(() => {
    //     if (!isMobile) return;
    //     if (!splineLoaded) return;
    //     if (!gyroTargetRef.current) return;

    //     let beta = 0;
    //     let gamma = 0;
    //     let rafId;

    //     // const handleOrientation = (e) => {
    //     //     beta = Math.max(-25, Math.min(25, e.beta || 0));
    //     //     gamma = Math.max(-25, Math.min(25, e.gamma || 0));
    //     // };

    //     const handleOrientation = (e) => {
    //         // limit to -45 to 45 degrees for stronger effect
    //         beta = Math.max(-45, Math.min(45, e.beta || 0));
    //         gamma = Math.max(-45, Math.min(45, e.gamma || 0));
    //     };


    //     console.log("gyro", beta, gamma);
    //     console.log(isMobile, 'isMobile')
    //     console.log(splineLoaded, 'splineLoaded')
    //     console.log(gyroTargetRef, 'gyroTargetRef')

    //     const rotationSpeed = 0.02; // was 0.002
    //     const smoothing = 0.15; // was 0.05

    //     const animate = () => {
    //         const target = gyroTargetRef.current;
    //         if (!target) return;

    //         target.rotation.x += (beta * rotationSpeed - target.rotation.x) * smoothing;
    //         target.rotation.y += (gamma * rotationSpeed - target.rotation.y) * smoothing;

    //         rafId = requestAnimationFrame(animate);
    //     };

    //     window.addEventListener("deviceorientation", handleOrientation, true);
    //     rafId = requestAnimationFrame(animate);

    //     return () => {
    //         window.removeEventListener("deviceorientation", handleOrientation);
    //         cancelAnimationFrame(rafId);
    //     };
    // }, [isMobile, splineLoaded]);

    useEffect(() => {
        if (!isMobile || !splineLoaded || !gyroTargetRef.current) return;

        let beta = 0;   // up-down
        let gamma = 0; // left-right
        let rafId;
        let isTouching = false;

        const neck = gyroTargetRef.current;

        // 🔧 MANUAL OFFSET (to lift head up)
        const NEUTRAL_OFFSET = {
            x: -0.20,  // 👈 lift head up (adjust between -0.2 to -0.35)
            y: 0.01,    // center left/right
            z: 0.0,    // no forward/back tilt
        };

        const neutral = {
            x: neck.rotation.x + NEUTRAL_OFFSET.x,
            y: neck.rotation.y + NEUTRAL_OFFSET.y,
            z: neck.rotation.z + NEUTRAL_OFFSET.z,
        };

        // force-set clean default pose
        neck.rotation.x = neutral.x;
        neck.rotation.y = neutral.y;
        neck.rotation.z = neutral.z;

        const handleOrientation = (e) => {
            if (isTouching) return;

            beta = Math.max(-20, Math.min(20, e.beta || 0));
            gamma = Math.max(-20, Math.min(20, e.gamma || 0));
        };

        const handleTouchStart = () => {
            isTouching = true;
        };

        const handleTouchEnd = () => {
            isTouching = false;
        };

        const SMOOTHING = 0.15;
        const ROTATION_MULTIPLIER_X = 0.01;
        const ROTATION_MULTIPLIER_Y = 0.01;

        const animate = () => {
            const targetX = neutral.x + beta * ROTATION_MULTIPLIER_X;
            const targetY = neutral.y + gamma * ROTATION_MULTIPLIER_Y;
            neck.rotation.x += (targetX - neck.rotation.x) * SMOOTHING;
            neck.rotation.y += (targetY - neck.rotation.y) * SMOOTHING;

            // 🔒 lock forward/back
            neck.rotation.z = neutral.z;

            rafId = requestAnimationFrame(animate);
        };

        window.addEventListener("deviceorientation", handleOrientation, true);
        window.addEventListener("touchstart", handleTouchStart, true);
        window.addEventListener("touchend", handleTouchEnd, true);

        rafId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("deviceorientation", handleOrientation);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchend", handleTouchEnd);
            cancelAnimationFrame(rafId);
        };
    }, [isMobile, splineLoaded]);


    useEffect(() => {
        const t = setTimeout(() => setShowSpline(true), 100);
        return () => clearTimeout(t);
    }, []);

    /* ================= JSX ================= */

    return (

        <div
            className={`fw-main-row black-bg-content ${isLight ? 'banner-light' : 'banner-dark'}`}
        >
            {isLight && (
                <>
                    <img src='/images/banner_left_element.webp' alt='' className='banner_left_element' />
                    <img src='/images/banner_right_element.webp' alt='' className='banner_right_element' />
                </>
            )}

            <div className="fw-full-container-top" style={{ backgroundImage: 'url(/images/bg-dots.png)' }}>
                <div className='fw-container'>
                    <div className="fw-row">
                        <div className="fw-col-xs-12 ">
                            <div className="fw-divider-space"
                            ></div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center banner-seo-media-images">
                        <div className='seo-media-images-common'>
                            <img className="top-image-arrow-1" src="/images/Vector-line-straight.png" alt='' />
                            <img className="top-image-arrow-2" src="/images/Vector-line-straight.png" alt='' />
                        </div>

                        <div className='seo-media-images-common'>
                            <img className="top-image-arrow-3" src="/images/Vector-line-straight.png" alt='' />
                            <img className="top-image-arrow-4" src="/images/Vector-line-straight.png" alt='' />
                        </div>
                    </div>

                    <div className="content-under-image banner_vector">
                        <VectorLineDots heading="MODERN TECHNOLOGIES" />

                        <div className="fw-row">
                            <div className="container mt-3">
                                <div className="fw-col-xs-12 d-flex justify-content-center">
                                    <p className="header-main-content">RELIABLE DEVELOPMENT TEAM WITH PROVEN SOLVERS</p>
                                </div>
                                <div className="fw-col-xs-12 ">
                                </div>
                                <div className='d-flex justify-content-center align-items-center' style={{ position: "relative" }}>
                                    <div className='spline_circle_banner' style={{ backgroundColor: isLight ? "#9262c3" : "#283247" }}>
                                    </div>
                                    <div
                                        className="spline-container-banner d-flex justify-content-center align-items-center"
                                    >
                                        {showSpline && (
                                            <Spline
                                                scene="https://prod.spline.design/Hg6BpOrN6fzKa41c/scene.splinecode"
                                                onLoad={(spline) => {
                                                    splineAppRef.current = spline;
                                                    // Find the Robot object inside your Spline scene
                                                    // const obj = spline.findObjectByName("Robot");
                                                    const obj = spline.findObjectByName("Cabeza");
                                                    if (obj) {
                                                        gyroTargetRef.current = obj;
                                                        setSplineLoaded(true);
                                                    }
                                                }}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='top-vector_main mt-5'>
                            <img className="vector-line-common" src="/images/Vector-upper-arrow.png" alt='' />
                            <div className="fw-row">
                                <div className="cector-cross-line-allign">
                                    <div className="vector-class-common">
                                        <div className='dots-first'>
                                            <div className="dot-common"></div>
                                            <div className="dot-common"></div>
                                        </div>
                                        <img className="vector-cross-common" src="/images/vector.png" alt='' />
                                        <div className='dots-second'>
                                            <div className="dot-common"></div>
                                            <div className="dot-common"></div>
                                        </div>
                                    </div>
                                    <div className="fw-heading fw-heading-h2 d-flex justify-content-center align-items-center">
                                        <p className="fw-special-title-building vector-heading">BUILDING &nbsp;
                                            TOMORROW'S &nbsp; SOFTWARE<br /> <span
                                                style={{ fontSize: '24px' }}>TODAY</span>
                                        </p>
                                    </div>
                                    <div className="vector-class-common">
                                        <div className='dots-first'>
                                            <div className="dot-common"></div>
                                            <div className="dot-common"></div>
                                        </div>
                                        <img className="vector-cross-common" src="/images/vector.png" alt='' />
                                        <div className='dots-second'>
                                            <div className="dot-common"></div>
                                            <div className="dot-common"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img className="vector-line-common1" src="/images/Vector-upper-arrow.png" alt='' />
                        </div>

                        <div className="fw-row" style={{ display: 'flex' }}>
                            <div className="fw-col-xs-12 ">
                                <button className="frame-69-Hp3"
                                    id="playButton"
                                    type="button"
                                    ref={playButtonRef}
                                    onClick={handleClick}
                                    onPointerUp={handleClick}
                                    onTouchEnd={handleClick}
                                >
                                    <p className={` ${isLight ? 'scroll-down-Dhh-LIGHT' : 'scroll-down-Dhh'}`}>
                                        Click Here For
                                        Better Experience</p>
                                    <img className="elbskegiex-1-ieT" src={
                                        isLight
                                            ? "/images/ScrollDown-black.gif"
                                            : "/images/ScrollDown.gif"
                                    }
                                        style={{ display: 'block', margin: ' 0 auto' }} alt='' />
                                </button>
                            </div>
                            <audio ref={audioRef} id="audioPlayer" src="/images/audio.mp3" preload="auto" loop></audio>
                        </div>

                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">
                                <div className="fw-divider-space" style={{ marginTop: '24px' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner;
