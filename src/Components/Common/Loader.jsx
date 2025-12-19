import { useEffect, useState } from "react";
import "../../ComponentsCss/Loader.css";

const Loader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [zoomOut, setZoomOut] = useState(false);

    useEffect(() => {
        let interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);

                    // Start zoom-out animation
                    setZoomOut(true);

                    // After animation → complete
                    setTimeout(() => {
                        onComplete();
                    }, 1000); // matches loaderExit duration

                    return 100;
                }
                return prev + 0.5;
            });
        }, 20);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className={`loader-wrapper ${zoomOut ? "loader-zoom-out" : ""}`}>
            <div className="loader-content">
                <div className="loader-logo">
                    <img src="/images/ishivaxlogo.png" alt="Logo" />
                </div>

                <div className="loader-bar">
                    <div
                        className="loader-bar-fill"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Loader;
