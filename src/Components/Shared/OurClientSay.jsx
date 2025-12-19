import React, { useEffect, useState } from "react";
import { decryptData } from "../../_services";
import axiosIns, { API_URL } from "../../config";

const Reviews = () => {
    const [slideIndex, setSlideIndex] = useState(1);
    const [testimonialData, setTestimonialData] = useState();

    const fetchGetTestimonialApproved = async () => {
        try {
            const response = await axiosIns.get(API_URL.GetTestimonialApproved);

            // Get the encrypted header
            const encrypted = response.headers["x-encrypted"];

            // Fallback if header is missing
            if (!encrypted) {
                setTestimonialData([]);
                return;
            }

            // Attempt to decrypt
            const decrypted = decryptData(encrypted);

            // Validate decrypted data
            if (decrypted && decrypted.isSuccess === 1 && Array.isArray(decrypted.data)) {
                setTestimonialData(decrypted.data);
            } else {
                setTestimonialData([]);
            }
        } catch (error) {
            setTestimonialData([]);
        }
    };

    useEffect(() => {
        fetchGetTestimonialApproved();
    }, [])

    const plusSlides = (n) => {
        let newIndex = slideIndex + n;
        if (newIndex > testimonialData.length) newIndex = 1;
        if (newIndex < 1) newIndex = testimonialData.length;
        setSlideIndex(newIndex);
    };

    return (
        <section>
            <div className="reviews_reviews__4RZyN fw-main-row" id="reviews">
                <div className="container reviews_reviews_container__sN1vM">
                    <div className="reviews_reviews_left__pEaQs">
                        <div className="fw-heading fw-heading-h2">
                            <h2 className="fw-special-title">WHAT OUR CLIENT SAY</h2>
                        </div>
                        <p className="reviews_reviews_text__wze2u">
                            Our commitment to clients worldwide: Boosted network connections for seamless operations.
                        </p>
                    </div>

                    <div className="reviews_reviews_right__d9kYf">
                        <div className="reviews-slider_reviews_wrapper__sIYGB">
                            {testimonialData?.map((item, index) => (
                                <div
                                    key={index}
                                    className="reviews-slider_reviews_item__WYB7F"
                                    style={{ display: slideIndex === index + 1 ? "block" : "none" }}
                                >
                                    <div className="reviews-block_reviews_block__dwhs1">
                                        <svg
                                            className="reviews-block_reviews_blockquote__Jy_eQ"
                                            viewBox="0 0 64 56"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M29.2149 20.1929..." data-fill="true"></path>
                                            <path d="M63.9431 20.1929..." data-fill="true"></path>
                                        </svg>

                                        <div className="reviews-block_reviews_content__HkM_1">
                                            <p className="reviews-block_reviews_review__h1LqO">{item.description}</p>
                                            <div className="reviews-block_reviews_row__LdFqX">
                                                <div className="reviews-block_reviews_client__f6H6B">
                                                    <div className="reviews-block_reviews_client_column__TvOZ4">
                                                        <h3 className="reviews-block_reviews_client_name__Lft3K">{item.clientName}</h3>
                                                    </div>
                                                </div>

                                                <div className="reviews-block_reviews_controls__PVp2m">

                                                    <div className="reviews-block_reviews_controls_prevBtn__2tekQ" onClick={() => plusSlides(-1)} style={{ fontSize: '30px' }}>→</div>
                                                    <div className="reviews-block_reviews_controls_nextBtn__k5h_0" onClick={() => plusSlides(1)} style={{ fontSize: '30px' }}>→</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Reviews;
