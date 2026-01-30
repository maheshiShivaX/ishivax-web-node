import React, { useState, useEffect, useContext, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../../Contaxt/ThemeContext";

const SCROLL_ROUTES = [
    "/aboutus", "/services", "/portfolio", "/contact-us",
    "/service-mobile-app", "/jointeam", "/blog",
    "/privacy-policy", "/terms-conditions",
    "/product-portfolio", "/join-our-team",
    "/our-partner", "/our-products",
    "/Quote", "/digital-marketing", "/iot-solution",
];

const HEADER_MENUS = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Our Products", path: "/our-products" },
    { name: "Blogs", path: "/blog" },
    { name: "Contact Us", path: "/contact-us" },
];

const Header = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { changeTheme, isLight } = useContext(ThemeContext);

    const { pathname } = useLocation();

    /* ================= Scroll to Top ================= */
    useEffect(() => {
        if (SCROLL_ROUTES.includes(pathname)) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [pathname]);

    /* ================= Header Scroll ================= */
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    /* ================= Body Scroll Lock ================= */
    useEffect(() => {
        document.body.style.overflow = isPopupOpen ? "hidden" : "";
        return () => (document.body.style.overflow = "");
    }, [isPopupOpen]);

    /* ================= Toggle Popup ================= */
    const togglePopup = useCallback(() => {
        if (isPopupOpen) {
            setIsAnimating(true);
            setTimeout(() => {
                setIsAnimating(false);
                setIsPopupOpen(false);
            }, 300);
        } else {
            setIsPopupOpen(true);
        }
    }, [isPopupOpen]);

    return (
        <div>
            <header className={`flw topseo-header header_fix ${isScrolled ? "scrolled" : ""}`}>
                <div className="seo-wrap-menu">
                    <div className="menu-box flw menu-style-1 sticky-menu topseo topseo-not-bottom topseo-pinned topseo-top">
                        <div className="container">
                            <div className="menu-box-nav flw">
                                <div className="menu-box-left">
                                    <div className="logo lg-top">
                                        <Link to="https://smartqr.ishivax.com/twjacn" target="_blank" rel="noreferrer" aria-label="Ask Nova">
                                            <div className='nova_logo_weper'>
                                                <span className="novaHover_only">
                                                    Ask <img src="/images/novaLogo.png" className="nova_logo" alt="" />
                                                </span>
                                            </div>
                                        </Link>

                                        <Link to='/'>
                                            <div className="group-3-yio">
                                                <img
                                                    src={
                                                        isLight && !isScrolled
                                                            ? "/images/logo-light.svg"
                                                            : "/images/ishivaxlogo.png"
                                                    }
                                                    className="group-2-6oR"
                                                    alt="Ishivax Technologies Logo"
                                                    loading="eager"
                                                />
                                            </div>
                                        </Link>

                                        {isPopupOpen ? (
                                            <p onClick={togglePopup} className="mb-0">
                                                <div className={`${isLight ? 'frame-68-eHD-LIGHT' : 'frame-68-eHD'}`}>
                                                    <div
                                                        className={`hover_with_img ${isLight ? 'menu-w1R-LIGHT close-w1R-LIGHT' : 'menu-w1R close-w1R'}`}
                                                        style={{
                                                            backgroundImage: `url(${isLight ? '/images/close-square.png' : '/images/close-squareblack.svg'})`
                                                        }}
                                                    ></div>
                                                    <div className={`${isLight ? 'menus-U1M-LIGHT' : 'menus-U1M'}`}>Close</div>
                                                </div>
                                            </p>
                                        ) : (
                                            <div className=" header_theme_menu">
                                                {isLight ? (
                                                    <button className="theme_buttons_light" onClick={changeTheme} aria-label="Toggle Theme">
                                                        <img src="/images/lightbtn.png" alt="Theme Toggle" style={{ width: '20px' }} />
                                                    </button>
                                                ) : (
                                                    <button className="theme_buttons_dark" onClick={changeTheme}>
                                                        <img src="/images/darkbtn.png" alt="Theme Toggle" style={{ width: '20px' }} />
                                                    </button>
                                                )}
                                                <p className="mb-0" onClick={togglePopup}>
                                                    <div className={`${isLight ? 'frame-68-eHD-LIGHT' : 'frame-68-eHD'}`}>
                                                        <div className={`${isLight ? 'menu-w1R-LIGHT' : 'menu-w1R'}`}></div>
                                                        <div className={`${isLight ? 'menus-U1M-LIGHT' : 'menus-U1M'}`}>Menu</div>
                                                    </div>
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {isPopupOpen && (
                <div className={`popup ${isPopupOpen ? 'show' : ''} ${isAnimating ? 'hide' : ''}`} onClick={togglePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <div className="fw-page-builder-content">
                            <div className={`fw-main-row ${isLight ? 'black-bg-content-LIGHT' : 'black-bg-content'}`}>
                                <div className="fw-full-container-top" style={{ backgroundImage: 'url(/images/bg-dots.png)' }}>

                                    <div className="fw-container">
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

                                        <div className="content-under-image header-popup-menus">
                                            <div className="fw-row ">
                                                <img className="vector-line-1" src="/images/Vector-upper-arrow.png" alt="" />
                                            </div>

                                            <div className='top-vector_main'>
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
                                                            <h2 className={`${isLight ? 'fw-special-title vector-heading-LIGHT' : 'fw-special-title vector-heading'}`} >MENUS</h2>
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

                                            <div className="fw-container scroll_product_content">
                                                {HEADER_MENUS.map((menu) => (
                                                    <div className="fw-row" key={menu.path}>
                                                        <div className="fw-col-xs-12 ">
                                                            <div className={`${isLight ? 'home-Vts-LIGHT' : 'home-Vts'}`}>
                                                                <Link to={menu.path}>{menu.name}</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="fw-row">
                                                <div className="fw-col-xs-12 ">
                                                    <div className="fw-divider-space" style={{ marginTop: '250px' }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
