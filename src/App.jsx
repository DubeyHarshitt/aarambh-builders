import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact";
import AboutPage from "./Pages/AboutPage";
import BrowseProperties from "./Pages/Properties";
import InsightsPage from "./Pages/InsightsPage";
import ServicesPage from "./Pages/ServicesPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/properties" element={<BrowseProperties />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
