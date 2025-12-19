import { Link, useParams } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import { useState, useEffect, useContext, useCallback } from "react";
import { ThemeContext } from "../../../Contaxt/ThemeContext";
import axiosIns, { API_URL } from "../../../config";
import '../../../ComponentsCss/ServiceDetailPage.css';
import Faqs from "../Faqs";
import { decryptData } from "../../../_services";

const ServicesDetails = () => {
    const params = useParams();
    const serviceSlug = params?.slug;
    const { isLight } = useContext(ThemeContext);
    const [data, setData] = useState();
    const [industryData, seIndustryData] = useState();

    const fetchData = useCallback(async () => {
        try {
            const response = await axiosIns.get(`${API_URL.GetServiceDetailByServiceSlug}?slug=${serviceSlug}`);

            if (response.data.isSuccess === 1) {
                setData(response.data.data);
            } else if (response.data.isSuccess === 0) {
                setData(null);
            }
        } catch (error) {
            setData(null);
        }
    }, [serviceSlug]);

    const fetchIndustryData = useCallback(async () => {
        try {

            const response = await axiosIns.get(`${API_URL.GetServiceIndustryByServiceSlug}?slug=${serviceSlug}`);

            // Get the encrypted header
            const encrypted = response.headers["x-encrypted"];

            // Fallback if header is missing
            if (!encrypted) {
                setData([]);
                return;
            }

            // Attempt to decrypt
            const decrypted = decryptData(encrypted);

            // Validate decrypted data
            if (decrypted && decrypted.isSuccess === 1 && Array.isArray(decrypted.data)) {

                seIndustryData(decrypted?.data);
            } else {
                seIndustryData([]);
            }
        } catch (error) {
            seIndustryData(null);
        }
    }, [serviceSlug]);

    useEffect(() => {
        fetchData();
        fetchIndustryData();
    }, [fetchData, fetchIndustryData]);

    const industries = industryData || [];

    // ALWAYS: 4 | 6 | 4
    const topRow = industries.slice(0, 4);
    const midRow = industries.slice(4, 10);
    const bottomRow = industries.slice(10, 14);

    // Middle 6 → left, 4 center, right
    const midLeft = midRow[0] || null;
    const midRight = midRow[5] || null;
    const midCenter = midRow.slice(1, 5);

    return (
        <div>
            <Header />
            <div className="services_details_main">
                <section>
                    <div className={`fw-main-row ${isLight ? 'black-bg-content-LIGHT' : 'black-bg-content'}`}>
                        <div className="fw-full-container-top pb-5" style={{ backgroundImage: 'url(./images/bg-dots.png)', overflow: "hidden" }}>
                            <div className="fw-row">
                                <div className="fw-col-xs-12 ">
                                    <div className="fw-divider-space" style={{ marginTop: '40px' }}></div>
                                </div>
                            </div>
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
                                            <div className="fw-heading fw-heading-h2">
                                                <h2 className={`${isLight ? 'fw-special-title vector-heading-LIGHT' : 'fw-special-title vector-heading'}`}>OUR SERVICES</h2>
                                            </div>
                                        </div>
                                        <div className="fw-col-md-4  vector-class">
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
                                            <p className={`${isLight ? 'heading-common-main-LIGHT' : 'heading-common-main'}`} style={{ textTransform: "uppercase" }}>{data?.serviceName}</p>
                                            <p className={`${isLight ? 'heading-common-content-LIGHT' : 'heading-common-content'}`}>
                                                {data?.serviceDescription?.split(" ")?.slice(0, 10)?.join(" ") + "."}
                                            </p>
                                        </div>
                                        <div className="fw-col-xs-12 ">

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className={`fw-main-row ${isLight ? 'middle-content' : ''}`} style={{ backgroundColor: '#f1f1f1' }}>
                        <div className="fw-container">
                            <div className="fw-row">
                                <div className="fw-col-xs-12 ">
                                    <div className="fw-divider-space" style={{ marginTop: '60px' }}></div>
                                </div>
                            </div>

                            {data ? (
                                <>
                                    <div className="fw-row">
                                        <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-6">
                                            <p className="exciting-ER4 fw-bold">{data?.sectionOne?.title}</p>
                                            <p className="portfolio-our-agency">{data?.sectionOne?.shortDescrition}</p>
                                        </div>
                                        <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-6">
                                            <img src={data?.sectionOne?.image} alt="" />
                                        </div>
                                    </div>
                                    <div className="fw-row">
                                        <div className="fw-col-xs-12 ">
                                            <div className="fw-divider-space" style={{ marginTop: '20px' }}></div>
                                        </div>
                                    </div>
                                    <div className="fw-row">
                                        <div className="fw-col-xs-12 ">
                                            <div className="fw-divider-space" style={{ marginTop: '80px' }}></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="fw-row">
                                            <div className="fw-col-xs-12 ">
                                                <div className="fw-heading fw-heading-h2">
                                                    <h2 className='fw-special-title'>01 - About {data?.serviceName}</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="fw-row">
                                            <div className="fw-col-xs-12 ">
                                                <div className="fw-divider-space" style={{ marginTop: '20px' }}></div>
                                            </div>
                                        </div>
                                        <div className="fw-row">
                                            <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-4 mb-3">
                                                <p className="exciting-ER4 m-0" style={{ lineHeight: "normal" }}>{data?.sectionTwo?.title}</p>
                                            </div>
                                            <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-8">
                                                <p className="portfolio-our-agency" style={{ fontSize: "18px", lineHeight: "25px" }}>{data?.sectionTwo?.subTitle}</p>
                                                <p className="portfolio-our-agency" style={{ color: "#000000", fontSize: "14px" }}>{data?.sectionTwo?.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <p className="text-center">No service details available</p>
                            )}
                            <div className="fw-row">
                                <div className="fw-col-xs-12 ">
                                    <div className="fw-divider-space" style={{ marginTop: '100px' }}></div>
                                </div>
                            </div>

                            <div>
                                <div className="fw-row">
                                    <div className="">
                                        <div className="fw-heading fw-heading-h2">
                                            <h2 className='fw-special-title text-center'>02 - Industries</h2>
                                        </div>

                                        <div className="fw-row">
                                            <div className="fw-col-xs-12 ">
                                                <div className="fw-divider-space" style={{ marginTop: '15px' }}></div>
                                            </div>
                                        </div>

                                        <div>
                                            <p className="exciting-ER4 m-0 text-center" style={{ lineHeight: "normal" }}>{data?.sectionThird?.title}</p>
                                            <div className="fw-row">
                                                <div className="fw-col-xs-12 ">
                                                    <div className="fw-divider-space" style={{ marginTop: '20px' }}></div>
                                                </div>
                                            </div>
                                            <p className="portfolio-our-agency text-center" style={{ fontSize: "14px" }}>{data?.sectionThird?.subTitle}</p>
                                        </div>

                                        {/* min-widht 991px */}
                                        {industries?.length > 0 ? (
                                            <div className="service_industries desktop-layout">
                                                <div className="curve_box" />

                                                <div className="service_industries_content">

                                                    {/* TOP ROW */}
                                                    <div className="row row_top">
                                                        {topRow.map((item, i) => (
                                                            <div className="service_industries_box" key={i}>
                                                                <img src={item.icon} alt="" />
                                                                <p className="mb-0">{item.serviceSectorName}</p>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* MIDDLE ROW */}
                                                    <div className="row_middle_wrapper">
                                                        {midLeft && (
                                                            <div className="service_industries_box side_box">
                                                                <img src={midLeft.icon} alt="" />
                                                                <p className="mb-0">{midLeft.serviceSectorName}</p>
                                                            </div>
                                                        )}

                                                        <div className="row_middle_center">
                                                            {midCenter.map((item, i) => (
                                                                <div className="service_industries_box" key={i}>
                                                                    <img src={item.icon} alt="" />
                                                                    <p className="mb-0">{item.serviceSectorName}</p>
                                                                </div>
                                                            ))}
                                                        </div>

                                                        {midRight && (
                                                            <div className="service_industries_box side_box">
                                                                <img src={midRight.icon} alt="" />
                                                                <p className="mb-0">{midRight.serviceSectorName}</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* BOTTOM ROW */}
                                                    <div className="row row_bottom">
                                                        {bottomRow.map((item, i) => (
                                                            <div className="service_industries_box" key={i}>
                                                                <img src={item.icon} alt="" />
                                                                <p className="mb-0">{item.serviceSectorName}</p>
                                                            </div>
                                                        ))}
                                                    </div>

                                                </div>
                                            </div>
                                        ) : (
                                            <p className="text-center mt-4">No industries available</p>
                                        )}

                                        {/* max-widht 991px */}
                                        {industries?.length > 0 && (
                                            <div className="service_industries mobile-layout">
                                                <div className="row">
                                                    {industries.map((item, i) => (
                                                        <div className="col-sm-3 col-4 mb-3">
                                                            <div className="service_industries_box side_box" key={i}>
                                                                <img src={item.icon} alt="" />
                                                                <p>{item.serviceSectorName}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

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

                        <div className={`fw-main-row ${isLight ? '' : 'black-bg-content'}`}>
                            <div className="fw-full-container-top">
                                <div className="content-under-image">
                                    <div className="fw-row ">
                                        <img className="vector-line-1 mt-4" src="/images/Vector-upper-arrow.png" alt="" />
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
                                                <div className="fw-heading fw-heading-h2" >
                                                    <h2 className={`fw-special-title  ${isLight ? 'vector-heading-LIGHT' : 'vector-heading'}`}>03 - Get In Touch</h2>
                                                </div>
                                            </div>
                                            <div className="fw-col-md-4  vector-class">
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
                                                <div className="fw-divider-space" style={{ marginTop: '80px' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Faqs />
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
};

export default ServicesDetails;