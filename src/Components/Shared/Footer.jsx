import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Contaxt/ThemeContext";

const Footer = () => {
    const { isLight } = useContext(ThemeContext);

    return (
        <div className="fw-main-row black-bg-content footer_main"
            style={{
                backgroundImage: isLight
                    ? 'url(/images/lightbanner.webp)'
                    : 'url(/images/bg-black.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="fw-full-container" style={{ backgroundImage: 'url(/images/bg-dots.png)' }}>
                <div className="content-under-image">
                    <div className="fw-row">
                        {!isLight ? (
                            <img className="vector-line-1" src="/images/Vector-upper-arrow.png" alt="" />
                        ) : (
                            <p className="vector-line-8" ></p>
                        )}
                    </div>
                    <div className="fw-row">
                        <div className="fw-container vector-class">
                            {!isLight ? (
                                <div className="fw-col-md-4 footer_img_set">
                                    <div className="dot-1"></div>
                                    <div className="dot-2"></div>
                                    <img className="vector-cross-1" src="/images/vector.png" alt="" />
                                    <div className="dot-9"></div>
                                    <div className="dot-10"></div>
                                </div>
                            ) : (
                                <div className="fw-col-md-4 footer_img_set">
                                </div>
                            )}
                            <div className="fw-col-md-4">
                                <div
                                    className="group-3-ywq"
                                >
                                    <img className="group-2-6oR" style={{ margin: isLight ? "50px 0 150px" : "0" }} src={
                                        isLight
                                            ? "/images/logo-light.svg"
                                            : "/images/ishivaxlogo.png"
                                    } alt="" />
                                </div>
                            </div>
                            {!isLight ? (
                                <div className="fw-col-md-4  vector-class">
                                    <div className="dot-5"></div>
                                    <div className="dot-6"></div>
                                    <img className="vector-cross-2" src="/images/vector.png" alt="" />
                                    <div className="dot-7"></div>
                                    <div className="dot-8"></div>
                                </div>
                            ) : (
                                <div className="fw-col-md-4  vector-class">
                                </div>
                            )}
                        </div>
                    </div>
                    {!isLight ? (
                        <div className="fw-row ">
                            <img className="vector-line-2" src="/images/Vector-upper-arrow.png" alt="" />
                        </div>
                    ) : (
                        <div className="fw-row ">
                            <p className="vector-line-10" ></p>
                        </div>
                    )}

                    <div className="fw-row">
                        <div className="fw-col-xs-12 ">
                            <div className="fw-divider-space" style={{ marginTop: '20px' }}></div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-6">
                                <aside id="text-2" className="widget widget_text">
                                    <div className="textwidget">
                                        <div className="footer-desc footer-col">
                                            <div className="logo lg-bottom">
                                                <h1 className={`${isLight ? 'footer-h2-LIGHT' : 'footer-h2'}`}>CONNECT WITH US-LET'S INNOVATE
                                                    TOGETHER.</h1>
                                            </div>
                                            <div className="footer-content">
                                                <Link to="/contact-us">
                                                    <div className={`${isLight ? 'frame-66-4mL-LIGHT ' : 'frame-66-4mL'}`}>
                                                        <div className={`${isLight ? 'portfolio-white-LIGHT ' : 'portfolio-white'}`}>Get In Touch
                                                        </div>
                                                        <img className="arrow-right-ByH"
                                                            src="/images/arrow-right-white.png" alt="" />
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="">
                                                <aside id="nav_menu-2" className="widget widget_nav_menu">
                                                    <h3 className={`${isLight ? 'footer-widget-title-LIGHT mt-3 mt-sm-0' : 'footer-widget-title mt-3 mt-sm-0'}`}>Follow Us</h3>
                                                    <div className="menu-footer-menu-container">
                                                        <div id="menu-footer-menu" className="menu d-flex justify-content-start gap-3">
                                                            <a target="_blank"
                                                                href="https://www.instagram.com/ishivax_official?igsh=MTA0NWwyejhldDQ3eg==" rel="noreferrer">
                                                                <p className={`${isLight ? 'footer-menu-item-LIGHT ' : 'footer-menu-item'}`}>
                                                                    <img className="socialmedia-image"

                                                                        src={
                                                                            isLight
                                                                                ? "/images/instagramwhite.svg"
                                                                                : "/images/instagram.svg"
                                                                        }
                                                                        alt="" />
                                                                    {/* Instagram */}
                                                                </p>
                                                            </a>
                                                            <a href="https://www.linkedin.com/company/ishivax/" target="_blank" rel="noreferrer">
                                                                <p className={`${isLight ? 'footer-menu-item-LIGHT ' : 'footer-menu-item'}`}>
                                                                    <img className="socialmedia-image"
                                                                        alt=""
                                                                        src={
                                                                            isLight
                                                                                ? "/images/linkedinwhite.svg"
                                                                                : "/images/linkedin.svg"
                                                                        }

                                                                    />
                                                                    {/* LinkedIn */}
                                                                </p>
                                                            </a>

                                                            <a href="https://x.com/iShivaxllc" target="_blank" rel="noreferrer">
                                                                <p className={`${isLight ? 'footer-menu-item-LIGHT ' : 'footer-menu-item'}`}>
                                                                    <img className="socialmedia-image"

                                                                        src={
                                                                            isLight
                                                                                ? "/images/Frametwitteethemes.svg"
                                                                                : "/images/Frametwitter.svg"
                                                                        }
                                                                        alt="" />
                                                                    {/* Twitter */}
                                                                </p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </aside>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                            <div className="col-md-6 col-12 tech-quick row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 ">
                                    <aside id="nav_menu-2" className="widget widget_nav_menu ">
                                        <h3 className={`${isLight ? 'footer-widget-title-LIGHT mt-3 mt-sm-0' : 'footer-widget-title mt-3 mt-sm-0'}`} >Technologies</h3>
                                        <div className="menu-footer-menu-container">
                                            <div id="menu-footer-menu" className="menu">
                                                <Link to="/services">
                                                    <p className={`${isLight ? 'footer-menu-item-LIGHT ' : 'footer-menu-item'}`}>
                                                        Microsoft
                                                        Technologies
                                                    </p>
                                                </Link>

                                                <Link to="/services">
                                                    <p className={`${isLight ? 'footer-menu-item-LIGHT ' : 'footer-menu-item'}`}>
                                                        Digital
                                                        Marketing
                                                    </p>
                                                </Link>
                                                <Link to="/services">
                                                    <p className={`${isLight ? 'footer-menu-item-LIGHT ' : 'footer-menu-item'}`}>
                                                        CRMS/HRMS
                                                        Technologies
                                                    </p>
                                                </Link>
                                                <Link to="/services">
                                                    <p className={`${isLight ? 'footer-menu-item-LIGHT ' : 'footer-menu-item'}`}>
                                                        Mobile App
                                                        Development
                                                    </p>
                                                </Link>

                                                <Link to="/services">
                                                    <p className={`${isLight ? 'footer-menu-item-LIGHT ' : 'footer-menu-item'}`}>
                                                        High Fidelity
                                                        Design
                                                    </p>
                                                </Link>
                                                <Link to="/services">
                                                    <p className={`${isLight ? 'footer-menu-item-LIGHT ' : 'footer-menu-item'}`}>
                                                        Web
                                                        Development
                                                    </p>
                                                </Link>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 ">
                                    <aside id="nav_menu-3" className="widget widget_nav_menu">
                                        <h3 className={`${isLight ? 'footer-widget-title-LIGHT mt-3 mt-sm-0' : 'footer-widget-title mt-3 mt-sm-0'}`}>Quick Link</h3>
                                        <div className="menu-payment-container">
                                            <div id="menu-footer-menu" className="menu">
                                                <Link to="/">
                                                    <p className={`${isLight ? 'footer-menu-item-LIGHT ' : 'footer-menu-item'}`}>
                                                        Home
                                                    </p>
                                                </Link>

                                                <Link to="/services">
                                                    <p className={`${isLight ? 'footer-menu-item-LIGHT ' : 'footer-menu-item'}`}>
                                                        Services
                                                    </p>
                                                </Link>
                                                <Link to="/join-our-team">
                                                    <p className={`${isLight ? 'footer-menu-item-LIGHT ' : 'footer-menu-item'}`}>
                                                        Career
                                                    </p>
                                                </Link>
                                                <Link to="/aboutus">
                                                    <p className={`${isLight ? 'footer-menu-item-LIGHT ' : 'footer-menu-item'}`}>
                                                        About Us
                                                    </p>
                                                </Link>
                                                <Link to="/service-mobile-app">
                                                    <p className={`${isLight ? 'footer-menu-item-LIGHT ' : 'footer-menu-item'}`}>
                                                        Development
                                                    </p>
                                                </Link>
                                                <Link to="/contact-us">
                                                    <p className={`${isLight ? 'footer-menu-item-LIGHT ' : 'footer-menu-item'}`}>
                                                        Contact
                                                    </p>
                                                </Link>
                                                <Link to="/privacy-policy">
                                                    <p className={`${isLight ? 'footer-menu-item-LIGHT ' : 'footer-menu-item'}`}>
                                                        Privacy Policy
                                                    </p>
                                                </Link>
                                                <Link to="/terms-conditions">
                                                    <p className={`${isLight ? 'footer-menu-item-LIGHT ' : 'footer-menu-item'}`}>
                                                        Terms & Conditions
                                                    </p>
                                                </Link>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4 mt-sm-0">
                            <div className="col-md-6 col-lg-6 ">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                        <aside id="nav_menu-2" className="widget widget_nav_menu">
                                            {/* <h3 className="footer-widget-title"></h3> */}
                                            <img className="frame-logo-image hover_inAll" src="/images/41.png" alt="" />
                                        </aside>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                        <aside id="nav_menu-2" className="widget widget_nav_menu">
                                            {/* <h3 className="footer-widget-title"></h3> */}
                                            <img className="frame-logo-image hover_inAll" src="/images/42.png" alt="" />
                                        </aside>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                        <aside id="nav_menu-2" className="widget widget_nav_menu">
                                            {/* <h3 className="footer-widget-title"></h3> */}
                                            <img className="frame-logo-image hover_inAll" src="/images/43.png" alt="" />
                                        </aside>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-6 tech-quick">
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <aside id="nav_menu-2" className="widget widget_nav_menu">
                                        {/* <h3 className="footer-widget-title"></h3> */}

                                        <img src="https://images.dmca.com/Badges/dmca-badge-w250-2x1-04.png?ID=3b5e8e2d-1356-4a0e-be12-d84f99496987"
                                            alt="DMCA.com Protection Status" className="footer_dmca hover_inAll" />
                                    </aside>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="fw-row ">
                        {!isLight ? (
                            <img className="vector-line-1" src="/images/Vector-upper-arrow.png"
                                style={{ marginTop: '10px' }} alt="" />
                        ) : (
                            <p></p>
                        )}
                    </div>

                    <div className="fw-row">
                        <div className="fw-container">
                            {!isLight ? (
                                <div className="fw-col-md-4 vector-class">
                                    <div className="dot-1"></div>
                                    <div className="dot-2"></div>
                                    <img className="vector-cross-1" src="/images/vector.png" alt="" />
                                    <div className="dot-3"></div>
                                    <div className="dot-4"></div>
                                </div>
                            ) : (
                                <div className="fw-col-md-4 vector-class">
                                </div>
                            )}
                            <div className="fw-col-md-4">
                                <p className={`${isLight ? 'footer-copyright-LIGHT ' : 'footer-copyright'}`}>Copyright © 2025 <a href="https://ishivax.com/">iShivax® All rights reserved</a></p>
                            </div>
                            {!isLight ? (
                                <div className="fw-col-md-4 vector-class">
                                    <div className="dot-5"></div>
                                    <div className="dot-6"></div>
                                    <img className="vector-cross-2" src="/images/vector.png" alt="" />
                                    <div className="dot-7"></div>
                                    <div className="dot-8"></div>
                                </div>
                            ) : (
                                <div className="fw-col-md-4 vector-class">
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="fw-row">
                        {!isLight ? (
                            <img className="vector-line-2" src="/images/Vector-upper-arrow.png" alt="" />
                        ) : (
                            <p></p>
                        )}
                    </div>
                    <div className="fw-row">
                        <div className="fw-col-xs-12 ">
                            <div className="fw-divider-space" style={{ marginTop: '10px' }}></div>
                        </div>
                    </div>
                </div>
                {/* <!-- Whatsapp Icon Start --> */}
                <div className="wa-chat-icon">
                    <a href="https://wa.me/18017011806?text=Hi" target="_blank" rel="noreferrer">
                        <img src="/images/whatsapp-icon.png" alt="" /></a>
                </div>
                {/* <!-- Whatsapp Icon END --> */}
            </div>
        </div>
    )
}

export default Footer;