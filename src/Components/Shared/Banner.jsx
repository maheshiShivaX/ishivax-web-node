import React, { useRef, useEffect, useContext, useCallback } from 'react';
import { ThemeContext } from '../../Contaxt/ThemeContext';

const Banner = () => {
    const { isLight } = useContext(ThemeContext);
    const audioRef = useRef(null);
    const playButtonRef = useRef(null);
    const scrollAnimationRef = useRef(null);
    const isScrollingRef = useRef(false);
       const outsideClickHandlerRef = useRef(null);

    // ✅ Device detection
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

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

        if (outsideClickHandlerRef.current) {
            document.removeEventListener('click', outsideClickHandlerRef.current);
            document.removeEventListener('touchstart', outsideClickHandlerRef.current);
        }
    }, []);

    const handleOutsideClick = useCallback((e) => {
        if (!playButtonRef.current || !playButtonRef.current.contains(e.target)) {
            stopScroll();
        }
    }, [stopScroll]);

    // store handler in ref (break circular deps)
    useEffect(() => {
        outsideClickHandlerRef.current = handleOutsideClick;
    }, [handleOutsideClick]);

    const scrollToBottomSlow = () => {
        const speed = isMobile ? 10 : 10;

        const scrollStep = () => {
            if (!isScrollingRef.current) return;

            const maxScroll = document.body.scrollHeight - window.innerHeight;
            const currentScroll = window.scrollY;

            if (currentScroll >= maxScroll) {
                stopScroll();
                return;
            }

            window.scrollTo(0, currentScroll + speed);
            scrollAnimationRef.current = requestAnimationFrame(scrollStep);
        };

        scrollAnimationRef.current = requestAnimationFrame(scrollStep);
    };

    const handleClick = async () => {
        if (!isScrollingRef.current) {
            isScrollingRef.current = true;

            window.scrollBy(0, 1);
            await new Promise(r => setTimeout(r, 10));

            try {
                await audioRef.current?.play();
            } catch {}

            scrollToBottomSlow();

            document.addEventListener('click', outsideClickHandlerRef.current);
            document.addEventListener('touchstart', outsideClickHandlerRef.current);
        } else {
            stopScroll();
        }
    };

    useEffect(() => {
        return () => stopScroll();
    }, [stopScroll]);

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
                <div className="fw-row">
                    <div className="fw-col-xs-12 ">
                        <div className="fw-divider-space"
                            style={{ marginTop: '100px' }}
                        ></div>
                    </div>
                </div>
                <div className="fw-container">
                    <div className="seo-media-images">
                        <img className="top-image-arrow-1" src="/images/Vector-line-straight.png" alt='' />
                    </div>
                    <div className="seo-media-images">
                        <img className="top-image-arrow-2" src="/images/Vector-line-straight.png" alt='' />
                    </div>

                    <div className="seo-media-images">
                        <img className="top-image-arrow-3" src="/images/Vector-line-straight.png" alt='' />
                    </div>
                    <div className="seo-media-images">
                        <img className="top-image-arrow-4" src="/images/Vector-line-straight.png" alt='' />
                    </div>
                </div>
                <div className="content-under-image banner_vector">
                    <div className="fw-row ">
                        <img className="vector-line-1" src="/images/Vector-upper-arrow.png" alt='' />
                    </div>
                    <div className="fw-row">
                        <div className="fw-container ">
                            <div className="fw-col-md-4 vector-class">
                                <div className="dot-1"></div>
                                <div className="dot-2"></div>
                                <img className="vector-cross-1" src="/images/vector.png" alt='' />
                                <div className="dot-3"></div>
                                <div className="dot-4"></div>
                            </div>
                            <div className="fw-col-md-4">
                                <div className="fw-heading fw-heading-h2">
                                    <h2 className='fw-special-title vector-heading'>MODERN TECHNOLOGIES
                                    </h2>
                                </div>
                            </div>
                            <div className="fw-col-md-4  vector-class">
                                <div className="dot-5"></div>
                                <div className="dot-6"></div>
                                <img className="vector-cross-2" src="/images/vector.png" alt='' />
                                <div className="dot-7"></div>
                                <div className="dot-8"></div>
                            </div>
                        </div>
                    </div>
                    <div className="fw-row ">
                        <img className="vector-line-2" src="/images/Vector-upper-arrow.png" alt='' />
                    </div>
                    <div className="fw-row">
                        <div className="fw-col-xs-12 ">
                            <div className="fw-divider-space" style={{ marginTop: '100px' }}></div>
                        </div>
                    </div>
                    <div className="fw-row">
                        <div className="container">
                            <div className="fw-col-xs-12 ">
                            </div>
                            <div className="fw-col-xs-12 ">
                                <p className="header-main-content">RELIABLE DEVELOPMENT TEAM WITH PROVEN SOLVERS</p>
                            </div>
                            <div className="fw-col-xs-12 ">
                            </div>
                        </div>
                    </div>
                    <div className="fw-row ">
                        <img className="vector-line-1" src="/images/Vector-upper-arrow.png" alt='' />
                    </div>
                    <div className="fw-row">
                        <div className="fw-container">
                            <div className="fw-col-md-4 vector-class">
                                <div className="dot-1"></div>
                                <div className="dot-2"></div>
                                <img className="vector-cross-1" src="/images/vector.png" alt='' />
                                <div className="dot-9"></div>
                                <div className="dot-10"></div>
                            </div>
                            <div className="fw-col-md-4">
                                <p className="fw-special-title-building vector-heading">BUILDING &nbsp;
                                    TOMORROW'S &nbsp; SOFTWARE<br /> <span
                                        style={{ fontSize: '24px' }}>TODAY</span>
                                </p>

                            </div>
                            <div className="fw-col-md-4 vector-class">
                                <div className="dot-5"></div>
                                <div className="dot-6"></div>
                                <img className="vector-cross-2" src="/images/vector.png" alt='' />
                                <div className="dot-11"></div>
                                <div className="dot-12"></div>
                            </div>
                        </div>
                    </div>
                    <div className="fw-row">
                        <img className="vector-line-2" src="/images/Vector-upper-arrow.png" alt='' />
                    </div>

                    <div className="fw-row" style={{ display: 'flex' }}>

                        <div className="fw-col-xs-12 ">
                            <div className="frame-69-Hp3"
                                id="playButton"
                                ref={playButtonRef}
                                onClick={handleClick}
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
                            </div>
                        </div>
                        <audio ref={audioRef} id="audioPlayer" src="/images/audio.mp3" loop></audio>
                    </div>

                    <div className="fw-row">
                        <div className="fw-col-xs-12 ">
                            <div className="fw-divider-space" style={{ marginTop: '24px' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner;