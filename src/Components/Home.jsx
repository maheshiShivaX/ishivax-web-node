import { useState, useEffect } from "react";
import Loader from "./Common/Loader";
import Banner from "./Shared/Banner";
import CollaborateWith from "./Shared/CollaborateWith";
import Layout from "./Shared/Layout";
import OurBlogsSection from "./Shared/OurBlogsSection";
import OurEminentSolutions from "./Shared/OurEminentSolutions";
import SmartDevelopment from "./Shared/SmartDevelopment";
import Video from "./Shared/Video";
// import Spline from '@splinetool/react-spline';

const Home = () => {
    const [loaderDone, setLoaderDone] = useState(false);

    const handleLoaderDone = () => {
        // 1. Reset scroll so home appears from TOP
        window.scrollTo({ top: 0, behavior: "instant" });

        // 2. Show Home
        setLoaderDone(true);

        // ⏱️ Keep BODY black for 3 seconds
        document.body.style.backgroundColor = "#000000";

        setTimeout(() => {
            document.body.style.backgroundColor = "";
        }, 3000);
    };

    useEffect(() => {
        // Disable scrolling while loader is visible
        document.body.style.overflow = "hidden";
        document.body.style.backgroundColor = "#000000";

        return () => {
            document.body.style.overflow = "auto";
            document.body.style.backgroundColor = "";
        };
    }, []);

    useEffect(() => {
        if (loaderDone) {
            // Enable scroll after loader vanish
            document.body.style.overflow = "auto";
        }
    }, [loaderDone]);

    return (
        <>
            {!loaderDone && <Loader onComplete={handleLoaderDone} />}

            <div className={`home-wrapper ${loaderDone ? "show" : ""}`}>
                <Layout>
                    <Banner />
                    <OurEminentSolutions />
                    <SmartDevelopment />
                    <Video />
                    <CollaborateWith />
                    <OurBlogsSection />
                </Layout>
            </div>
            {/* <div style={{ height: "100vh", background: "#000" }}>
                <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
            </div> */}
        </>
    );
};

export default Home;