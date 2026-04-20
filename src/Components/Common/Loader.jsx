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
    let isCompleted = false;

    const updateProgress = () => {
      if (isCompleted) return;
      
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      
      // Always update progress for continuous movement
      setProgress(newProgress);

      // Check if completed and prevent multiple calls
      if (newProgress >= 100 && !isCompleted) {
        isCompleted = true;
        setStartExit(true);

        const exitTimer = setTimeout(() => {
          setLoaderDone(true); // ONLY animation end
        }, 1200); // animation duration

        return () => clearTimeout(exitTimer);
      }
    };

    // Update more frequently for smoother progress
    const progressInterval = setInterval(updateProgress, 30); // Update every 30ms

    return () => {
      clearInterval(progressInterval);
    };
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
