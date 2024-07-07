import React, { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar";
import Kontakt from "./Pages/Kontakt/Kontakt";
import Tjenester from "./Pages/Tjenester/Tjenester";
import Footer from "./Components/Footer";
import Om from "./Pages/Om/Om";
import { useDarkMode } from "usehooks-ts";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
// import CookiePolicy from "./Pages/PrivacyPolicy/CookiePolicy";
import CookiePolicy from "./Pages/PrivacyPolicy/CoockiePolicy";
import Layout from "./Layout";

function App({}: React.HTMLAttributes<HTMLDivElement>) {
  const { isDarkMode } = useDarkMode();

  if (isDarkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  //const [count, setCount] = useState(0);

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Layout>
        <Routes>
          <Route
            // basename={import.meta.env.VITE_PUBLIC_URL}
            path={"/"}
          >
            <Route index element={<Home />} />
            <Route path="kontakt" element={<Kontakt />} />
            <Route path="tjenester" element={<Tjenester />} />
            <Route path="om" element={<Om />} />
            <Route path="legal/">
              <Route path="privacypolicy" element={<PrivacyPolicy />} />
              <Route path="cookiepolicy" element={<CookiePolicy />} />
              {/* <Route path="cookiepolicy" element={<CookiePolicy />} /> */}
            </Route>
          </Route>
        </Routes>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
