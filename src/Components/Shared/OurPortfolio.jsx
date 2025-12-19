import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { getProjectDetail } from "../../_services";
import { imagebaseurl } from "../../config";

const OurPortfolio = () => {
    const [projectData, setProjectData] = useState();

    const fetchGetProjectDetail = async () => {
        try {
            const data = await getProjectDetail();
            setProjectData(data);
        } catch (error) {
            return null;
        }
    };

    useEffect(() => {
        fetchGetProjectDetail();
    }, []);

    return (
        <div className="fw-main-row middle-content">
            <div className="fw-container">
                <div className="fw-row">
                    <div className="fw-col-xs-12 ">
                        <div className="fw-divider-space" style={{ marginTop: '60px' }}></div>
                    </div>
                </div>

                <div className="fw-row">
                    <div className="fw-col-xs-12 ">
                        <div className="fw-heading fw-heading-h2">
                            <h2 className='fw-special-title' style={{ textAlign: 'center' }}>OUR
                                PORTFOLIO</h2>
                        </div>
                    </div>
                </div>
                <div className="fw-row">
                    <div className="fw-col-xs-12 ">
                        <p className="exciting-ER4" style={{ textAlign: 'center' }}>By focusing on the user,
                            our designs promote productivity<br /> and catalyze revenue enhancement
                        </p>
                    </div>

                </div>

                <div className="fw-row">
                    <div className="fw-col-xs-12 ">
                        <div className="fw-divider-space" style={{ marginTop: '20px' }}></div>
                    </div>
                </div>

                <div className="fw-row">
                    {projectData?.map((item, i) => (
                        <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-6 hover_inAll" key={i}>
                            <div className="seo-media-images frame-1-6">
                                <img src={`${imagebaseurl}${item?.projectPath}`} style={{ borderRadius: '20px' }} alt="" />
                            </div>
                            <p className="portfolio-content-title">{item.projectName}</p>
                            <p className="portfolio-content-line">{item.projectType}</p>
                            <Link target="_blank" to={item.liveUrl}>
                                <div className="frame-port-004">
                                    <div className="arrow-sign">&#8594;</div>
                                </div>
                            </Link>

                            <div className="frame-port-001">

                                {item.iosurl != null ?
                                    <Link target="_blank" to={item.iosurl}>
                                        <div className="frame-port-002">iPhone</div>
                                    </Link> : null
                                }

                                {item.androidUrl != null ?
                                    <Link target="_blank" to={item.androidUrl}>
                                        <div className="frame-port-002">Android</div>
                                    </Link> : null
                                }

                                {item.liveUrl != null ?
                                    <Link target="_blank" to={item.liveUrl}>
                                        <div className="frame-port-002">Website</div>
                                    </Link> : null
                                }
                            </div>
                        </div>
                    ))}
                </div>
                <div className="fw-row">
                    <Link to="/portfolio">
                        <div className="frame-66-Y1q frame-portfolio-button-center">
                            <div className="frame-66-Y1q-text">View All Portfolio</div>
                            <div className="frame-66-Y1q-arrow"></div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default OurPortfolio;
