import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import FundingSection from "./components/FundingSection";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import MyPage from "./pages/MyPage";
import CommunitySection from "./components/CommunitySection";
import logo from './logo.svg';
import './App.css';
import FundingList from './fundingpage/FundingList';
import CommunityMain from './communitypage/CommunityMain';
import { Routes, Route, Link, useNavigate } from 'react-router';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CommunityGeneral from './communitypage/CommunityGeneral';
import CommunityReview from './communitypage/CommunityReview';
import CommunityReport from './communitypage/CommunityReport';
import { useEffect } from 'react';
import CommunityWrite from './communitypage/CommunityWrite';
import CommunityView from './communitypage/CommunityView';
import DataInit from './data/DataInit';
import Login from './loginpage/Login';
import Register from './loginpage/Register';
import FindId from './loginpage/FindId';
import FindPw from './loginpage/FindPw';
import AccountInit from './data/AccountInit';
import SearchResultPage from "./pages/SearchResultPage";
import FundingCreate from "./fundingpage/FundingRegister";
import FundingDetail from "./fundingpage/FundingDetail";
import FundingSupport from "./fundingpage/FundingSupport";
import CommunitySearch from "./communitypage/CommunitySearch";

function App() {

  let naviate = useNavigate();

  return (
    <div>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/community/main/:page" element={<CommunityMain />}></Route>
          <Route path="/community/main/search/:keyword/:page" element={<CommunitySearch />}></Route>
          <Route path="/community/general/:page" element={<CommunityGeneral />}></Route>
          <Route path="/community/general/search/:keyword/:page" element={<CommunitySearch />}></Route>
          <Route path="/community/report/:page" element={<CommunityReport />}></Route>
          <Route path="/community/report/search/:keyword/:page" element={<CommunitySearch />}></Route>
          <Route path="/community/review/:page" element={<CommunityReview />}></Route>
          <Route path="/community/review/search/:keyword/:page" element={<CommunitySearch />}></Route>
          <Route path="/community/:id" element={<CommunityView />}></Route>
          <Route path="/community/write" element={<CommunityWrite />}></Route>
          <Route path="*" element={<div><h1>존재하지 않는 주소입니다.</h1></div>}></Route>
          <Route path="/search" element={<SearchResultPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/findid" element={<FindId />} />
          <Route path="/findpw" element={<FindPw />} />
          <Route path="/register" element={<Register />} />
          <Route path="/funding/:funding/:page" element={<FundingList />} />
          <Route path="/funding/:funding/:category/:page" element={<FundingList />} />
          <Route path="/funding/create" element={<FundingCreate />} />
          <Route path="/funding/detail/:id" element={<FundingDetail />} />
          <Route path="/funding/support/:id" element={<FundingSupport />} />


        </Routes>
        <Footer />
      </>


    </div>
  )
}

export default App;
