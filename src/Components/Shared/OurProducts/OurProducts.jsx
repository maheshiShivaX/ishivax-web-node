import Header from "../Header";
import '../../../Components/Shared/OurProducts/OurProduct.css';
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { useCallback, useContext, useEffect, useState } from "react";
import { GetProductHomeDisplay } from "../../../_services";
import axiosIns, { API_URL } from "../../../config";
import { ThemeContext } from "../../../Contaxt/ThemeContext";

const OurProducts = () => {
    const { isLight } = useContext(ThemeContext);
    const [projectData, setProjectData] = useState();
    const [filterProjectData, setFilterProjectData] = useState();
    const [bgColor, setBgColor] = useState("");
    const [activeTab, setActiveTab] = useState(filterProjectData);
    const [productId, setProductId] = useState(activeTab?.productId);
    const [productDetailData, setProductDetailData] = useState();

    useEffect(() => {
        setProductId(activeTab?.productId);
    }, [activeTab]);

    const fetchGetProductHomeDisplay = async () => {
        try {
            const data = await GetProductHomeDisplay();

            // Sort ascending by productId
            const sortedData = data.sort((a, b) => a.productId - b.productId);

            setProjectData(sortedData);

            // Get first item after sorting
            const firstItem = sortedData[0];

            if (firstItem) {
                // Filter using first productId
                const filter = sortedData.filter(
                    x => x.productId === firstItem.productId
                );

                setBgColor(firstItem.colorCode);
                setActiveTab(firstItem);
                setFilterProjectData(filter);
            }

        } catch (error) {
            return null;
        }
    };

    const fetchGetProductDetail = useCallback(async () => {
        if (!productId) {
            return;
        }

        try {
            const response = await axiosIns.get(`${API_URL.GetProductDetailByProductId}?pProductId=${productId}`);

            if (response.status === 200 && response.data.isSuccess === 1) {
                setProductDetailData(response.data.data);
            } else {
                setProductDetailData([]);
            }
        } catch (error) {
            // Handle errors, either from axios or from invalid responses
            setProductDetailData([]);
        }
    }, [productId]);

    useEffect(() => {
        fetchGetProductDetail();
    }, [fetchGetProductDetail])

    const onChangePortfolio = async (id, tab) => {
        try {
            setActiveTab(tab);
            setBgColor(tab.colorCode);
            const data = projectData.filter(x => id === 0 ? 1 : x.productId === id);

            setFilterProjectData(data);
        } catch (error) {
            return null;
        }
    };

    useEffect(() => {
        fetchGetProductHomeDisplay();
    }, [])

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
                                                <h2 className={`${isLight ? 'fw-special-title vector-heading-LIGHT' : 'fw-special-title vector-heading'}`}>Our Products</h2>
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
                                            <p className={`${isLight ? 'heading-common-main-LIGHT' : 'heading-common-main'}`}>BUILDING A LIFETIME PARTNERSHIP IN BUSINESS</p>
                                            <p className={`${isLight ? 'heading-common-content-LIGHT' : 'heading-common-content'}`}>We rely on our partners to lead customers to the new style of business</p>
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
                <div className="tab_our_product_wepper" style={{ backgroundColor: bgColor }}>
                    <div className="container p-0">
                        <div className="row P-0">
                            <div className=" col-lg-2 col-md-4" >
                                <div className="coustom_tab_menu">
                                    {projectData?.map((tab, index) => (
                                        <div
                                            key={index}
                                            className={`tab coustom_tab_menu_left ${activeTab?.projectName === tab?.projectName ? "active" : ""}`}
                                            onClick={() => onChangePortfolio(tab?.productId, tab)}
                                        >
                                            <p> {tab.projectName}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {filterProjectData?.map((item, i) => (
                                <>
                                    <div className="col-lg-5 col-md-4">
                                        <div className="left_side_content">
                                            <h2>{item?.projectName}</h2>
                                            {/* <Link to={item?.liveUrl} className="visit_website_btn">Visit Website</Link> */}
                                            <div className="star_werp">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                    <g clip-path="url(#clip0_201_9176)">
                                                        <path d="M4.72426 0.400787C4.77603 0.295896 4.88285 0.229492 4.99983 0.229492C5.11682 0.229472 5.22366 0.295876 5.27543 0.400767L6.47413 2.82923C6.58685 3.05758 6.80471 3.21589 7.05673 3.25249L9.73683 3.64209C9.8526 3.65892 9.94877 3.74 9.98494 3.85126C10.0211 3.9625 9.99095 4.08464 9.90718 4.1663L7.96799 6.05679C7.78564 6.23458 7.70243 6.49068 7.74545 6.74165L8.20301 9.41053C8.22277 9.52583 8.17538 9.64235 8.08073 9.71104C7.98611 9.77984 7.86064 9.78887 7.75711 9.73443L5.35991 8.4744C5.13451 8.35592 4.86522 8.35592 4.63978 8.47444L2.2428 9.73441C2.13925 9.78885 2.01378 9.77974 1.91916 9.711C1.82451 9.64224 1.77714 9.52571 1.7969 9.41045L2.25467 6.74177C2.29774 6.49072 2.21452 6.23458 2.03212 6.05675L0.0928154 4.16632C0.00906481 4.08466 -0.0211041 3.96252 0.0150499 3.85128C0.0512039 3.74004 0.147371 3.65897 0.263137 3.64211L2.94316 3.25253C3.19518 3.21589 3.41306 3.0576 3.52578 2.82921L4.72426 0.400787Z" fill="white" fill-opacity="0.75" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_201_9176">
                                                            <rect width="10" height="10" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                    <g clip-path="url(#clip0_201_9176)">
                                                        <path d="M4.72426 0.400787C4.77603 0.295896 4.88285 0.229492 4.99983 0.229492C5.11682 0.229472 5.22366 0.295876 5.27543 0.400767L6.47413 2.82923C6.58685 3.05758 6.80471 3.21589 7.05673 3.25249L9.73683 3.64209C9.8526 3.65892 9.94877 3.74 9.98494 3.85126C10.0211 3.9625 9.99095 4.08464 9.90718 4.1663L7.96799 6.05679C7.78564 6.23458 7.70243 6.49068 7.74545 6.74165L8.20301 9.41053C8.22277 9.52583 8.17538 9.64235 8.08073 9.71104C7.98611 9.77984 7.86064 9.78887 7.75711 9.73443L5.35991 8.4744C5.13451 8.35592 4.86522 8.35592 4.63978 8.47444L2.2428 9.73441C2.13925 9.78885 2.01378 9.77974 1.91916 9.711C1.82451 9.64224 1.77714 9.52571 1.7969 9.41045L2.25467 6.74177C2.29774 6.49072 2.21452 6.23458 2.03212 6.05675L0.0928154 4.16632C0.00906481 4.08466 -0.0211041 3.96252 0.0150499 3.85128C0.0512039 3.74004 0.147371 3.65897 0.263137 3.64211L2.94316 3.25253C3.19518 3.21589 3.41306 3.0576 3.52578 2.82921L4.72426 0.400787Z" fill="white" fill-opacity="0.75" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_201_9176">
                                                            <rect width="10" height="10" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                    <g clip-path="url(#clip0_201_9176)">
                                                        <path d="M4.72426 0.400787C4.77603 0.295896 4.88285 0.229492 4.99983 0.229492C5.11682 0.229472 5.22366 0.295876 5.27543 0.400767L6.47413 2.82923C6.58685 3.05758 6.80471 3.21589 7.05673 3.25249L9.73683 3.64209C9.8526 3.65892 9.94877 3.74 9.98494 3.85126C10.0211 3.9625 9.99095 4.08464 9.90718 4.1663L7.96799 6.05679C7.78564 6.23458 7.70243 6.49068 7.74545 6.74165L8.20301 9.41053C8.22277 9.52583 8.17538 9.64235 8.08073 9.71104C7.98611 9.77984 7.86064 9.78887 7.75711 9.73443L5.35991 8.4744C5.13451 8.35592 4.86522 8.35592 4.63978 8.47444L2.2428 9.73441C2.13925 9.78885 2.01378 9.77974 1.91916 9.711C1.82451 9.64224 1.77714 9.52571 1.7969 9.41045L2.25467 6.74177C2.29774 6.49072 2.21452 6.23458 2.03212 6.05675L0.0928154 4.16632C0.00906481 4.08466 -0.0211041 3.96252 0.0150499 3.85128C0.0512039 3.74004 0.147371 3.65897 0.263137 3.64211L2.94316 3.25253C3.19518 3.21589 3.41306 3.0576 3.52578 2.82921L4.72426 0.400787Z" fill="white" fill-opacity="0.75" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_201_9176">
                                                            <rect width="10" height="10" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                    <g clip-path="url(#clip0_201_9176)">
                                                        <path d="M4.72426 0.400787C4.77603 0.295896 4.88285 0.229492 4.99983 0.229492C5.11682 0.229472 5.22366 0.295876 5.27543 0.400767L6.47413 2.82923C6.58685 3.05758 6.80471 3.21589 7.05673 3.25249L9.73683 3.64209C9.8526 3.65892 9.94877 3.74 9.98494 3.85126C10.0211 3.9625 9.99095 4.08464 9.90718 4.1663L7.96799 6.05679C7.78564 6.23458 7.70243 6.49068 7.74545 6.74165L8.20301 9.41053C8.22277 9.52583 8.17538 9.64235 8.08073 9.71104C7.98611 9.77984 7.86064 9.78887 7.75711 9.73443L5.35991 8.4744C5.13451 8.35592 4.86522 8.35592 4.63978 8.47444L2.2428 9.73441C2.13925 9.78885 2.01378 9.77974 1.91916 9.711C1.82451 9.64224 1.77714 9.52571 1.7969 9.41045L2.25467 6.74177C2.29774 6.49072 2.21452 6.23458 2.03212 6.05675L0.0928154 4.16632C0.00906481 4.08466 -0.0211041 3.96252 0.0150499 3.85128C0.0512039 3.74004 0.147371 3.65897 0.263137 3.64211L2.94316 3.25253C3.19518 3.21589 3.41306 3.0576 3.52578 2.82921L4.72426 0.400787Z" fill="white" fill-opacity="0.75" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_201_9176">
                                                            <rect width="10" height="10" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                    <g clip-path="url(#clip0_201_9176)">
                                                        <path d="M4.72426 0.400787C4.77603 0.295896 4.88285 0.229492 4.99983 0.229492C5.11682 0.229472 5.22366 0.295876 5.27543 0.400767L6.47413 2.82923C6.58685 3.05758 6.80471 3.21589 7.05673 3.25249L9.73683 3.64209C9.8526 3.65892 9.94877 3.74 9.98494 3.85126C10.0211 3.9625 9.99095 4.08464 9.90718 4.1663L7.96799 6.05679C7.78564 6.23458 7.70243 6.49068 7.74545 6.74165L8.20301 9.41053C8.22277 9.52583 8.17538 9.64235 8.08073 9.71104C7.98611 9.77984 7.86064 9.78887 7.75711 9.73443L5.35991 8.4744C5.13451 8.35592 4.86522 8.35592 4.63978 8.47444L2.2428 9.73441C2.13925 9.78885 2.01378 9.77974 1.91916 9.711C1.82451 9.64224 1.77714 9.52571 1.7969 9.41045L2.25467 6.74177C2.29774 6.49072 2.21452 6.23458 2.03212 6.05675L0.0928154 4.16632C0.00906481 4.08466 -0.0211041 3.96252 0.0150499 3.85128C0.0512039 3.74004 0.147371 3.65897 0.263137 3.64211L2.94316 3.25253C3.19518 3.21589 3.41306 3.0576 3.52578 2.82921L4.72426 0.400787Z" fill="white" fill-opacity="0.75" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_201_9176">
                                                            <rect width="10" height="10" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <p>Installs - 5M</p>
                                            </div>
                                            <div className="description_content">
                                                <p>{item?.shortDesc}</p>
                                            </div>
                                            <div className="play_store_wepper">
                                                {/* <img src="./images/app-store.png" alt="" alt="" />
                                        <img src="./images/palystore.png" alt="" alt="" /> */}
                                                {item.iosurl != null && item.iosurl !== "" ? <Link target="_blank" to={item?.iosurl}><img src="./images/app-store.png" alt="" /></Link> : null}
                                                {item.androidUrl != null && item.androidUrl !== "" ? <Link target="_blank" to={item?.androidUrl}><img src="./images/palystore.png" alt="" /></Link> : null}
                                            </div>
                                            <div className="view_btn_werp">
                                                <Link to={item?.liveUrl} target="_blank">Visit Website</Link>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-5 col-md-4">
                                        <div className="right_mobile_shap">
                                            <img src={`${item?.projectBanner}`} alt="" />
                                            {/* <img src={`${imagebaseurl}${item?.projectBanner}`} alt="" /> */}
                                            {/* <img src={activeTab.image} alt={activeTab.title} /> */}
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            <section className="ourproducts_tabs pb-5">
                <div className="container">
                    <div class="tab-content" id="myTabContent">
                        {productDetailData?.map((item, i) => (
                            <>
                                {i % 2 === 0 ? (
                                    <div class="tab-pane fade show active" id="Lifecode" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                                        <div className="bg_image_add">
                                            <div className="container">
                                                <div className="row our_product_wepper_main row_flex_only">
                                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                        <div className="">
                                                            <div className="our_product_hedding">
                                                                <h2>{item?.title}</h2>
                                                                <p>{item?.description}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                        <div className="right_side_images hover_inAll">
                                                            <img src={`${item?.image}`} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div >
                                ) : (
                                    <div class="tab-pane fade show active" id="Lifecode" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                                        <div className="bg_image_add">
                                            <div className="container">
                                                <div className="row our_product_wepper_main row_flex_only">
                                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                        <div className="right_side_images hover_inAll">
                                                            <img src={`${item?.image}`} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                        <div className="">
                                                            <div className="our_product_hedding">
                                                                <h2>{item?.title}</h2>
                                                                <p>{item?.description}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default OurProducts;