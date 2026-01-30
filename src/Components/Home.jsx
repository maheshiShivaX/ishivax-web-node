import { useContext, useEffect } from "react";
import Loader from "./Common/Loader";
import Layout from "./Shared/Layout";
import Banner from "./Shared/Banner";
import OurEminentSolutions from "./Shared/OurEminentSolutions";
import SmartDevelopment from "./Shared/SmartDevelopment";
import Video from "./Shared/Video";
import CollaborateWith from "./Shared/CollaborateWith";
import OurBlogsSection from "./Shared/OurBlogsSection";
import { ThemeContext } from "../Contaxt/ThemeContext";

const Home = () => {
    const { loaderDone, startExit, setIsSettled, hasLoadedOnce, setLasLoadedOnce } =
        useContext(ThemeContext);

    // Initial lock
    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.backgroundColor = "#181818";
    }, []);

    // Handle pause + unlock
    useEffect(() => {
        if (!loaderDone) return;

        // ⏸ HOLD zoomed-out screen
        const settleTimer = setTimeout(() => {
            // setIsSettled(true);

            document.body.style.overflow = "auto";
            document.body.style.backgroundColor = "#fff";
            setLasLoadedOnce(true);

        }, 2200); // 1.2s animation + 1s pause

        return () => clearTimeout(settleTimer);
    }, [loaderDone, setIsSettled, setLasLoadedOnce]);

    return (
        <>
            {!loaderDone && <Loader />}

            <div
                className={`home-wrapper ${startExit && !hasLoadedOnce ? "reveal" : ""
                    } ${loaderDone ? "final" : ""}`}
            >
                <Layout>
                    <Banner />
                    <OurEminentSolutions />
                    <SmartDevelopment />
                    <Video />
                    <CollaborateWith />
                    <OurBlogsSection />
                </Layout>
            </div>
        </>
    );
};

export default Home;
