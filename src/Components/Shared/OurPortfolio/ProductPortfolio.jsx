import { useContext, useEffect, useState } from "react";
import Header from "../Header";
import '../OurPortfolio/Portfolio.css';
import { getPortfolioType, getProjectDetail } from "../../../_services";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import { ThemeContext } from "../../../Contaxt/ThemeContext";

const ProductPortfolio = () => {
    const { isLight } = useContext(ThemeContext);
    const [projectData, setProjectData] = useState();
    const [data, setData] = useState();
    const [selectedPortfolioType, setSelectedPortfolioType] = useState(0);

    const fetchPortfolioType = async () => {
        try {
            const data = await getPortfolioType();

            setData(data);

        } catch (error) {
            return null;
        }
    };

    useEffect(() => {
        fetchGetProjectDetail();
    }, []);

    const fetchGetProjectDetail = async () => {
        try {
            const data = await getProjectDetail();

            // sort ascending by projectId
            const sortedData = data.sort((a, b) => a.projectId - b.projectId);

            setProjectData(sortedData);

        } catch (error) {
            return null;
        }
    };

    useEffect(() => {
        fetchGetProjectDetail();
        fetchPortfolioType();
    }, []);

    const filteredData =
        selectedPortfolioType === 0
            ? projectData
            : projectData?.filter(
                (item) => item.portfolioTypeId === selectedPortfolioType
            );

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
                                            <p className={`${isLight ? 'heading-common-main-LIGHT' : 'heading-common-main'}`}>Discover 200+ Projects that I made With Love</p>
                                            <p className={`${isLight ? 'heading-common-content-LIGHT' : 'heading-common-content'}`}>What we’re good at building apps & Website that are used by millions of people and platforms that serve thousands of  businesses.</p>
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

            <section className="Portfolio_New_Page_wepper">
                <div className="container">
                    <div className="hedding_Portfolio_New">
                        <h2 className="exciting-ER4">A Deep Dive into Our Consulting Case Studies</h2>
                        <p className="portfolio-our-agency">Our agency help businesses develop strategic plans to define their long-term goals, objectives, and the actions needed to achieve them.</p>
                    </div>
                    <nav className="portfolio_tab_wepper">
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            {/* All Portfolio */}
                            <div className='our_portfolio_type_button text-center' >
                                <button
                                    className={`nav-link ${selectedPortfolioType === 0 ? "active" : ""}`}
                                    onClick={() => setSelectedPortfolioType(0)}
                                >
                                    All Portfolio
                                </button>
                                {selectedPortfolioType === 0 && (
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="5" cy="5" r="5" fill="#050610" />
                                    </svg>
                                )}
                            </div>

                            {/* Dynamic types */}
                            {/* {data?.map((type, i) => (
                                <div className='our_portfolio_type_button text-center' key={i}>
                                    <button
                                        key={type.portfolioTypeId}
                                        className={`nav-link ${selectedPortfolioType === type.portfolioTypeId ? "active" : ""}`}
                                        onClick={() => setSelectedPortfolioType(type.portfolioTypeId)}
                                    >
                                        {type.portfolioTypeName}
                                    </button>
                                    {selectedPortfolioType === type.portfolioTypeId && (
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="5" cy="5" r="5" fill="#050610" />
                                        </svg>
                                    )}
                                </div>
                            ))} */}
                            {data
                                ?.filter(type =>
                                    projectData?.some(project => project.portfolioTypeId === type.portfolioTypeId)
                                )
                                .map((type, i) => (
                                    <div className='our_portfolio_type_button text-center' key={i}>
                                        <button
                                            key={type.portfolioTypeId}
                                            className={`nav-link ${selectedPortfolioType === type.portfolioTypeId ? "active" : ""}`}
                                            onClick={() => setSelectedPortfolioType(type.portfolioTypeId)}
                                        >
                                            {type.portfolioTypeName}
                                        </button>

                                        {selectedPortfolioType === type.portfolioTypeId && (
                                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="5" cy="5" r="5" fill="#050610" />
                                            </svg>
                                        )}
                                    </div>
                                ))
                            }
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        {filteredData?.map((item, i) => (
                            <>
                                {i % 2 === 0 ?

                                    <div className="fw-row row_flex_drirecston mb-5 pb-sm-5 pb-0">
                                        <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-6 position-relative mt-md-auto mt-4">
                                            <div className="portfolio_inner_hedding">
                                                <h3 className="portfolio-content-title mb-2">{item.projectName}</h3>
                                                <span>{item.projectType}</span>
                                                <div className="portfolio_inner_content mt-3">
                                                    <p className="portfolio-our-agency">{item.description}</p>
                                                </div>
                                            </div>
                                            <div className="portflio_line_line_weepper">
                                                <div className="portflio_line_line height_set">
                                                    {item.liveUrl && (
                                                        <Link target="_blank" to={item.liveUrl}>
                                                            <div className="frame-port-004">
                                                                <div className="arrow-sign">&#8594;</div>
                                                            </div>
                                                        </Link>
                                                    )}

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
                                            </div>
                                        </div>
                                        <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-6 hover_inAll">
                                            <div className="portfolio_inner_image_data">
                                                <img src={`${item?.projectPath}`} className="frame-1-6" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className="fw-row row_spaceing  mb-5 pb-sm-5 pb-0">
                                        <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-6 hover_inAll">
                                            <div className="portfolio_inner_image_data left_img">
                                                <img src={`${item?.projectPath}`} className="frame-1-6" alt="" />
                                            </div>
                                        </div>
                                        <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-6 position-relative mt-md-auto mt-4">
                                            <div className="portfolio_inner_hedding">
                                                <h3 className="portfolio-content-title mb-2">{item.projectName}</h3>
                                                <span>{item.projectType}</span>
                                                <div className="portfolio_inner_content mt-3">
                                                    <p className="portfolio-our-agency">{item.description}</p>
                                                </div>
                                            </div>
                                            <div className="portflio_line_line_weepper">
                                                <div className="portflio_line_line">
                                                    {item.liveUrl && (
                                                        <Link target="_blank" to={item.liveUrl}>
                                                            <div className="frame-port-004">
                                                                <div className="arrow-sign">&#8594;</div>
                                                            </div>
                                                        </Link>
                                                    )}
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
                                            </div>
                                        </div>
                                    </div>}
                            </>
                        ))}
                        <div className="tab-pane fade" id="Business" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">Business</div>
                        <div className="tab-pane fade" id="Economy" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">Economy</div>
                        <div className="tab-pane fade" id="Finance" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">Finance</div>
                        <div className="tab-pane fade" id="Marketing" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">Marketing</div>
                        <div className="tab-pane fade" id="Technology" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">Technology</div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default ProductPortfolio;