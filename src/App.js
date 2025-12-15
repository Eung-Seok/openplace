import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import FundingSection from "./components/FundingSection";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {Routes, Route } from "react-router";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import FundingPage from "./pages/FundingPage";
import CommunityPage from "./pages/CommunityPage";
import MyPage from "./pages/MyPage";
import CommunitySection from "./components/CommunitySection";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/funding" element={<FundingPage />} />
                <Route path="/community" element={<CommunityPage />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </>
    );
}

export default App;
