import { useContext } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { ThemeContext } from "../../../Contaxt/ThemeContext";

const Join = () => {
    const { isLight } = useContext(ThemeContext);

    return (
        <div>
            <Header />
            <section>
                <div className={`fw-main-row ${isLight ? 'black-bg-content-LIGHT' : 'black-bg-content'}`}>
                    <div className="fw-full-container-top" style={{ backgroundImage: 'url(./images/bg-dots.png)' }}>
                        <div className='fw-container'>
                            <div className="fw-row">
                                <div className="fw-col-xs-12 ">
                                    <div className="fw-divider-space"></div>
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
                            <div className="content-under-image">
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
                                                <h2 className={`${isLight ? 'fw-special-title vector-heading-LIGHT' : 'fw-special-title vector-heading'}`}>JOIN US</h2>
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
                                <div className="fw-row">
                                    <div className="fw-col-xs-12 ">
                                        <div className="fw-divider-space" style={{ marginTop: '20px' }}></div>
                                    </div>
                                </div>
                                <div className="fw-row">
                                    <div className="container">
                                        <div className="fw-col-xs-12 ">

                                        </div>
                                        <div className="fw-col-xs-12 ">
                                            <p className="heading-common-main">LET'S START WORKING TOGETHER. GET IN
                                                TOUCH
                                            </p>
                                            <p className="heading-common-content">Join iShivax and accelerate your career with cutting-edge projects and a dynamic team!</p>

                                        </div>
                                        <div className="fw-col-xs-12 ">
                                        </div>
                                    </div>
                                </div>
                                <div className="fw-row">
                                    <div className="fw-col-xs-12 ">
                                        <div className="fw-divider-space" style={{ marginTop: '50px' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="fw-main-row middle-content" style={{ backgroundColor: '#f1f1f1' }}>
                    <div className="fw-container">

                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">

                                <div className="fw-divider-space" style={{ marginTop: '60px' }}></div>
                            </div>
                        </div>


                        <div className="fw-row">

                        </div>
                        <div className="fw-row">
                            <div className="fw-col-xs-12 fw-col-sm-4 fw-col-md-4  ">

                                {/* <!-- <p className="portflio-deep-dive">Have questions?
                                </p>
                                <p className="portflio-deep-dive">
                                    Get in touch!</p> --> */}

                                <div className="fw-row">
                                    <div className="fw-col-xs-12 ">

                                        <div className="fw-divider-space" style={{ marginTop: '60px' }}></div>
                                    </div>
                                </div>
                                <div className="frame-loc-info" style={{ display: 'flex' }}>
                                    <img src="./images/contact-location.svg" alt="" />
                                    <p className="content-loc-info">iShivax - B-8/2 Shiv Marg, Banipark, Jaipur, Rajasthan - 302016 (Bharat)</p>
                                </div>
                                <div className="frame-loc-info" style={{ display: 'flex' }}>
                                    <img src="./images/contact-location.svg" alt="" />
                                    <p className="content-loc-info">iShivax LLC -205, The Hills Drive, Texas, Austin - 76738 (USA)</p>
                                </div>
                                <div className="frame-loc-info" style={{ display: 'flex' }}>
                                    <img src="./images/conttact-mobile-icon.svg" alt="" />
                                    <p className="content-loc-info">+91-9782345795 / +1-801 701 1806</p>
                                </div>
                                <div className="frame-loc-info" style={{ display: 'flex' }}>
                                    <img src="./images/contact-email-icon.svg" alt="" />
                                    <p className="content-loc-info">support@ishivax.com</p>
                                </div>
                            </div>
                            <div className="fw-col-xs-12 fw-col-sm-8 fw-col-md-8  ">
                                <form action="https://api.web3forms.com/submit" method="POST">
                                    <fieldset>
                                        <input type="hidden" name="access_key"
                                            value="acc730d2-4e5f-41da-a1f0-da53e38c0fe3" />
                                        <div className="fw-row">
                                            <div
                                                className="fw-col-xs-12 fw-col-md-6 fw-col-lg-6 contact-form-padding">

                                                <input className="text-className" type="text" placeholder="Full Name"
                                                    id="name" name="user_name" required />

                                            </div>
                                            <div
                                                className="fw-col-xs-12 fw-col-md-6 fw-col-lg-6 contact-form-padding">

                                                <input type="email" placeholder="Email Address" id="mail"
                                                    name="user_email" required />

                                            </div>
                                        </div>
                                        <div className="fw-row">
                                            <div
                                                className="fw-col-xs-12 fw-col-md-6 fw-col-lg-6 contact-form-padding">
                                                <input type="tel" id="telnumber" placeholder="Phone Number*"
                                                    name="user_number" required />
                                            </div>
                                        </div>
                                        <div className="fw-row text_area_box">
                                            <div className="fw-col-xs-12 contact-form-padding">
                                                <textarea id="bio" placeholder="Provide the URL to your resume."
                                                    name="user_bio"></textarea>
                                            </div>
                                        </div>
                                    </fieldset>

                                    <div className="fw-row">
                                        <button type="submit" className="frame-66-Y1q frame-portfolio-button">
                                            <div className="frame-66-Y1q-text">Send Message</div>
                                            <div className="frame-66-Y1q-arrow"></div>
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>

                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">

                                <div className="fw-divider-space" style={{ marginTop: '60px' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                <a href="https://maps.app.goo.gl/hrpY4tvpMSnYMUPp8?g_st=iw">
                    <div className="contact-location-map">
                    </div>
                </a>
            </section>
            <Footer />
        </div>
    )
}

export default Join;