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
        <div className={`fw-main-row black-bg-content ${isLight ? 'banner-light-smart' : 'banner-dark-smart'}`} >
            <div className="fw-full-container">
                <div className="fw-container">
                    <div className="seo-media-images">
                        {imageData?.map((item, i) => (
                            <img key={i} className="top-image" src={`${item?.imagePath}`} alt="" />
                        ))}
                    </div>
                </div>
                <div className="content-under-image">
                    <img className='side_light_item' src='/images/side_light_item.png' alt='' />
                    <img className='side_light_item2' src='/images/side_light_item2.png' alt='' />
                    <div className="fw-row ">
                        <img className="vector-line-1" src="/images/Vector-upper-arrow.png" alt="" />
                    </div>
                    <div className="fw-row">
                        <div className="fw-container">
                            <div className="fw-col-md-4 vector-class">
                                <div className="dot-1"></div>
                                <div className="dot-2"></div>
                                <img className="vector-cross-1" src="/images/vector.png" alt="" />
                                <div className="dot-3"></div>
                                <div className="dot-4"></div>
                            </div>
                            <div className="fw-col-md-4">
                                <div className="fw-heading fw-heading-h2">
                                    <h2 className={`fw-special-title ${isLight ? "vector-heading-LIGHT" : "vector-heading"}`}>SMART DEVELOPMENT</h2>
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
                    <div className="fw-row ">
                        <img className="vector-line-2" src="/images/Vector-upper-arrow.png" alt="" />
                    </div>
                    <div className="fw-row vector-class">

                        <div className="fw-container">

                            <div className="fw-col-md-4 text-start">

                                <div className="dot-1"></div>
                                <div className="dot-2"></div>
                                <img className="vector-cross-1" src="/images/vector.png" alt="" />
                                <div className="dot-9"></div>
                                <div className="dot-10"></div>
                            </div>
                            <div className="fw-col-md-4">
                            </div>
                            <div className="fw-col-md-4">
                                <div className="dot-5"></div>
                                <div className="dot-6"></div>
                                <img className="vector-cross-2" src="/images/vector.png" alt="" />
                                <div className="dot-11"></div>
                                <div className="dot-12"></div>
                            </div>
                        </div>
                    </div>
                    <div className="fw-row">
                        <img className="vector-line-2" src="/images/Vector-upper-arrow.png" alt="" />
                    </div>
                    <div className="fw-row">
                        <div className="fw-col-xs-12 ">
                            <div className="fw-divider-space-manual"></div>
                        </div>
                    </div>
                    <div className="fw-row">
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