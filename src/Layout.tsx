import React from "react";
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";

interface props {
  children: React.ReactNode;
}

const Layout: React.FC<props> = ({ children }) => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <div>{children}</div>;
};

export default Layout;
