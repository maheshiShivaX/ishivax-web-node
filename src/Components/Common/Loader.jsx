import { useContext, useEffect } from "react";
import "../../ComponentsCss/Loader.css";
import { ThemeContext } from "../../Contaxt/ThemeContext";

const Loader = () => {
  const { startExit, setStartExit, setLoaderDone } =
    useContext(ThemeContext);

  useEffect(() => {
    const gifTimer = setTimeout(() => {
      setStartExit(true);

      const exitTimer = setTimeout(() => {
        setLoaderDone(true); // ONLY animation end
      }, 1200); // animation duration

      return () => clearTimeout(exitTimer);
    }, 6000);

    return () => clearTimeout(gifTimer);
  }, [setLoaderDone, setStartExit]);

  return (
    <div className={`loader-wrapper ${startExit ? "exit" : ""}`}>
      <img src="/images/loaderzif.gif" alt="Loading" />
    </div>
  );
};

export default Loader;
