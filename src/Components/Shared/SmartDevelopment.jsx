import { Link } from 'react-router-dom';
import '../CustomCss/Custom.css';
import { useContext, useEffect, useState } from 'react';
import { decryptData } from '../../_services';
import { ThemeContext } from '../../Contaxt/ThemeContext';
import axiosIns, { API_URL } from '../../config';

const SmartDevelopment = () => {
    const [imageData, setImageData] = useState();
    const { isLight } = useContext(ThemeContext);

    const fetchgetImageDetailByImageType = async () => {
        try {
            const response = await axiosIns.get(API_URL.GetImageDetailByImageType + "?pImageType=SmartDevelopement");

            // Get the encrypted header
            const encrypted = response.headers["x-encrypted"];

            // Fallback if header is missing
            if (!encrypted) {
                setImageData([]);
                return;
            }

            // Attempt to decrypt
            const decrypted = decryptData(encrypted);

            // Validate decrypted data
            if (decrypted && decrypted.isSuccess === 1 && Array.isArray(decrypted.data)) {
                setImageData(decrypted.data);
            } else {
                setImageData([]);
            }
        } catch (error) {
            setImageData([]);
        }
    };

    useEffect(() => {
        fetchgetImageDetailByImageType();

    }, [])

    return (
        <div className={`fw-main-row black-bg-content ${isLight ? 'banner-light-smart' : 'banner-dark-smart'} pb-5`} >
            <div className="fw-full-container">
                <div className="fw-container">
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
                </div>


                <div className="content-under-image">
                    <img className='side_light_item' src='/images/side_light_item.webp' alt='' />
                    <img className='side_light_item2' src='/images/side_light_item2.webp' alt='' />

                    <div className='smart-development-top'>
                        <div className='top-vector_main fw-container'>
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
                                        <h2 className={`fw-special-title ${isLight ? "vector-heading-LIGHT" : "vector-heading"}`}>SMART DEVELOPMENT</h2>
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
                            <div className="fw-row sliding-text">
                                <p className="p-sliding-text-black">Your Trusted IT partner.
                                    Your Trusted IT partner.
                                    Your Trusted IT partner.
                                    Your Trusted IT partner.
                                    Your Trusted IT partner.
                                    Your Trusted IT partner.
                                    Your Trusted IT partner.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="seo-media-images fw-container">
                        {imageData?.map((item, i) => (
                            <img key={i} className="top-image" src={`${item?.imagePath}`} alt="" />
                        ))}
                    </div>

                    {/* <div className='top-vector_main fw-container d-none'>
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
                    </div> */}

                    <div className="fw-row smart-development-bottom-section pt-sm-0 pt-4">
                        <div className="fw-container">
                            <div className="fw-col-xs-12 fw-col-sm-12 fw-col-md-3 fw-col-lg-3">
                                <p className={`${isLight ? "exciting-ER5-LIGHT" : "exciting-ER5"}`}>At iShivax, we blend dedication and
                                    innovation to transform your business, treating it as both a
                                    science and an art.</p>
                            </div>
                            <div className="fw-col-xs-12  fw-col-md-1 fw-col-lg-3">

                            </div>
                            <Link to="/portfolio">
                                <div className="fw-col-xs-12 fw-col-sm-4 fw-col-md-4 fw-col-lg-3">
                                    <div className={`${isLight ? "frame-66-4mJ-LIGHT" : "frame-66-4mJ"}`}>
                                        <div className="portfolio-white">Check Our Portfolio</div>
                                        <img className="arrow-right-ByH"
                                            src="/images/arrow-right-white.png" alt="" />
                                    </div>
                                </div>

                            </Link>
                            <Link to="/contact-us">
                                <div className="fw-col-xs-12 fw-col-sm-4 fw-col-md-4 fw-col-lg-3">
                                    <div className={`${isLight ? "frame-66-4mL-LIGHT" : "frame-66-4mL"}`}>
                                        <div className="portfolio-white">Get In Touch</div>
                                        <img className="arrow-right-ByH"
                                            src="/images/arrow-right-white.png" alt="" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default SmartDevelopment 