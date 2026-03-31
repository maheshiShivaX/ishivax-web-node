import React, { useEffect, useState } from "react";
import '../../ComponentsCss/FunZone.css';
import axios from "axios";
import { Link } from "react-router-dom";

// const funZoneData = [
//     {
//         id: 1,
//         title: "Quiz",
//         images: "https://gmedia.playstation.com/is/image/SIEPDC/the-crew-motorfest-hero-banner-desktop-01-en-30may23?$native$"
//     },
//     {
//         id: 2,
//         title: "Games",
//         images: "https://gmedia.playstation.com/is/image/SIEPDC/the-crew-motorfest-hero-banner-desktop-01-en-30may23?$native$"
//     },
//     {
//         id: 3,
//         title: "Astro",
//         images: "https://gmedia.playstation.com/is/image/SIEPDC/the-crew-motorfest-hero-banner-desktop-01-en-30may23?$native$"
//     },
//     {
//         id: 4,
//         title: "Live Streaming",
//         images: "https://gmedia.playstation.com/is/image/SIEPDC/the-crew-motorfest-hero-banner-desktop-01-en-30may23?$native$"
//     }
// ];

const Gamezone = () => {

    const [funZoneData, setFunZoneData] = useState([]);

    useEffect(() => {
        const fetchGame = async () => {
            try {
                const response = await axios.get(`https://ishivaxservices.com/admin_panel/public/api/option-data`);
                if (response?.data?.status === 200) {
                    setFunZoneData(response?.data?.data);
                }

            } catch (error) {
                setFunZoneData([]);
            }
        };

        fetchGame();
    }, []);


    return (
        <div className="fun_zone_bg">
            <section>
                <div className="banner_fun">
                    <img src="/images/Mobile-banner-fun.png" alt="" className="w-100" />
                </div>
            </section>


            <section className="banner_fun_row">
                <div className="container">
                    <div className="row">

                        {funZoneData?.map((item) => (
                            <div
                                className="col-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3"
                                key={item?.id}
                            >
                                <div className="fun_zone_card">
                                    <Link to={item?.url} target="_blank">
                                        <img src={item?.image || "default-image.jpg"} className="w-100" alt={item?.title} />
                                        <h2 style={{ textTransform: "capitalize" }}>{item?.type}</h2>
                                    </Link>
                                </div>
                            </div>
                        ))}

                    </div>
                    {/* <div className="banner_fun">
                        <img src="/images/11.png" alt="" className="w-100" />
                    </div> */}
                    <div className="fun_zone">
                        <img src="/images/logo.png" alt="" style={{maxHeight:"70px"}} />
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Gamezone;