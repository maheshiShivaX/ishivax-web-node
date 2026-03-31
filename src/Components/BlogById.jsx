import { useParams } from "react-router-dom";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from "../Contaxt/ThemeContext";
import axiosIns, { API_URL } from "../config";

const BlogById = () => {
    const { isLight } = useContext(ThemeContext);
    const [blogData, setBlogData] = useState();
    const params = useParams();
    const blogId = params?.slug; // Assuming the route parameter is named 'slug'

    useEffect(() => {
        const fetchBlogDetailById = async () => {
            try {
                const response = await axiosIns.get(`${API_URL.GetBlogDetailBySlug}?pBlogSlug=${blogId}`);

                if (response.status === 200 && response.data.isSuccess === 1) {
                    setBlogData(response?.data?.data);
                }

            } catch (error) {
                console.error('Failed to fetch blog details:', error);
                return null;
            }
        };
        fetchBlogDetailById();
    }, [blogId])

    const formatDate = (date) => {
        if (!date) return '';
        const d = new Date(date);
        const day = d.getDate().toString().padStart(2, '0'); // Ensure 2 digits for day
        const month = (d.getMonth() + 1).toString().padStart(2, '0'); // Ensure 2 digits for month (months are 0-indexed)
        const year = d.getFullYear();
        return `${day}-${month}-${year}`;
    };

    return (
        <div>
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
                                                <h2 className={`${isLight ? 'fw-special-title vector-heading-LIGHT' : 'fw-special-title vector-heading'}`}>BLOG</h2>
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
                                                        src="/images/TECHtechaboutus.webp" alt="" style={{width:"80%"}} />
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

            <section className="" style={{ position: 'relative', overflow: "hidden" }}>
                <div className="">
                    <div className="our-blogs-section">
                        <div className='container'>
                            <div className='our_blog_container'>
                                {/* <div className='our_blog_heading_container'>
                                    <div className='our_blog_inner'>
                                        <h4 className="blog_inner_heading_blogpage">A Deep Dive into Our Consulting Blogs</h4>
                                        <p className="blog_page_description mb-0">Our agency help businesses develop strategic plans to define their long-term goals, objectives, and the actions needed to achieve them.</p>
                                    </div>
                                </div> */}
                                {/* <div className='our_blog_select_type'>
                                    <div className='our_blog_select_type_inner'>
                                        <div className='our_blog_type_button'>
                                            <button className="deActive"> {blogData?.blogTypeName}</button>
                                        </div>
                                    </div>
                                </div> */}
                                <div className='our_blog_card_container pt-4'>
                                    <div className='our_blog_card_inner row justify-content-center'>
                                        <>
                                            <div className='our_blog_card_image col-lg-10 col-12 hover_inAll mb-4'>
                                                <div className=''>
                                                    <div className='our_blog_card_image_container'>
                                                        <img src={`${blogData?.blogImage}`} alt='blog' />
                                                    </div>
                                                    <div className='our_blog_card_content'>
                                                        <span className='our_blog_date'>{formatDate(blogData?.blogDate)}</span>
                                                        <h4 className='our_blog_title mb-0'>{blogData?.blogTitle}</h4>
                                                        <div
                                                            className="our_blog_description mb-0"
                                                            dangerouslySetInnerHTML={{ __html: blogData?.blogDescrption }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
export default BlogById;