import React, { useEffect, useState } from 'react';
import './ourblog.css';
import { decryptData } from '../../../_services';
import { Link, useNavigate } from 'react-router-dom';
import OurClientSay from "../OurClientSay";
import axiosIns, { API_URL } from '../../../config';

const OurBlogsSection = () => {
    const navigate = useNavigate();
    const [blogData, setBlogData] = useState([]);
    const [selectedBlogType, setSelectedBlogType] = useState(0);

    const getShortDescription = (description, wordLimit) => {
        const text = description.replace(/<\/?[^>]+(>|$)/g, "");
        const words = text.split(/\s+/);

        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
        return description;
    };

    const formatDate = (date) => {
        if (!date) return '';
        const d = new Date(date);
        const day = d.getDate().toString().padStart(2, '0');
        const month = (d.getMonth() + 1).toString().padStart(2, '0');
        const year = d.getFullYear();
        return `${day}-${month}-${year}`;
    };

    const fetchBlogDetailAll = async () => {
        try {
            const response = await axiosIns.get(API_URL.GetBlogDetailAll);

            const encrypted = response?.data?.payload;

            if (!encrypted) {
                setBlogData([]);
                return;
            }

            // Attempt to decrypt
            const decrypted = decryptData(encrypted);

            if (
                decrypted &&
                decrypted.isSuccess === 1 &&
                Array.isArray(decrypted.data)
            ) {
                const sortedData = decrypted.data
                    .sort((a, b) => new Date(b.blogDate) - new Date(a.blogDate))
                    .slice(0, 3); // ✅ only 6 items

                setBlogData(sortedData);
            } else {
                setBlogData([]);
            }
        } catch (error) {
            setBlogData([]);
        }
    };

    useEffect(() => {
        fetchBlogDetailAll();
    }, []);

    const handleModalToggle = (id) => {
        navigate(`/blog/${id}`)
    };

    const filteredBlogs = selectedBlogType
        ? blogData.filter(blog => blog.blogTypeId === selectedBlogType)
        : blogData;

    const handleFilter = (blogTypeId) => {
        setSelectedBlogType(blogTypeId === selectedBlogType ? null : blogTypeId);
    };

    useEffect(() => {
        const createSeamlessLoop = () => {
            const track = document?.getElementById("clientTrack");
            if (track && track.children.length > 0) {
                // Get original content
                const originalContent = track.innerHTML;
                // Duplicate content 2 times for seamless infinite loop (optimal for iPhone)
                track.innerHTML = originalContent + originalContent;
            }
        };
        
        // Ensure DOM is fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', createSeamlessLoop);
        } else {
            // Small delay to ensure all images are loaded
            setTimeout(createSeamlessLoop, 100);
        }
    }, []);

    return (
        <>
            <div className="our-blogs-section">
                <div className='container'>
                    <div className='our_blog_container'>
                        <div className='our_blog_heading_container'>
                            <h2 className='our_blog_heading'>Our Blogs</h2>
                            <div className='our_blog_inner d-sm-flex justify-content-between align-items-start'>
                                <h4 className='blog_inner_heading'>Read what excites, achieves and moves us</h4>
                            </div>
                        </div>
                        <div className='our_blog_select_type'>
                            <div className='our_blog_select_type_inner'>
                                <div className='our_blog_type_button'>
                                    <button className={selectedBlogType === 0 ? 'blogActive' : 'deActive'} onClick={() => handleFilter(0)}>All Blogs</button>
                                </div>
                                {blogData?.length > 0 &&
                                    [...new Set(blogData?.map(blog => blog?.blogTypeId))]
                                        .map((uniqueBlogTypeId, index) => {
                                            const blog = blogData.find(b => b?.blogTypeId === uniqueBlogTypeId);

                                            return (
                                                <div className='our_blog_type_button' key={index}>
                                                    <button
                                                        onClick={() => handleFilter(uniqueBlogTypeId)}
                                                        className={selectedBlogType === uniqueBlogTypeId ? 'blogActive' : 'deActive'}
                                                    >
                                                        {blog?.blogTypeName}
                                                    </button>
                                                </div>
                                            );
                                        })
                                }
                            </div>
                        </div>
                        <div className='our_blog_card_container'>
                            <div className='our_blog_card_inner row'>
                                {filteredBlogs?.length > 0 && filteredBlogs?.map((blog, index) => (
                                    <React.Fragment key={index}>
                                        <div className='our_blog_card_image col-lg-4 col-md-6 col-sm-12 mb-sm-4 mb-5' onClick={() => handleModalToggle(blog?.blogId)} style={{ cursor: "pointer" }}>
                                            <div className='' key={index}>
                                                <div className='our_blog_card_image_container'>
                                                    <img src={`${blog?.blogImage}`} alt='blog' />
                                                </div>
                                                <div className='our_blog_card_content'>
                                                    <span className='our_blog_date'>{formatDate(blog?.blogDate)}</span>
                                                    <h4 className='our_blog_title mb-0'>{blog.blogTitle}</h4>
                                                    <p className='our_blog_description mb-0'>{getShortDescription(blog?.blogDescrption, 20)}</p>
                                                    <div className='our_blog_card_content_inner_right'>
                                                        <button className='learn_more_button'>
                                                            <span>Learn More</span>
                                                            <img src='./images/arrow-right.png' alt='arrow' />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                <Link to='/blog' className='view_all_blogs_button_new'>
                    <span>View All Blogs</span>
                    <img src='./images/arrow-right.png' alt='arrow' />
                </Link>
                <OurClientSay />
            </div>
            <div className="client-slider">
                <div className="client-track" id="clientTrack">
                    <img src="./images/SuperSinger+.webp" className="client-logo" alt="" />
                    <img src="./images/companies/12.png" className="client-logo" alt="" />
                    <img src="./images/companies/13.png" className="client-logo" alt="" />
                    <img src="./images/companies/22.png" className="client-logo" alt="" />
                    <img src="./images/companies/24.png" className="client-logo" alt="" />
                    <img src="./images/companies/25.png" className="client-logo" alt="" />
                    <img src="./images/companies/31.png" className="client-logo" alt="" />
                    <img src="./images/companies/32.png" className="client-logo" alt="" />
                </div>
            </div>

        </>
    );
}
export default OurBlogsSection;