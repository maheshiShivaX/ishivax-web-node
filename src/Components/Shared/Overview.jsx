import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Overview = ({ overviewData }) => {
    const [activeId, setActiveId] = useState(null);
    const [activeItem, setActiveItem] = useState(null);

    useEffect(() => {
        if (overviewData && overviewData.length > 0) {
            // Default: Show first item ("Our Mission")
            setActiveId(overviewData[0].id);
            setActiveItem(overviewData[0]);
        }
    }, [overviewData]);

    const handleClick = (item) => {
        setActiveId(item.id);
        setActiveItem(item);
    };

    if (!overviewData || overviewData.length === 0) {
        return <div>Data Not Avaiable</div>;
    }

    return (
        <div>
            <div className="fw-main-row">
                <div className="fw-container">
                    <div className="fw-row">
                        <div className="fw-col-xs-12">
                            <div className="fw-divider-space" style={{ marginTop: '60px' }}></div>
                        </div>
                    </div>

                    <div className="fw-col-xs-12 fw-col-sm-6">
                        <div className="fw-row">
                            <div className="fw-heading fw-heading-h2">
                                <h2 className="fw-special-title">OVERVIEW</h2>
                            </div>
                            <p className="exciting-ER4">
                                Driving global business success <br />
                                with pioneering IT solutions.
                            </p>
                        </div>
                        <div className="fw-row">
                            <div className="textblock-shortcode clear">
                                <p>
                                    iShivax, a global IT leader, offers innovative software, web, and app development, IoT, and automation, driving efficiency and market leadership.
                                </p>
                            </div>

                            <div className="frame-8082-ZNf">
                                {/* Dynamic Buttons */}
                                {overviewData.map((item) => (
                                    <div
                                        key={item.id}
                                        className={`frame-8079-tfq ${activeId === item.id ? "active" : ""}`}
                                        onClick={() => handleClick(item)}
                                    >
                                        {item.title}
                                    </div>
                                ))}
                            </div>

                            <div className="auto-group-yyaf-Qw1">
                                <div className="overview-content">
                                    {/* <p dangerouslySetInnerHTML={{ __html: activeItem?.description?.replace(/\n/g, "<br/>") }} /> */}
                                    <p>{activeItem?.description}</p>
                                </div>
                            </div>

                            {/* <div className="auto-group-yyaf-Qw1">
                                {activeContent === 'our-mission-content' && (
                                    <div className="our-mission-content">
                                        <p>
                                            At iShivax, we empower global businesses with transformative
                                            digital technology. Our innovative IT solutions in software,
                                            web, mobile apps, IoT, and automation meet current needs and
                                            anticipate future challenges. We foster excellence and
                                            collaboration to achieve sustainable growth and build lasting,
                                            trusted partnerships.
                                        </p>
                                    </div>
                                )}

                                {activeContent === 'our-vission-content' && (
                                    <div className="our-vission-content">
                                        <p>
                                            At iShivax, we aim to lead in IT innovation, bridging current
                                            tech with future demands. We develop cutting-edge, accessible,
                                            reliable solutions to inspire businesses of all sizes, enhancing
                                            productivity, efficiency, and creativity. Our vision is a world
                                            where technology continually enhances human endeavors and global
                                            connectivity.
                                        </p>
                                    </div>
                                )}

                                {activeContent === 'awards-win-content' && (
                                    <div className="awards-win-content">
                                        <p>
                                            Shivax has been honored with numerous industry awards,
                                            underscoring our commitment to technological excellence and
                                            superior client service.
                                        </p>
                                        <p>Our accolades include:</p>
                                        <p>
                                            Tech Innovator Award for our pioneering IoT and automation
                                            solutions.
                                        </p>
                                        <p>
                                            Best Software Development Company for exceptional software
                                            delivery.
                                        </p>
                                        <p>
                                            Global IT Leadership Award for our significant impact on global
                                            technology trends.
                                        </p>
                                        <p>
                                            Customer Satisfaction Excellence for outstanding client support.
                                        </p>
                                    </div>
                                )}
                            </div> */}

                            <div className="fw-divider-space" style={{ marginTop: '20px' }}></div>
                            <Link to="/aboutus">
                                <div className="frame-66-Y1q frame-learn-button">
                                    <div className="frame-66-Y1q-text">Learn More</div>
                                    <div className="frame-66-Y1q-arrow"></div>
                                </div>
                            </Link>

                            <div className="fw-divider-space" style={{ marginTop: '30px' }}></div>
                        </div>
                    </div>

                    <div className="fw-col-xs-12 fw-col-sm-6 hover_inAll" >
                        <div className="image-rocket">
                            <img id="image-preview" src={activeItem?.imagePath} alt="Content visual" />
                        </div>
                    </div>

                    <div className="fw-divider-space" style={{ marginTop: '60px' }}></div>
                </div>
            </div>
        </div>
    );
};

export default Overview;
