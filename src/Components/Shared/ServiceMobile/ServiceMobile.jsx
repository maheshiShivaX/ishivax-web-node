

import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../Contaxt/ThemeContext";
import Faqs from "../Faqs";
const Counter = ({ value }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = value;
        if (start === end) return;

        let duration = 9000;
        let incrementTime = 80;
        let step = Math.ceil(end / (duration / incrementTime));

        const timer = setInterval(() => {
            start += step;
            if (start >= end) {
                start = end;
                clearInterval(timer);
            }
            setCount(start);
        }, incrementTime);

        return () => clearInterval(timer);
    }, [value]);

    return <b>{count}</b>;
};

export default function ServicesStats() {
    const { isLight } = useContext(ThemeContext);

    return (
        <div className="services_mobile_header">
            <Header />
            {/* <section>
                <div class="fw-main-row black-bg-content-services">
                    <div class="fw-full-container-top" style={{ backgroundImage: 'url(/images/bg-dots.png)' }}>
                        <div class="fw-row">
                            <div class="fw-col-xs-12 ">
                                <div class="fw-divider-space" style={{ marginTop: '90px' }}></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section> */}

            <section>
                <div className="fw-main-row middle-content" style={{ backgroundColor: 'f1f1f1' }}>
                    <div className="fw-row">
                        <div className="fw-col-xs-12 ">

                            <div className="fw-divider-space" style={{ marginTop: '120px' }}></div>
                        </div>
                    </div>
                    <div className="fw-container">
                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">
                                <p className="home-services-link"><b><Link to="/">Home</Link></b> {'>'} <b><Link
                                    to="/services">Services</Link> </b> {'>'} Mobile App Development
                                </p>
                            </div>
                        </div>
                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">

                                <div className="fw-divider-space" style={{ marginTop: '20px' }}></div>
                            </div>
                        </div>
                        <div className="fw-row">

                        </div>
                        <div className="fw-row">
                            <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-6  ">
                                <p className="heading-services-subpage">Mobile app Development company for
                                    feature-packed & transformative mobile experiences</p>
                                <p className="portfolio-our-agency">We offer top-natch solutions in internet of
                                    things (iot), ar, ibeacon, wearables, gaming & beyond</p>
                                <div className="frame-66-Y1q frame-submit-requir-button">
                                    <div className="frame-66-Y1q-text">  <Link to="/Quote">
                                        Submit Your Requirement
                                    </Link></div>
                                    <div className="frame-66-Y1q-arrow"></div>
                                </div>
                            </div>
                            <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-6  ">
                                <div className="seo-media-images">
                                    <img src="/images/mobile-services-main.webp" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">
                                <div className="fw-divider-space" style={{ marginTop: '60px' }}></div>
                            </div>
                        </div>
                        <div className="fw-row">
                            <div className={`${isLight ? 'frame-black-services-LIGHT' : 'frame-black-services'}`}>
                                <div className="frame-1-QWE">
                                    <img className="services-projects-image" src={`${isLight ? '/images/projectcount-light.svg' : '/images/projectcount.svg'}`} alt="" />
                                    <p className={`${isLight ? 'services-project-number-LIGHT' : 'services-project-number'}`}><Counter value={997} /></p>
                                    <p className={`${isLight ? 'services-project-name-LIGHT' : 'services-project-name'}`}>Projects</p>
                                </div>
                                <div className="frame-1-QWE">
                                    <img className="services-projects-image" src={`${isLight ? '/images/active-clients-light.svg' : '/images/active-clients.svg'}`} alt="" />
                                    <p className={`${isLight ? 'services-project-number-LIGHT' : 'services-project-number'}`}><Counter value={23} /></p>
                                    <p className={`${isLight ? 'services-project-name-LIGHT' : 'services-project-name'}`}>Active Clients</p>
                                </div>
                                <div className="frame-1-QWE">
                                    <img className="services-projects-image" src={`${isLight ? '/images/commitment-light.svg' : '/images/commitment.svg'}`} alt="" />
                                    <p className={`${isLight ? 'services-project-number-LIGHT' : 'services-project-number'}`}><Counter value={100} /></p>
                                    <p className={`${isLight ? 'services-project-name-LIGHT' : 'services-project-name'}`}>Commitment</p>
                                </div>
                                <div className="frame-1-QWE">
                                    <img className="services-projects-image" src={`${isLight ? '/images/success-rate-light.svg' : '/images/success-rate.svg'}`} alt="" />
                                    <p className={`${isLight ? 'services-project-number-LIGHT' : 'services-project-number'}`}><Counter value={98} /></p>
                                    <p className={`${isLight ? 'services-project-name-LIGHT' : 'services-project-name'}`}>Success Rate</p>
                                </div>
                            </div>
                        </div>
                        <div className="fw-main-row my-5">
                            <div className="fw-container">
                                <div className="fw-row">
                                    <div className="fw-col-xs-12 ">
                                        <div className="fw-divider-space" style={{ marginTop: '60px' }}></div>
                                    </div>
                                </div>

                                <div className="fw-row">
                                    <div className="fw-col-xs-12 ">
                                        <div className="fw-heading fw-heading-h2">
                                            <h2 className='fw-special-title'>ABOUT MOBILE APP DEVELOPMENT</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="fw-row">
                                    <div className="fw-col-xs-12 fw-col-sm-4 fw-col-md-4  ">
                                        <p className="portflio-deep-dive">Building Compelling Mobile Apps for
                                            iPhone and Android</p>
                                    </div>
                                    <div className="fw-col-xs-12 fw-col-sm-8 fw-col-md-8  ">
                                        <p className="portfolio-our-agency">Key strategies include designing an
                                            intuitive interface, leveraging platform-specific features,
                                            optimizing performance, providing personalization options,
                                            ensuring seamless integration, releasing regular updates, and
                                            incorporating user feedback for continuous improvement. These
                                            strategies help in engaging users and making your app stand out.
                                        </p>
                                    </div>
                                </div>
                                <div className="fw-row">
                                    <div className="fw-col-xs-12 ">

                                        <div className="fw-divider-space" style={{ marginTop: '20px' }}></div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="fw-row">
                            <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-3 hover_inAll">

                                <div className="frame-1-RTY ">
                                    <img className="window-image"
                                        src="/images/Frame 1000003976appproto.svg" alt="" />
                                    <p className="frame-services-content-1">App Prototyping & Strategy</p>


                                </div>
                            </div>
                            <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-3 hover_inAll">

                                <div className="frame-1-RTY">
                                    <img className="window-image"
                                        src="/images/Frame 1000003977cloud.svg" alt="" />
                                    <p className="frame-services-content-1">Cloud Mobility Solutions</p>


                                </div>
                            </div>
                            <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-3 hover_inAll">

                                <div className="frame-1-RTY">
                                    <img className="window-image"
                                        src="/images/Frame 1000003978cross-plat.svg" alt="" />
                                    <p className="frame-services-content-1">Cross-platform App Development</p>


                                </div>
                            </div>
                            <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-3 hover_inAll">

                                <div className="frame-1-RTY">
                                    <img className="window-image"
                                        src="/images/Frame 1000003979m-commerce.svg" alt="" />
                                    <p className="frame-services-content-1">m-Commerce, B2B & B2C</p>


                                </div>
                            </div>
                        </div>

                        <div className="fw-row">
                            <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-3 hover_inAll">

                                <div className="frame-1-RTY">
                                    <img className="window-image"
                                        src="/images/Frame 1000003983enterprise.svg" alt="" />
                                    <p className="frame-services-content-1">Enterprise App Development</p>


                                </div>
                            </div>
                            <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-3 hover_inAll">

                                <div className="frame-1-RTY">
                                    <img className="window-image"
                                        src="/images/Frame 1000003982appmain.svg" alt="" />
                                    <p className="frame-services-content-1">App Maintenance Services</p>


                                </div>
                            </div>
                            <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-3 hover_inAll">

                                <div className="frame-1-RTY">
                                    <img className="window-image"
                                        src="/images/Frame 1000003981integration.svg" alt="" />
                                    <p className="frame-services-content-1">Integration with existing enterprise
                                        services & data</p>


                                </div>
                            </div>
                            <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-3 hover_inAll">

                                <div className="frame-1-RTY">
                                    <img className="window-image"
                                        src="/images/Frame 1000003980custommobile.svg" alt="" />
                                    <p className="frame-services-content-1">Custom Mobile App Development</p>


                                </div>
                            </div>
                        </div>


                        <div className="fw-row mt-2">
                            <div className="fw-col-xs-12 fw-col-sm-4 fw-col-md-4 ">
                            </div>
                            <div className="fw-col-xs-12 fw-col-sm-4 fw-col-md-4 ">
                                <div className="frame-66-Y1q frame-submit-requir-button">
                                    <div className="frame-66-Y1q-text">
                                        <Link to="/contact-us">
                                            Let's Discuss Your Project
                                        </Link>
                                    </div>
                                    <div className="frame-66-Y1q-arrow"></div>
                                </div>
                            </div>
                            <div className="fw-col-xs-12 fw-col-sm-4 fw-col-md-4 ">
                            </div>
                        </div>




                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">

                                <div className="fw-divider-space" style={{ marginTop: '40px' }}></div>
                            </div>
                        </div>



                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">
                                <div className="fw-heading fw-heading-h2">
                                    <h2 className='fw-special-title' style={{ textAlign: 'center' }}>INDUSTRIES</h2>
                                </div>
                            </div>
                        </div>


                        <div className="fw-row">
                            <div className="fw-col-xs-12  ">
                                <p className="portflio-deep-dive" style={{ textAlign: 'center' }}>Mobile apps
                                    spanning a range of industries</p>
                            </div>
                            <div className="fw-col-xs-12 ">
                                <p className="portfolio-our-agency" style={{ textAlign: 'center' }}>Key strategies
                                    include designing an intuitive interface</p>
                            </div>
                        </div>
                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">

                                <div className="fw-divider-space" style={{ marginTop: '60px' }}></div>
                            </div>
                        </div>
                        <div className="fw-row" style={{ display: 'flex' }}>
                            <div className="fw-col-indus hover_inAll">
                                <div className="frame-2-IJU" style={{ backgroundColor: 'black' }}>
                                    <img className="hc-image" src="/images/industries-healthcare.svg" alt="" />
                                    <p className="frame-services-content-2" style={{ color: 'white' }}>Healthcare</p>
                                </div>
                            </div>
                            <div className="fw-col-indus hover_inAll">

                                <div className="frame-2-IJU">
                                    <img className="hc-image"
                                        src="/images/industires-bankingfinance.svg" alt="" />
                                    <p className="frame-services-content-2">Banking Finance</p>
                                </div>
                            </div>
                            <div className="fw-col-indus hover_inAll">

                                <div className="frame-2-IJU">
                                    <img className="hc-image"
                                        src="/images/industries-realestate.svg" alt="" />
                                    <p className="frame-services-content-2">Real Estate</p>
                                </div>
                            </div>
                            <div className="fw-col-indus hover_inAll">

                                <div className="frame-2-IJU">
                                    <img className="hc-image"
                                        src="/images/industries-realestate.svg" alt="" />
                                    <p className="frame-services-content-2">Social Network</p>


                                </div>
                            </div>
                        </div>

                        <div className="fw-row" style={{ display: 'flex' }}>
                            <div className="fw-col-indus hover_inAll">

                                <div className="frame-2-IJU">
                                    <img className="hc-image"
                                        src="/images/industries-events.svg" alt="" />
                                    <p className="frame-services-content-2">Events & Tickets</p>


                                </div>
                            </div>
                            <div className="fw-col-indus hover_inAll">

                                <div className="frame-2-IJU">
                                    <img className="hc-image"
                                        src="/images/industries-transport.svg" alt="" />
                                    <p className="frame-services-content-2">Transport & Automotive</p>


                                </div>
                            </div>
                            <div className="fw-col-indus hover_inAll">

                                <div className="frame-2-IJU">
                                    <img className="hc-image"
                                        src="/images/industries-ecommerce.svg" alt="" />
                                    <p className="frame-services-content-2">E-Commerce</p>


                                </div>
                            </div>
                            <div className="fw-col-indus hover_inAll">

                                <div className="frame-2-IJU">
                                    <img className="hc-image"
                                        src="/images/industries-media.svg" alt="" />
                                    <p className="frame-services-content-2">Media & Entertainment</p>


                                </div>
                            </div>
                            <div className="fw-col-indus hover_inAll">

                                <div className="frame-2-IJU">
                                    <img className="hc-image"
                                        src="/images/industries-elearnign.svg" alt="" />
                                    <p className="frame-services-content-2">
                                        Education &
                                        eLearning
                                    </p>


                                </div>
                            </div>
                            <div className="fw-col-indus hover_inAll">

                                <div className="frame-2-IJU">
                                    <img className="hc-image"
                                        src="/images/industries-directory.svg" alt="" />
                                    <p className="frame-services-content-2">Directory</p>


                                </div>
                            </div>
                        </div>

                        <div className="fw-row" style={{ display: 'flex' }}>
                            <div className="fw-col-indus hover_inAll">

                                <div className="frame-2-IJU">
                                    <img className="hc-image" src="/images/industries-travelhospitality.svg" alt="" />
                                    <p className="frame-services-content-2">
                                        Travel & Hospitality</p>


                                </div>
                            </div>
                            <div className="fw-col-indus hover_inAll">

                                <div className="frame-2-IJU">
                                    <img className="hc-image" src="/images/industries-foodandrest.svg" alt="" />
                                    <p className="frame-services-content-2">Food & Restaurant </p>


                                </div>
                            </div>
                            <div className="fw-col-indus hover_inAll">

                                <div className="frame-2-IJU">
                                    <img className="hc-image" src="/images/industries-enterprise.svg" alt="" />
                                    <p className="frame-services-content-2">Enterprise</p>


                                </div>
                            </div>
                            <div className="fw-col-indus hover_inAll">

                                <div className="frame-2-IJU">
                                    <img className="hc-image" src="/images/industires-on-demand.svg" alt="" />
                                    <p className="frame-services-content-2">On-Demand Service</p>


                                </div>
                            </div>
                        </div>
                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">

                                <div className="fw-divider-space" style={{ marginTop: '60px' }}></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section>

                <div className={`fw-main-row ${isLight ? 'light-bg-content' : 'black-bg-content'}`}>
                    <div className="fw-full-container-top py-5">
                        <div className="content-under-image">

                            <div className="fw-row ">
                                <img className="vector-line-1 mt-0" src="/images/Vector-upper-arrow.png" alt="" />
                            </div>

                            <div className="fw-row">
                                <div className="fw-container ">
                                    <div className="fw-col-md-4 vector-className">
                                        <div className="dot-1"></div>
                                        <div className="dot-2"></div>
                                        <img className="vector-cross-1" src="/images/vector.png" alt="" />
                                        <div className="dot-3"></div>
                                        <div className="dot-4"></div>
                                    </div>

                                    <div className="fw-col-md-4">
                                        <div className="fw-heading fw-heading-h2">
                                            <h2 className={`fw-special-title  ${isLight ? 'vector-heading-LIGHT' : 'vector-heading'}`}>GET IN TOUCH
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="fw-col-md-4  vector-className">
                                        <div className="dot-5"></div>
                                        <div className="dot-6"></div>
                                        <img className="vector-cross-2" src="/images/vector.png" alt="" />
                                        <div className="dot-7"></div>
                                        <div className="dot-8"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="fw-row ">
                                <img className="vector-line-2" src="/images/Vector-upper-arrow.png" alt="" />
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
                                        <p className={`${isLight ? 'services-for-more-info-LIGHT' : 'services-for-more-info'}`}>Find out about how our
                                            <b>services</b> can be integrated into <b>your business.x</b>
                                        </p>
                                    </div>
                                    <div className="fw-col-xs-12"
                                        style={{ display: 'flex', justifyContent: 'center' }}>
                                        <div className={`join-our-team-button ${isLight ? 'frame-66-Y1q-LIGHT' : 'frame-66-Y1q'}`}>
                                            <div className="frame-66-Y1q-arrow get-quote-logo"></div>
                                            <div className="frame-66-Y1q-text join-our-team-text">
                                                <Link to="/Quote">
                                                    Get A Quote
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fw-col-xs-12 ">
                                        <div className="fw-divider-space" style={{ marginTop: '20px' }}></div>
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

                        <Faqs />

                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">
                                <div className="fw-divider-space" style={{ marginTop: '60px' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
};