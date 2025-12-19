import React, { useContext, useState } from "react";
import Layout from "./Shared/Layout";
import { ThemeContext } from "../Contaxt/ThemeContext";

const profileImage =
    "/images/SKM.webp"; // Replace with actual image path if needed

const ViewCTODetails = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalImg, setModalImg] = useState("");
    const { isLight } = useContext(ThemeContext);

    const handleImgClick = (img) => {
        setModalImg(img);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setModalImg("");
    };

    return (
        <Layout>
            <section>
                <div className={`fw-main-row ${isLight ? 'black-bg-content-LIGHT' : 'black-bg-content'}`}>
                    <div className="fw-full-container-top" style={{ backgroundImage: 'url(/images/bg-dots.png)' }}>
                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">
                                <div className="fw-divider-space" style={{ marginTop: '40px' }}></div>
                            </div>
                        </div>
                        <div className="fw-container">

                            <div className="seo-media-images">
                                <img className="top-image-arrow-1" src="/images/Vector-line-straight.png" alt="" />
                            </div>
                            <div className="seo-media-images">
                                <img className="top-image-arrow-2" src="/images/Vector-line-straight.png" alt="" />
                            </div>

                            <div className="seo-media-images">
                                <img className="top-image-arrow-3" src="/images/Vector-line-straight.png" alt="" />
                            </div>
                            <div className="seo-media-images">
                                <img className="top-image-arrow-4" src="/images/Vector-line-straight.png" alt="" />
                            </div>

                        </div>
                        <div className="content-under-image">

                            <div className="fw-row ">
                                <img className="vector-line-1" src="/images/Vector-upper-arrow.png" alt="" />
                            </div>

                            <div className="fw-row">
                                <div className="fw-container ">
                                    <div className="fw-col-md-4 vector-class">
                                        <div className="dot-1"></div>
                                        <div className="dot-2"></div>
                                        <img className="vector-cross-1" src="/images/vector.png" alt="" />
                                        <div className="dot-3"></div>
                                        <div className="dot-4"></div>
                                    </div>

                                    <div className="fw-col-md-4">
                                        <div className="fw-heading fw-heading-h2">
                                            <h2 className={`${isLight ? 'fw-special-title vector-heading-LIGHT' : 'fw-special-title vector-heading'}`}>Details
                                            </h2>
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
                                <div className="fw-col-xs-12 ">
                                    <div className="fw-divider-space" style={{ marginTop: '20px' }}></div>
                                </div>
                            </div>
                            <div className="fw-row">
                                <div className="container">
                                    <div className="fw-col-xs-12 ">

                                    </div>
                                    <div className="fw-col-xs-12 ">
                                        <p className={`${isLight ? 'heading-common-main-LIGHT' : 'heading-common-main'}`}>Mr. Shiv Kumar Deegwal</p>
                                    </div>
                                    <div className="fw-col-xs-12 ">

                                    </div>
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
            </section>
            <div
                style={{
                    background: "#f1f1f1",
                    position: 'relative',
                    zIndex: 1
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "flex-start",
                        gap: "2rem",
                        // background: "#f1f1f1",
                        // borderRadius: "16px",
                        // boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
                        padding: "3rem 0",
                        position: 'relative',
                        zIndex: 1
                    }}
                    className="container"
                >
                    {/* Image Side */}
                    <div className="mx-3" style={{ flex: "1 1 570px", minWidth: 280, textAlign: "center" }} onClick={() => handleImgClick(profileImage)}>
                        <img
                            src={profileImage}
                            alt="Shiv Kumar Deegwal"
                        // style={{
                        //     width: "240px",
                        //     height: "240px",
                        //     objectFit: "cover",
                        //     borderRadius: "50%",
                        //     boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                        // }}
                        />
                    </div>

                    {/* Content Side */}
                    <div className="cto_text_wrepper mx-3" style={{ flex: "2 1 480px", minWidth: 320 }}>
                        <h2 className="text-start" style={{ margin: 0, fontSize: "2rem", fontWeight: 700 }}>
                            Shiv Kumar Deegwal
                        </h2>
                        <div className="text-start" style={{ color: "#555", fontWeight: 500, marginBottom: 8, marginTop: 4 }}>
                            Founder, iShivax | Tech Consultant | AI & Cybersecurity Certified (IIM Indore)
                        </div>
                        <div className="text-start" style={{ fontStyle: "italic", color: "#030c14", marginBottom: 16 }}>
                            Building tomorrow’s software today.
                        </div>
                        <p className="text-start">
                            I’m Shiv Kumar Deegwal, Founder of iShivax—a global IT consultancy founded in 2019, headquartered in Jaipur with clients across countries and backed by a strong team of developers and designers.
                        </p>
                        <p className="text-start">
                            I don’t just build software—I architect solutions that drive real outcomes. Governments, enterprises, startups, and social-impact initiatives come to me when a platform needs to be scalable, secure, and usable at scale.
                        </p>
                        <hr style={{ margin: "1.5rem 0" }} />

                        <h3 className="text-start" style={{ marginTop: 0, marginBottom: "10px" }}>What I Solve</h3>
                        <p className="text-start">Across sectors—construction, ecommerce, SaaS, IoT, OTT, CRM—you name it, I’ve built the tools that make operations smarter:</p>
                        <ul className="details-content-cto">
                            <li>
                                <b>Infrastructure & Procurement:</b> Custom ERPs and audit-ready procurement suites.
                            </li>
                            <li>
                                <b>Government Platforms:</b> Public parking, POS entry systems, citizen booking apps, field-survey tools, emergency QR/LifeCode systems—all live in Rajasthan.
                            </li>
                            <li>
                                <b>OTT & Media:</b> Spearheaded Rajasthan’s first OTT platform, First India Plus, delivering seamless adaptive streaming and multi-device support.
                            </li>
                            <li>
                                <b>IoT & Smart Devices:</b> Patented GPS car kits, vending automation, QR-based IoT sensors.
                            </li>
                            <li>
                                <b>SaaS & CRM:</b> Lead-to-cash tools, inventory modules, white-label solutions built for scale.
                            </li>
                            <li>
                                <b>Design & UX:</b> Systems designed to feel as intuitive as they are secure.
                            </li>
                        </ul>

                        <hr style={{ margin: "1.5rem 0" }} />

                        <h3 className="text-start" style={{ marginTop: 0, marginBottom: "10px" }}>Why I Matter</h3>
                        <ul className="details-content-cto">
                            <li>
                                <b>From Strategy to System:</b> I define architecture, oversee design, guide deployment—and own outcomes.
                            </li>
                            <li>
                                <b>Trusted by Governments:</b> Projects built for mass public use taught me engineering at scale, compliance, and citizen-first thinking.
                            </li>
                            <li>
                                <b>Global & Local:</b> We serve clients worldwide, while maintaining deep roots and trust within Rajasthan.
                            </li>
                            <li>
                                <b>Certified Authority:</b> AI & Cybersecurity from IIM Indore—tech with strategic sense and security baked in.
                            </li>
                        </ul>

                        <h3  className="text-start" style={{ marginTop: "2rem", marginBottom: "15px" }}>The iShivax Advantage</h3>
                        <ul className="details-content-cto">
                            <li>
                                <b>Founded in 2019 with a mission:</b> building tomorrow’s software today.
                            </li>
                            <li>
                                <b>A versatile team</b> that mixes deep tech with business insight.
                            </li>
                            <li>
                                <b>Proven track record</b> in app, web, IoT, automation, CRM, SaaS, and digital transformation.
                            </li>
                            <li>
                                <b>Clients praise our speed, simplicity, and impact</b>—“response time and dedication truly commendable,” says FirstIndia+ CTO.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {modalOpen && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        background: "rgba(0,0,0,0.7)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 9999,
                    }}
                    onClick={closeModal}
                >
                    <img
                        src={modalImg}
                        alt="Big"
                        style={{
                            maxWidth: "90vw",
                            maxHeight: "90vh",
                            borderRadius: "10px",
                            background: "#fff",
                            padding: "10px",
                        }}
                        onClick={e => e.stopPropagation()}
                    />
                </div>
            )}
        </Layout>
    )
};

export default ViewCTODetails;