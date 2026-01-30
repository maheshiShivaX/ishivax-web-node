import { Link } from "react-router-dom";
import MyTextPrinting from "../Home/MyTextPrinting";
import { useEffect, useState } from "react";
import axiosIns, { API_URL } from "../../config";
import { decryptData } from "../../_services";

const CollaborateWith = () => {
    const [collaborateData, setCollaborateData] = useState([]);

    const fetchGetCollaborate = async () => {
        try {
            const response = await axiosIns.get(API_URL.GetCollaborate);

            // Get the encrypted header
            const encrypted = response.headers["x-encrypted"];

            // Fallback if header is missing
            if (!encrypted) {
                console.warn("⚠ No X-Encrypted header, using fallback empty array");
                setCollaborateData([]);
                return;
            }

            // Attempt to decrypt
            const decrypted = decryptData(encrypted);

            // Validate decrypted data
            if (decrypted && decrypted.isSuccess === 1 && Array.isArray(decrypted.data)) {
                setCollaborateData(decrypted.data);
            } else {
                setCollaborateData([]);
            }
        } catch (err) {
            setCollaborateData([]);
        }
    };

    useEffect(() => {
        fetchGetCollaborate();
    }, []);

    return (
        <div className="fw-main-row pt-4 pb-5" style={{backgroundColor:"#ffffff"}}>
            <MyTextPrinting collaborateData={collaborateData} />
            <div className="fw-container">
                <div className="fw-row">
                    <div className="fw-col-xs-12 frame-8084-7L8">
                        <div className="fw-heading fw-heading-h2">
                            <h2 className='fw-special-title tech-part-AA2'>Collaborate with us</h2>
                        </div>
                        <h2 className="banner_banner_title__k7Ta_" data-classname="title">
                            <span style={{ color: 'color:rgba(83, 83, 83, 1)' }}>We are passionate investors in
                                great ideas</span>
                            <span style={{ color: 'color:rgba(83, 83, 83, 1)' }}>
                                <img src="/images/threed_image_one.webp" alt="texture" className="mx-2" />
                                helping businesses to bring their</span>
                            <span style={{ color: 'color:rgba(54, 45, 45, 1)' }}> vision to life and drive the
                                <img src="/images/threed_image_two.webp" alt="texture" className="mx-2" />
                                global
                            </span>
                            <span style={{ color: 'color: rgba(5, 6, 16, 1)' }}>innovation forward.</span>
                        </h2>
                        <Link to="/contact-us">
                            <div className="frame-66-Y1q frame-dicuss-button">
                                <div className="frame-66-Y1q-text">Let’s Discuss Your Idea</div>
                                <div className="frame-66-Y1q-arrow"></div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollaborateWith;
