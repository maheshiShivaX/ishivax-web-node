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
    let intervalId = null;

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      
      // Ensure progress always increases smoothly
      setProgress(prev => {
        // Only update if new progress is greater than current
        if (newProgress > prev) {
          return newProgress;
        }
        return prev;
      });

      // Check if completed
      if (newProgress >= 100) {
        clearInterval(intervalId);
        setStartExit(true);

        const exitTimer = setTimeout(() => {
          setLoaderDone(true); // ONLY animation end
        }, 1200); // animation duration

        return () => clearTimeout(exitTimer);
      }
    };

    // Start with immediate update
    updateProgress();
    
    // Then continue with regular intervals
    intervalId = setInterval(updateProgress, 50);

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
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
