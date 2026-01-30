import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Contaxt/ThemeContext";
import Overview from "./Overview";
import axiosIns, { API_URL } from "../../config";
import { decryptData } from "../../_services";

const OurEminentSolutions = () => {
    const { isLight } = useContext(ThemeContext);
    const [data, setData] = useState();
    const [overviewData, setOverviewData] = useState()

    const fetchData = async () => {
        try {
            const response = await axiosIns.get(API_URL.GetCreative);

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
                setData(decrypted.data);
            } else {
                setData([]);
            }
        } catch (error) {
            setData([]);
        }
    };

    const fetchOverviewData = async () => {
        try {
            const response = await axiosIns.get(API_URL.GetOverview);

            // Get the encrypted header
            const encrypted = response.headers["x-encrypted"];

            // Fallback if header is missing
            if (!encrypted) {
                setOverviewData([]);
                return;
            }

            // Attempt to decrypt
            const decrypted = decryptData(encrypted);

            // Validate decrypted data
            if (decrypted && decrypted.isSuccess === 1 && Array.isArray(decrypted.data)) {
                setOverviewData(decrypted.data);
            } else {
                setOverviewData([]);
            }
        } catch (error) {
            setOverviewData([]);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        fetchOverviewData();
    }, []);

    return (
        <div>
            <div className="fw-main-row middle-content" style={{ backgroundColor: 'f1f1f1' }}>
                <img src="/images/left_element.webp" alt="" className="left_element" />
                <img src="/images/right_element.webp" alt="" className="right_element" />
                <div className="fw-row sliding-text">
                    <p className="p-sliding-text">Your Trusted IT partner.
                        Your Trusted IT partner.
                        Your Trusted IT partner.
                        Your Trusted IT partner.
                        Your Trusted IT partner.
                        Your Trusted IT partner.
                    </p>
                </div>
                <div className="fw-container mb-md-4 mb-3" style={{overflow:"hidden"}}>
                    <div className="fw-row">
                        <div className="fw-col-xs-12 ">
                            <div className="fw-heading fw-heading-h2">
                                <h2 className='fw-special-title'>OUR EMINENT SOLUTIONS</h2>
                            </div>
                        </div>
                    </div>
                    <div className="fw-row">
                        <div className="fw-col-xs-12 ">
                            <p className="exciting-ER4">At iShivax, we devise creative strategies and
                                innovative approaches to propel our clients' businesses forward,
                                transforming challenges into opportunities with tailored solutions that
                                exceed expectations.</p>
                        </div>
                    </div>
                    <div className="fw-row">
                        <Link to='/services'>
                            <div className="frame-66-Y1q frame-solutions-button">
                                <div className="frame-66-Y1q-text">View All Solutions</div>
                                <div className="frame-66-Y1q-arrow"></div>
                            </div>
                        </Link>
                    </div>
                    <div className="fw-row">
                        <div className="fw-col-xs-12 ">
                            <div className="fw-divider-space" style={{ marginTop: '60px' }}></div>
                        </div>
                    </div>
                    <div className="row card-container">

                        {data?.length > 0 && data?.map((item, i) => (
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 hover_inAll mb-lg-auto mb-4" key={i}>
                                <Link to="/service-mobile-app" style={{position:"relative"}}>
                                    <div className="frame-7-XAX">
                                        <p className="mobile-app-development-2sy">{item?.title}</p>
                                        <div>
                                            <p className="card-text-AA1">{item?.description}</p>
                                        </div>
                                    </div>
                                    <div className="frame-7-XAX-img">
                                        <img src={`${isLight ? item?.lightPath : item?.darkPath}`} alt="" className="w-100" />
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div >
                </div >
                <Overview overviewData={overviewData} />
            </div >
        </div >
    )
}

export default OurEminentSolutions;