import { useState, useEffect } from "react";
import axiosIns, { API_URL } from "../../config";
import { faqs } from "../../_services/staticData";
import '../../ComponentsCss/ServiceDetailPage.css';
import { decryptData } from "../../_services";

const Faqs = () => {
    const [data, setData] = useState();

    const fetchData = async () => {
        try {
            const response = await axiosIns.get(API_URL.GetFaqs);

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

    // Default first item open
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(prev => (prev === index ? -1 : index));
    };

    return (
        <div className="fw-main-row">
            <div className="fw-container">
                <div className="fw-row">
                    <div className="fw-col-xs-12 ">
                        <div className="fw-divider-space" style={{ marginTop: '60px' }}></div>
                    </div>
                </div>
                <div className="fw-row">
                    <div className="fw-col-xs-12 ">
                        <div className="fw-heading fw-heading-h2">
                            <h2 className='fw-special-title'>04 - {faqs?.heading}</h2>
                        </div>
                    </div>
                </div>
                <div className="fw-row">
                    <div className="fw-col-xs-12 ">
                        <p className="exciting-ER4">{faqs?.title}</p>
                    </div>
                </div>
                <div className="fw-row">
                    <div className="fw-col-xs-12">
                        <div className="fw-divider-space" style={{ marginTop: '20px' }}></div>
                    </div>
                </div>
                <div className="fw-row">
                    <div className="fw-col-xs-12">
                        {data?.length > 0 ? (
                            data?.map((item, i) => (
                                <div key={i}>
                                    <div
                                        className="faqs_details"
                                        onClick={() => toggleFAQ(i)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h5 className="text-start fw-bold">{item.question}</h5>

                                            {/* ICON TOGGLE */}
                                            {openIndex === i ? (
                                                <img src="/images/fminus.svg" alt="minus" />
                                            ) : (
                                                <img src="/images/fplus.svg" alt="plus" />
                                            )}
                                        </div>

                                        {/* Divider */}
                                        {openIndex === i && (
                                            <>
                                                <div className="fw-row">
                                                    <div className="fw-col-xs-12 ">
                                                        <div
                                                            className="fw-divider-space"
                                                            style={{ marginTop: "10px" }}
                                                        ></div>
                                                    </div>
                                                </div>

                                                {/* ANSWER */}
                                                <p className="text-start">{item.answer}</p>
                                            </>
                                        )}
                                    </div>

                                    {/* bottom spacing */}
                                    <div className="fw-row">
                                        <div className="fw-col-xs-12 ">
                                            <div
                                                className="fw-divider-space"
                                                style={{ marginTop: "20px" }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            ))) : (
                            <p className="text-center mt-4">No faqs available</p>
                        )}
                    </div>
                </div>
                <div className="fw-row">
                    <div className="fw-col-xs-12 ">
                        <div className="fw-divider-space" style={{ marginTop: '40px' }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Faqs;