import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MetaPixel = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [location.pathname]);

  return null;
};

export default MetaPixel;
