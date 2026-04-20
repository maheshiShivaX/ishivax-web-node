import { useContext, useEffect, useState } from "react";
import "../../ComponentsCss/Loader.css";
import { ThemeContext } from "../../Contaxt/ThemeContext";

const Loader = () => {
  const { startExit, setStartExit, setLoaderDone } =
    useContext(ThemeContext);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 6000; // 6 seconds total duration

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(progressInterval);
        setStartExit(true);

        const exitTimer = setTimeout(() => {
          setLoaderDone(true); // ONLY animation end
        }, 1200); // animation duration

        return () => clearTimeout(exitTimer);
      }
    }, 50); // Update every 50ms for smooth animation

    return () => clearInterval(progressInterval);
  }, [setLoaderDone, setStartExit]);

  return (
    <div className={`loader-wrapper ${startExit ? "exit" : ""}`}>
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }} >
        <div className="progress-container">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            >
              <span className="progress-text">{Math.round(progress)}%</span>
            </div>
          </div>
        </div>
        <img src="/images/loaderzif.gif" alt="Loading" className="" />
      </div>
    </div>
  );
};

export default Loader;
