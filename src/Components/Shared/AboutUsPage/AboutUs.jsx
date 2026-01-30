import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../../Contaxt/ThemeContext";
import MeetOurTeam from "../../Common/AboutUs/MeetOurTeam";

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
        <>
            <Header />
            <section>
                <div className={`fw-main-row ${isLight ? 'black-bg-content-LIGHT' : 'black-bg-content'}`}>
                    <div className="fw-full-container-top" style={{ backgroundImage: 'url(/images/bg-dots.png)' }}>
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
                                                <h2 className={`${isLight ? 'fw-special-title vector-heading-LIGHT' : 'fw-special-title vector-heading'}`}>ABOUT US</h2>
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
                                            <p className={`${isLight ? 'heading-common-main-LIGHT' : 'heading-common-main'}`}>FULL DEDEICATED & EXPERIENCED
                                                DEVELOPER
                                            </p>

                                        </div>
                                        <div className="fw-col-xs-12 ">

                                        </div>
                                    </div>

                                </div>

                                <div className="fw-row about-top-frame">
                                    <div className="container">
                                        {!isLight && (
                                            <div className="fw-col-xs-12 ">
                                                <div className="">
                                                    <img className="services-image-desk"
                                                        src="/images/TECHtechaboutus.webp" alt="tech" style={{ width: "80%" }} />
                                                </div>
                                            </div>
                                        )}
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
                <div className="fw-main-row middle-content" style={{ background: '#f1f1f1' }}>
                    <div className="fw-container">

                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">

                                <div className="fw-divider-space" style={{ marginTop: '60px' }}></div>
                            </div>
                        </div>


                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">
                                <div className="fw-heading fw-heading-h2">
                                    <h2 className='fw-special-title'>OUR EMINENT SOLUTIONS</h2>
                                </div>
                            </div>
                        </div>
                        <div className="fw-row">
                            <div className="fw-col-xs-12 fw-col-sm-4 fw-col-md-4  ">
                                <p className="exciting-ER4">iShivax is focused on engineering solutions that drive
                                    significant and beneficial results using cutting-edge technology.</p>
                            </div>
                            <div className="fw-col-xs-12 fw-col-sm-8 fw-col-md-8  ">
                                <p className="portfolio-our-agency">Founded in 2019, iShivax delivers top-tier
                                    consulting and IT services, along with superior offshore outsourcing
                                    solutions, to clients in over 25 countries. We offer comprehensive
                                    end-to-end solutions tailored to meet business needs by leveraging our
                                    extensive domain expertise, deep technological knowledge, and a keen
                                    understanding of industry trends. Our methodology is powered by a robust
                                    team of more than 50 skilled professionals who apply their technical acumen
                                    and experience to propel businesses to new heights.</p>
                            </div>
                        </div>



                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">

                                <div className="fw-divider-space" style={{ marginTop: '60px' }}></div>
                            </div>
                        </div>


                        <div className="fw-row" style={{ display: 'flex' }}>
                            <div className="fw-col-xs-12 ">

                            </div>
                            <div className="fw-col-xs-12 ">
                                <div className="seo-media-images">
                                    <img className="services-image-desk" src="/images/about-lifecode.webp" alt="" />
                                </div>
                            </div>
                            <div className="fw-col-xs-12 ">
                            </div>
                        </div>



                        <div className="fw-row">
                            <div className="about-frame-vision">

                                <div className="frame-1-QWE">
                                    <img className="about-vision-image" src="/images/our-vision.svg" alt="" />
                                    <p className="about-our-vision">OUR VISION</p>
                                    <p className="about-out-vision-content">To become the premier global provider of
                                        cutting-edge software development solutions, enabling companies to
                                        achieve their objectives and elevate the customer experience.</p>
                                </div>
                                <div className="frame-1-QWE">
                                    <img className="about-vision-image" src="/images/our-mission.svg" alt="" />
                                    <p className="about-our-vision">OUR MISSION</p>
                                    <p className="about-out-vision-content">To turn business visions into realities
                                        through relentless passion, advanced technological innovation, and a
                                        steadfast commitment to our clients.</p>
                                </div>

                            </div>
                        </div>





                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">

                                <div className="fw-divider-space" style={{ marginTop: '60px' }}></div>
                            </div>
                        </div>


                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">
                                <div className="fw-heading fw-heading-h2">
                                    <h2 className='fw-special-title' style={{ textAlign: 'center' }}>WHY
                                        ISHIVAX SHINES?</h2>
                                </div>
                                <div className="fw-divider-space" style={{ marginTop: '20px' }}></div>

                                <p className="portfolio-our-agency" style={{ textAlign: 'center' }}>Our dedication to
                                    developing impactful solutions sets the foundation for our success. In the
                                    fast-evolving digital landscape, merging innovative technology with robust
                                    business practices is key to achieving standout success. iShivax propels
                                    businesses forward, enhancing growth by seamlessly integrating advanced
                                    technology with industry benchmarks, core values, and operational
                                    principles. Our commitment to these values is evident in our performance,
                                    establishing iShivax as a leading provider of IT solutions in the tech
                                    industry.
                                </p>

                            </div>
                        </div>

                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">

                                <div className="fw-divider-space" style={{ marginTop: '20px' }}></div>
                            </div>
                        </div>

                        <div className="fw-row">
                            <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-4 hover_inAll">

                                <div className="frame-1-OKL">
                                    <img className="window-image" src="/images/Frame3877.svg" alt="" />
                                    <p className="frame-content-title">Industry-Standard-Practices</p>

                                    <ul className="frame-content-para">
                                        <li>iShivax offers a comprehensive suite of IT services, providing a
                                            single platform for all your technology needs. </li>
                                        <li>We deploy domain experts to ensure the highest levels of
                                            specialization and efficiency.</li>
                                        <li>Our commitment to quality is reinforced through regular testing and
                                            QA processes.</li>
                                        <li>We utilize leading methodologies including Agile, Kanban, and
                                            Waterfall to optimize project delivery and ensure superior outcomes.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-4 hover_inAll">

                                <div className="frame-1-OKL">
                                    <img className="window-image" src="/images/Frame3875.svg" alt="" />
                                    <p className="frame-content-title">Innovative Solutions Architecture</p>
                                    <ul className="frame-content-para">


                                        <li>IShivax is at the forefront of creating bespoke solutions tailored
                                            to unique business challenges.</li>
                                        <li>Our approach involves leveraging the latest technological
                                            advancements to design systems that are not only efficient but also
                                            scalable and future-proof.</li>
                                        <li>We ensure that our clients remain competitive and agile in a rapidly
                                            evolving digital landscape.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-4 hover_inAll">

                                <div className="frame-1-OKL">
                                    <img className="window-image" src="/images/Frame3876.svg" alt="" />
                                    <p className="frame-content-title">Strategic Technology Integration</p>
                                    <ul className="frame-content-para">
                                        <li>At iShivax, we specialize in integrating complex technological
                                            solutions into your business processes to drive efficiency and
                                            growth.</li>
                                        <li>Our strategic approach focuses on aligning your technology
                                            infrastructure with business objectives to maximize performance.
                                        </li>
                                        <li>We employ a mix of emerging technologies and proven frameworks to
                                            deliver seamless and impactful technology integration.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>




                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">

                                <div className="fw-divider-space" style={{ marginTop: '40px' }}></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <MeetOurTeam isLight={isLight} />
            
            <section>
                <div className="fw-main-row middle-content" style={{ backgroundColor: '#f1f1f1' }}>
                    <div className="fw-container">
                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">
                                <div className="fw-divider-space" style={{ marginTop: '60px' }}></div>
                            </div>
                        </div>

                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">
                                <div className="fw-heading fw-heading-h2">
                                    <h2 className='fw-special-title'>Our Expertise</h2>
                                </div>
                            </div>
                        </div>
                        <div className="fw-row">
                            <div className="fw-col-xs-12 fw-col-sm-4 fw-col-md-4  ">
                                <p className="exciting-ER4">Cutting-Edge Software Solutions & Strategic Development
                                </p>
                            </div>
                            <div className="fw-col-xs-12 fw-col-sm-8 fw-col-md-8  ">
                                <p className="exciting-ER9">At iShivax, our focus is on enhancing the efficiency and
                                    effectiveness of your digital investments. Renowned for our innovative
                                    software solutions, we have crafted numerous high-performance platforms.
                                    With our team’s extensive experience in software development, both in
                                    traditional and emerging technologies, we offer unparalleled insights and
                                    services to empower your business in the dynamic digital landscape.</p>
                            </div>
                        </div>

                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">

                                <div className="fw-divider-space" style={{ marginTop: '20px' }}></div>
                            </div>
                        </div>

                        <div className="fw-row">
                            <div className="fw-col-xs-12 fw-col-sm-4 fw-col-md-4 ">

                                <div className="frame-2-PLM hover_inAll">
                                    <img className="services-call-image" src="/images/contact.svg" alt="" />
                                    <p className="frame-content-title" style={{ textAlign: 'center' }}>Request a
                                        Phone Call</p>
                                    <p className="frame-content-para" style={{ textAlign: 'center' }}>
                                        Hotline 24/7</p>
                                    <p className="frame-content-link">+91 982 919-7777 </p>

                                </div>
                            </div>
                            <div className="fw-col-xs-12 fw-col-sm-4 fw-col-md-4 ">

                                <div className="frame-2-PLM hover_inAll">
                                    <img className="services-call-image" src="/images/site-audit.svg" alt="" />
                                    <p className="frame-content-title" style={{ textAlign: 'center' }}>Get an Site Audit
                                    </p>
                                    <p className="frame-content-para" style={{ textAlign: 'center' }}>
                                        Expert Consult</p>
                                    <Link to="/contact-us">
                                        <p className="frame-content-link"> Free Consult </p>

                                    </Link>


                                </div>
                            </div>
                            <div className="fw-col-xs-12 fw-col-sm-4 fw-col-md-4 hover_inAll ">

                                <div className="frame-2-PLM ">
                                    <img className="services-call-image" src="/images/whoarewe.svg" alt="" />
                                    <p className="frame-content-title" style={{ textAlign: 'center' }}>Who we are?</p>
                                    <p className="frame-content-para" style={{ textAlign: 'center' }}>
                                        Introduce</p>

                                    <a href="/#/aboutus">
                                        <p className="frame-content-link"> About Us</p>

                                    </a>

                                </div>
                            </div>
                        </div>
                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">

                                <div className="fw-divider-space" style={{ marginTop: '40px' }}></div>
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

                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">
                                <div className="fw-divider-space" style={{ marginTop: '60px' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
};