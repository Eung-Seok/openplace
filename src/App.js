import React from "react";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import Footer from "./components/Footer";
import FundingSection from "./pages/FundingSection";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route } from "react-router";


function App() {
  return (
    <>
      <Header />
      <Hero />
      <FundingSection />
      <Footer />
    </>
  );
}

export default App;
