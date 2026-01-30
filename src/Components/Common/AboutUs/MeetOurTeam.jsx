import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const TEAM = [
    {
        id: 1,
        name: "SHIV KUMAR DEEGWAL",
        image: "/images/SHIVKUMARDEEGWAL.webp",
        position: "Founder",
        link: "/view-cto-details",
    },
    {
        id: 2,
        name: "DON SHIMMON",
        image: "/images/1teammember1.webp",
        position: "CEO",
        link: "",
    },
    {
        id: 3,
        name: "MARIAN SHIMMON",
        image: "/images/2teammember2.webp",
        position: "CFO",
        link: "",
    },
];

const MeetOurTeam = ({ isLight }) => {
    return (
        <section className="meet-our-team">
            <div className={`fw-main-row ${isLight ? "light-bg-content" : "black-bg-content"}`}>
                <div className="fw-container py-5">

                    {/* ================= HEADING ================= */}
                    <h2 className={`text-center mb-4 ${isLight ? "vector-heading-LIGHT" : "vector-heading"}`}>
                        MEET OUR TEAM
                    </h2>

                    <p className="text-center mb-2" style={{ color: isLight ? "#252525" : "#fff" }}>
                        Building Tomorrow's Software Today
                    </p>

                    <p
                        className="text-center mb-5"
                        style={{ color: isLight ? "#252525" : "rgba(162,171,189,1)" }}
                    >
                        Get to know the talented individuals driving innovation at iShivax.
                    </p>

                    {/* ================= DESKTOP GRID ================= */}
                    <div className="row d-none d-md-flex">
                        {TEAM.map((member) => (
                            <div key={member.id} className="col-lg-4 col-md-4 col-sm-6 mb-4">
                                <div className="image-container hover_inAll text-center">
                                    {member.link ? (
                                        <Link to={member.link}>
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="img-fluid image-item"
                                                loading="lazy"
                                            />
                                        </Link>
                                    ) : (
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="img-fluid image-item"
                                            loading="lazy"
                                        />
                                    )}
                                    <div className="image-team-name">{member.name}</div>
                                    <div className="image-team-position">{member.position}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ================= MOBILE SWIPER ================= */}
                    <div className="d-block d-md-none">
                        <Swiper
                            loop={true}
                            modules={[Navigation]}
                            spaceBetween={15}
                            slidesPerView={1.2}
                            navigation={false}
                            rewind={true}
                            breakpoints={{
                                572: { slidesPerView: 2 },
                            }}
                        >
                            {TEAM.map((member) => (
                                <SwiperSlide key={member.id}>
                                    <div className="image-container hover_inAll text-center w-100">
                                        {member.link ? (
                                            <Link to={member.link}>
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="img-fluid"
                                                    loading="lazy"
                                                />
                                            </Link>
                                        ) : (
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="img-fluid"
                                                loading="lazy"
                                            />
                                        )}
                                        <div className="image-team-name">{member.name}</div>
                                        <div className="image-team-position">{member.position}</div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* ================= JOIN BUTTON ================= */}
                    <div className="text-center mt-4">
                        <Link to="/join-our-team" className="d-flex justify-content-center">
                            <div className={`join-our-team-button ${isLight ? "frame-66-Y1q-LIGHT" : "frame-66-Y1q"}`}>
                                <span className="join-our-team-text">Join Our Team</span>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MeetOurTeam;
