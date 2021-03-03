import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const GoogleAnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname + location.search;
    ReactGA.set({ page: path });
    ReactGA.pageview(path);
  }, [location.pathname]);
  return <></>;
};

export default GoogleAnalyticsTracker;
