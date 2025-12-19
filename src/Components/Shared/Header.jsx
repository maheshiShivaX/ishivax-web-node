import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../../Contaxt/ThemeContext";

const Header = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { changeTheme, isLight } = useContext(ThemeContext);

    const togglePopup = () => {
        if (isPopupOpen) {
            setIsAnimating(true);
            setTimeout(() => {
                setIsAnimating(false);
                setIsPopupOpen(false);
            }, 300); // Animation duration in milliseconds
        } else {
            setIsPopupOpen(true);
        }
    };

    const { pathname } = useLocation();

    useEffect(() => {
        const routesToScrollTop = [
            "/aboutus",
            "/services",
            "/portfolio",
            "/contact-us",
            "/service-mobile-app",
            "/jointeam",
            "/blog",
            "/privacy-policy",
            "/terms-conditions",
            "/product-portfolio",
            "/join-our-team",
            "/our-partner",
            "/our-products",
            "/Quote",
            "/digital-marketing",
            "/iot-solution",
        ];

        if (routesToScrollTop.includes(pathname)) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <header className={`flw topseo-header header_fix ${isScrolled ? "scrolled" : ""}`}>
                <div className="seo-wrap-menu">
                    <div className="menu-box flw menu-style-1 sticky-menu topseo topseo-not-bottom topseo-pinned topseo-top">
                        <div className="container">
                            <div className="menu-box-nav flw">
                                <div className="menu-box-left">
                                    <div className="logo lg-top">
                                        <Link to="https://smartqr.ishivax.com/twjacn" target="_blank" rel="noreferrer" >
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
                                                    alt="Logo"
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
                                                    <button className="theme_buttons_light" onClick={changeTheme}>
                                                        <img src="/images/lightbtn.png" alt="" style={{ width: '20px' }} />
                                                    </button>
                                                ) : (
                                                    <button className="theme_buttons_dark" onClick={changeTheme}>
                                                        <img src="/images/darkbtn.png" alt="" style={{ width: '20px' }} />
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

                                        <div className="seo-media-images">
                                            <img className="top-image-arrow-1" src="/images/Vector-line-straight.png" alt="" />
                                        </div>
                                        <div className="seo-media-images">
                                            <img className="top-image-arrow-2" src="/images/Vector-line-straight.png" alt="" />
                                        </div>

                                        <div className="seo-media-images">
                                            <img className="top-image-arrow-3" src="/images/Vector-line-straight.png" alt="" />
                                        </div>
                                        <div className="seo-media-images">
                                            <img className="top-image-arrow-4" src="/images/Vector-line-straight.png" alt="" />
                                        </div>

                                    </div>
                                    <div className="content-under-image">

                                        <div className="fw-row ">
                                            <img className="vector-line-1" src="/images/Vector-upper-arrow.png" alt="" />
                                        </div>

                                        <div className="fw-row">
                                            <div className="fw-container ">
                                                <div className="fw-col-md-4 vector-class">
                                                    <div className="dot-1"></div>
                                                    <div className="dot-2"></div>
                                                    <img className="vector-cross-1" src="/images/vector.png" alt="" />
                                                    <div className="dot-3"></div>
                                                    <div className="dot-4"></div>
                                                </div>

                                                <div className="fw-col-md-4">
                                                    <div className="fw-menus fw-heading-h2">
                                                        <h2 className={`${isLight ? 'fw-special-title vector-heading-LIGHT' : 'fw-special-title vector-heading'}`} >MENUS
                                                        </h2>
                                                    </div>
                                                </div>
                                                <div className="fw-col-md-4  vector-class">
                                                    <div className="dot-5"></div>
                                                    <img className="vector-cross-2" src="/images/vector.png" alt="" />
                                                    <div className="dot-7"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="fw-container scroll_product_content">
                                            <div className="fw-row">
                                                <div className="fw-col-xs-12 ">
                                                    <div className={`${isLight ? 'home-Vts-LIGHT' : 'home-Vts'}`}><Link to='/'>Home</Link></div>
                                                </div>
                                            </div>
                                            <div className="fw-row">
                                                <div className="fw-col-xs-12 ">
                                                    <div className={`${isLight ? 'home-Vts-LIGHT' : 'home-Vts'}`}><Link to='/aboutus'>About Us</Link></div>
                                                </div>
                                            </div>
                                            <div className="fw-row">
                                                <div className="fw-col-xs-12 ">
                                                    <div className={`${isLight ? 'home-Vts-LIGHT' : 'home-Vts'}`}><Link to='/services'>Services</Link></div>
                                                </div>
                                            </div>
                                            <div className="fw-row">
                                                <div className="fw-col-xs-12 ">
                                                    <div className={`${isLight ? 'home-Vts-LIGHT' : 'home-Vts'}`}><Link to="/portfolio">Portfolio</Link></div>
                                                </div>
                                            </div>
                                            <div className="fw-row">
                                                <div className="fw-col-xs-12 ">
                                                    <div className={`${isLight ? 'home-Vts-LIGHT' : 'home-Vts'}`}><Link to="/our-products">Our Products</Link></div>
                                                </div>
                                            </div>

                                            <div className="fw-row">
                                                <div className="fw-col-xs-12 ">
                                                    <div className={`${isLight ? 'home-Vts-LIGHT' : 'home-Vts'}`}><Link to="/blog">Blogs</Link></div>
                                                </div>
                                            </div>
                                            <div className="fw-row">
                                                <div className="fw-col-xs-12 ">
                                                    <div className={`${isLight ? 'home-Vts-LIGHT' : 'home-Vts'}`}><Link to="/contact-us">Contact Us</Link></div>
                                                </div>
                                            </div>
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
            )}
        </div>
    );
};

export default Header;
