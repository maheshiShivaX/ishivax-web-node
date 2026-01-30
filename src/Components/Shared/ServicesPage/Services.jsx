import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../../Contaxt/ThemeContext";
import axiosIns, { API_URL } from "../../../config";
import { decryptData } from "../../../_services";

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

const ServicesStats = () => {
    const { isLight } = useContext(ThemeContext);
    const [data, setData] = useState()
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const response = await axiosIns.get(API_URL.getServices);

            // Get the encrypted header
            const encrypted = response?.data?.payload;

            // Fallback if header is missing
            if (!encrypted) {
                setData([]);
                return;
            }

            // Attempt to decrypt
            const decrypted = decryptData(encrypted);

            // Validate decrypted data
            if (decrypted && decrypted.isSuccess === 1 && Array.isArray(decrypted.data)) {
                const sortedData = decrypted?.data.sort((a, b) => a.id - b.id);

                setData(sortedData);
            } else {
                setData([]);
            }
        } catch (error) {
            setData([]);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <Header />
            <section>
                <div className={`fw-main-row ${isLight ? 'black-bg-content-LIGHT' : 'black-bg-content'}`}>
                    <div className="fw-full-container-top pb-5" style={{ backgroundImage: 'url(./images/bg-dots.png)' }}>
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
                                                <h2 className={`${isLight ? 'fw-special-title vector-heading-LIGHT' : 'fw-special-title vector-heading'}`}>SERVICES</h2>
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
                                            <p className={`${isLight ? 'heading-common-main-LIGHT' : 'heading-common-main'}`}>Fully Integrated to Transform
                                                Businesses & Create Iconic Brands</p>
                                            <p className={`${isLight ? 'heading-common-content-LIGHT' : 'heading-common-content'}`}>At iShivax, integration is our
                                                ethos. We handle all projects in-house, from conception to
                                                execution. No off-the-shelf solutions here—only bespoke
                                                strategies crafted with creativity and expertise in design,
                                                development, and digital marketing. Clients aren't just
                                                customers; they're partners, because we prioritize their needs
                                                above all.
                                            </p>
                                        </div>
                                        <div className="fw-col-xs-12 ">

                                        </div>
                                    </div>

                                </div>

                                <div className="fw-row" style={{ display: 'flex' }}>
                                    <div className="fw-col-xs-12 ">

                                    </div>
                                    {!isLight && (
                                        <div className="fw-col-xs-12 ">
                                            <div className="">
                                                <img className="services-image-desk"
                                                    src="./images/Services-main.webp" alt="Services" style={{ width: "80%" }} />
                                            </div>
                                        </div>
                                    )}
                                    <div className="fw-col-xs-12 ">
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
                            <div className="fw-col-xs-12 ">
                                <div className="fw-heading fw-heading-h2">
                                    <h2 className='fw-special-title'>OUR SERVICES</h2>
                                </div>
                            </div>
                        </div>
                        <div className="fw-row">
                            <div className="fw-col-xs-12 fw-col-sm-4 fw-col-md-4  ">
                                <p className="exciting-ER4">Our Comprehensive Offerings</p>
                            </div>
                            <div className="fw-col-xs-12 fw-col-sm-8 fw-col-md-8  ">
                                <p className="portfolio-our-agency">At iShivax, we provide full-service
                                    solutions tailored to your needs. We specialize in crafting innovative
                                    strategies and tactics to fuel your business growth. Explore some of our
                                    exemplary projects below.</p>
                            </div>
                        </div>
                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">
                                <div className="fw-divider-space" style={{ marginTop: '20px' }}></div>
                            </div>
                        </div>

                        <div className="row">
                            {data?.map((item, i) => {
                                const shortDesc = item.description?.substring(0, 300) + "...";

                                return (
                                    <div key={i} className="col-md-4 col-sm-6 col-12 mb-4 hover_inAll">
                                        <div className="frame-1-PLM">
                                            <img className="window-image" src={item?.icon} alt={item?.title || "service icon"} />
                                            <p className="frame-content-title">{item?.title}</p>

                                            <div
                                                className="frame-content-para"
                                                dangerouslySetInnerHTML={{
                                                    __html: shortDesc
                                                }}
                                            />

                                            <div className="readmore_services_btn">
                                                <button onClick={() => navigate(`/services-details/${item?.slug}`)}>
                                                    KNOW MORE
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                            <div className="fw-row">
                                <div className="fw-col-xs-12 ">
                                    <div className="fw-divider-space" style={{ marginTop: '20px' }}></div>
                                </div>
                            </div>

                            <div className="fw-row">
                                <div className="fw-col-xs-12 ">
                                    <div className="fw-divider-space" style={{ marginTop: '40px' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`fw-main-row ${isLight ? 'light-bg-content' : 'black-bg-content'}`}>
                        <div className="fw-full-container-top">
                            <div className="fw-container">
                                <div className="content-under-image py-5">
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
                                                    <h2 className={`${isLight ? 'fw-special-title vector-heading-LIGHT' : 'fw-special-title vector-heading'}`}>GET IN TOUCH</h2>
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
                                                <p className={`${isLight ? 'services-for-more-info-LIGHT' : 'services-for-more-info'}`}>For more information email us
                                                    at  <b>business@ishivax.com</b><br /> or call
                                                    at <b>+1 801-701-1806 / </b> <b>+91 9829-19-7777 </b>

                                                </p>
                                            </div>
                                            <div className="fw-col-xs-12"
                                                style={{ display: 'flex', justifyContent: 'center' }}>
                                                <Link to="/Quote">
                                                    <div className={`join-our-team-button ${isLight ? 'frame-66-Y1q-LIGHT' : 'frame-66-Y1q'}`}>
                                                        <div className="frame-66-Y1q-arrow get-quote-logo"></div>
                                                        <div className="frame-66-Y1q-text join-our-team-text">Get A
                                                            Quote
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="fw-col-xs-12 ">
                                                <div className="fw-divider-space" style={{ marginTop: '20px' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                    <p className="exciting-ER4">Pioneering Digital Agency & E-commerce Experts
                                    </p>
                                </div>
                                <div className="fw-col-xs-12 fw-col-sm-8 fw-col-md-8  ">
                                    <p className="portfolio-our-agency">At iShivax, our mission is to optimize
                                        your
                                        online investments for maximum ROI. Renowned as industry leaders, we
                                        have crafted numerous cutting-edge e-commerce platforms. With our
                                        team's
                                        extensive experience in both online and offline retail, we offer
                                        unparalleled insights and services to elevate your business in the
                                        digital realm.</p>
                                </div>
                            </div>
                            <div className="fw-row">
                                <div className="fw-col-xs-12 ">
                                    <div className="fw-divider-space" style={{ marginTop: '20px' }}></div>
                                </div>
                            </div>
                            <div className="fw-row">
                                <div className="fw-col-xs-12 fw-col-sm-4 fw-col-md-4 hover_inAll">
                                    <div className="frame-2-PLM">
                                        <img className="services-call-image"
                                            src="./images/contact.svg" alt="" />
                                        <p className="frame-content-title" style={{ textAlign: 'center' }}>Request a
                                            Phone Call</p>
                                        <p className="frame-content-para" style={{ textAlign: 'center' }}>
                                            Hotline 24/7</p>
                                        <p className="frame-content-link"> +1 (801) 701-1806<br />+91 982 919-7777</p>
                                    </div>
                                </div>
                                <div className="fw-col-xs-12 fw-col-sm-4 fw-col-md-4 hover_inAll">
                                    <div className="frame-2-PLM">
                                        <img className="services-call-image"
                                            src="./images/site-audit.svg" alt="" />
                                        <p className="frame-content-title" style={{ textAlign: 'center' }}>Get an
                                            Site Audit
                                        </p>
                                        <p className="frame-content-para" style={{ textAlign: 'center' }}>
                                            Expert Consult</p>
                                        <Link to="/contact-us">
                                            <p className="frame-content-link"> Free Consult </p>
                                        </Link>
                                    </div>
                                </div>
                                <div className="fw-col-xs-12 fw-col-sm-4 fw-col-md-4 hover_inAll">
                                    <div className="frame-2-PLM">
                                        <img className="services-call-image"
                                            src="./images/whoarewe.svg" alt="" />
                                        <p className="frame-content-title" style={{ textAlign: 'center' }}>Who we
                                            are?</p>
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
                                        <img className="services-projects-image" src={`${isLight ? '../images/projectcount-light.svg' : '../images/projectcount.svg'}`} alt="" />
                                        <p className={`${isLight ? 'services-project-number-LIGHT' : 'services-project-number'}`}><Counter value={997} /></p>
                                        <p className={`${isLight ? 'services-project-name-LIGHT' : 'services-project-name'}`}>Projects</p>
                                    </div>
                                    <div className="frame-1-QWE">
                                        <img className="services-projects-image" src={`${isLight ? '../images/active-clients-light.svg' : '../images/active-clients.svg'}`} alt="" />
                                        <p className={`${isLight ? 'services-project-number-LIGHT' : 'services-project-number'}`}><Counter value={23} /></p>
                                        <p className={`${isLight ? 'services-project-name-LIGHT' : 'services-project-name'}`}>Active Clients</p>
                                    </div>
                                    <div className="frame-1-QWE">
                                        <img className="services-projects-image" src={`${isLight ? '../images/commitment-light.svg' : '../images/commitment.svg'}`} alt="" />
                                        <p className={`${isLight ? 'services-project-number-LIGHT' : 'services-project-number'}`}><Counter value={100} /></p>
                                        <p className={`${isLight ? 'services-project-name-LIGHT' : 'services-project-name'}`}>Commitment</p>
                                    </div>
                                    <div className="frame-1-QWE">
                                        <img className="services-projects-image" src={`${isLight ? '../images/success-rate-light.svg' : '../images/success-rate.svg'}`} alt="" />
                                        <p className={`${isLight ? 'services-project-number-LIGHT' : 'services-project-number'}`}><Counter value={98} /></p>
                                        <p className={`${isLight ? 'services-project-name-LIGHT' : 'services-project-name'}`}>Success Rate</p>
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
                </div>
            </section>
            <Footer />
        </div>
    )
};

export default ServicesStats;