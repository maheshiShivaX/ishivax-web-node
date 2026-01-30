
import Footer from "../Footer";
import Header from "../Header";
import { GetProjectDetailAll } from "../../../_services";
import React, { useContext, useEffect, useState } from 'react';
import { imagebaseurl } from "../../../config";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../Contaxt/ThemeContext";

const ProductPortfolioPage = () => {
    const { isLight } = useContext(ThemeContext);

    const [projectData, setProjectData] = useState();



    const fetchGetProjectDetail = async () => {
        try {
            const data = await GetProjectDetailAll();
            setProjectData(data);
        } catch (error) {
            return null;
        }
    };

    useEffect(() => {
        fetchGetProjectDetail();


    }, [])




    return (
        <div>
            <Header />
            <section>
                <div class={`fw-main-row ${isLight ? 'black-bg-content-LIGHT' : 'black-bg-content'}`}>
                    <div class="fw-full-container-top" style={{ backgroundImage: 'url(./images/bg-dots.png)' }}>
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

                            <div class="content-under-image">
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
                                                <h2 className={`${isLight ? 'fw-special-title vector-heading-LIGHT' : 'fw-special-title vector-heading'}`}>OUR PORTFOLIO</h2>
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

                                <div class="fw-row">
                                    <div class="fw-col-xs-12 ">
                                        <div class="fw-divider-space" style={{ marginTop: '20px' }}></div>
                                    </div>
                                </div>
                                <div class="fw-row">
                                    <div class="container">
                                        <div class="fw-col-xs-12 ">
                                        </div>
                                        <div class="fw-col-xs-12 ">
                                            <p class="heading-common-main">EXPLORE OVER 200 PROJECTS CRAFTED
                                                WITH PASSION</p>
                                            <p class="heading-common-content">Discover our portfolio of apps and
                                                websites, each meticulously designed and developed to cater to
                                                millions of users and empower thousands of businesses. At
                                                iShivax, we excel in creating digital solutions that resonate
                                                with audiences and drive impactful results.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="fw-row">
                                    <div class="fw-col-xs-12 ">
                                        <div class="fw-divider-space" style={{ marginTop: '50px' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="fw-main-row middle-content">
                    <div className="fw-container">
                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">
                                <div className="fw-divider-space" style={{ marginTop: '40px' }}></div>
                            </div>
                        </div>
                        <div class="fw-row">
                            <div class="fw-col-xs-12 ">
                                <p class="portflio-deep-dive">Exploring Our Consulting Case Studies
                                </p>
                            </div>
                        </div>
                        <div class="fw-row">
                            <div class="fw-col-xs-12 ">
                                <p class="portfolio-our-agency">Take a comprehensive look at our consulting
                                    case studies, where we assist businesses in crafting strategic plans to
                                    delineate their long-term goals, objectives, and the requisite actions
                                    for attainment. At iShivax, we specialize in providing tech-centric
                                    solutions to drive business success.</p>
                            </div>
                        </div>


                        <div class="fw-row">
                            <div class="fw-col-xs-12 ">
                                <div class="fw-divider-space" style={{ marginTop: '60px' }}></div>
                            </div>
                        </div>

                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">
                                <div className="fw-divider-space" style={{ marginTop: '20px' }}></div>
                            </div>
                        </div>



                        <div className="fw-row">

                            {projectData?.map((item, i) => (
                                <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-6" key={i}>
                                    <div className="seo-media-images frame-1-6">
                                        <img src={`${imagebaseurl}${item?.projectPath}`} style={{ borderRadius: '20px' }} alt="" />
                                    </div>
                                    <p className="portfolio-content-title">{item.projectName}</p>
                                    <p className="portfolio-content-line">{item.projectType}</p>
                                    <Link target="_blank" to={item.liveUrl}>
                                        <div className="frame-port-004">
                                            <div className="arrow-sign">&#8594;</div>
                                        </div>
                                    </Link>

                                    <div className="frame-port-001">

                                        {item.iosurl != null ?
                                            <Link target="_blank" to={item.iosurl}>
                                                <div className="frame-port-002">iPhone</div>
                                            </Link> : null
                                        }

                                        {item.androidUrl != null ?
                                            <Link target="_blank" to={item.androidUrl}>
                                                <div className="frame-port-002">Android</div>
                                            </Link> : null
                                        }


                                        {item.liveUrl != null ?
                                            <Link target="_blank" to={item.liveUrl}>
                                                <div className="frame-port-002">Website</div>
                                            </Link> : null
                                        }


                                    </div>


                                </div>
                            ))}




                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default ProductPortfolioPage;