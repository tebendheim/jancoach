import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Kontakt from "./Pages/Kontakt";
import Tjenester from "./Pages/Tjenester";
import Footer from "./Components/Footer";
import Om from "./Pages/Om";
import { useDarkMode } from "usehooks-ts";

function App({}: React.HTMLAttributes<HTMLDivElement>) {
  const { isDarkMode } = useDarkMode();

  if (isDarkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  //const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="kontakt" element={<Kontakt />} />
          <Route path="tjenester" element={<Tjenester />} />
          <Route path="om" element={<Om />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
