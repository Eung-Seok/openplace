import React, { useState, useEffect } from "react";
import FundingDataInit from "../data/FundingDataInit.js";
import "./Funding.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import FundingBox from "./component/FundingBox.js"
import {Link} from "react-router-dom";

function FundingList() {

    useEffect(() => {
        if (!localStorage.getItem('펀딩데이터')) {
            FundingDataInit();
        }
    }, []);


    // 페이지 쪽수 기능
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;


    const fundingData = JSON.parse(localStorage.getItem('펀딩데이터'))

    // 페이지 넘기기 카드 기능 
    const itemsPerPage = 9;
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const currentItems = fundingData.slice(startIdx, endIdx);

    const getCurrentAmount = (item) => Math.floor(item.goalAmount * item.rate / 1000000);
    const getGoalAmount = (item) => Math.floor(item.goalAmount / 10000);

    return (
        <div className="funding-bg-color">
            <nav className="funding-menu">

                <div className="funding-menu-left">
                    <IoMenu className="funding-menu-icon" />
                </div>

                <div className="funding-menu-center">
                    <Link to="/all-list">홈</Link>
                    <Link to="/my-fund">나의 펀딩</Link>
                    <Link to="/categories">카테고리</Link>
                    <Link to="/funding/support">후원하기</Link>
                    <Link to="/funding/create">등록하기</Link>
                </div>

                <div className="funding-menu-right" />

                <div className="funding-mega-menu">
                    <div className="funding-mega-inner">
                        <div className="funding-mega-column">
                            <h4>홈</h4>
                            <div className="funding-mega-items">
                                <p>전체목록</p>
                            </div>
                        </div>

                        <div className="funding-mega-column funding-mega-funding">
                            <h4>나의 펀딩</h4>
                            <div className="funding-mega-items">
                                <p>후원금</p>
                                <p>후원 내역</p>
                                <p>진행 중인 펀딩</p>
                            </div>
                        </div>

                        <div className="funding-mega-column funding-mega-category">
                            <h4>카테고리</h4>
                            <div className="funding-mega-items">
                                <p>생활·편의</p>
                                <p>안전</p>
                                <p>환경</p>
                                <p>문화·체육</p>
                                <p>교통시설</p>
                            </div>
                        </div>

                        <div className="funding-mega-column">
                            <h4>후원하기</h4>
                            <div className="funding-mega-items">
                                <p>금액 충전</p>
                                <p>정기 후원</p>
                                <p>후원 가이드</p>
                            </div>
                        </div>

                        <div className="funding-mega-column funding-mega-register">
                            <h4>등록하기</h4>
                            <div className="funding-mega-items">
                                <p>펀딩 등록</p>
                                <p>아이디어 제안</p>
                                <p>진행 절차 안내</p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <section className="funding-filter-container">
                <div className="funding-filter">
                    <span className="funding-explan">공공시설 개선 현황</span>
                    <select className="funding-choose">
                        <option selected>전체 카테고리</option>
                        <option>생활·편의</option>
                        <option>문화·교육</option>
                        <option>안전·환경</option>
                        <option>체육·여가</option>
                        <option>교통시설</option>
                    </select>
                    <select className="funding-choose">
                        <option selected>정렬 기준</option>
                        <option>인기순</option>
                        <option>최신순</option>
                        <option>마감 임박</option>
                        <option>달성률 높은순</option>
                        <option>참여 많은순</option>
                    </select>
                </div>
            </section>

            <section className="funding-funding-container">
                <hr />
                <div className="funding-funding-grid">
                    {currentItems.map((item) => {
                        return (
                            <FundingBox
                                key={item.id}
                                item={item}
                                getCurrentAmount={getCurrentAmount}
                                getGoalAmount={getGoalAmount}
                            />
                        );
                    })}
                </div>
                <hr className="card-bottom-bar" />

                <div className="funding-page-box">
                    {Array.from({ length: totalPages }, (_, idx) => {
                        const pageNum = idx + 1;
                        return (
                            <a
                                key={pageNum}
                                href={`#${pageNum}`}
                                className={`funding-page ${currentPage === pageNum ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setCurrentPage(pageNum);
                                }}
                            >
                                {pageNum}
                            </a>
                        );
                    })}
                </div>

                <div className="funding-plus">
                    <div className="funding-more-actions">
                        <a
                            href="#"
                            className="funding-more-btn"
                            onClick={(e) => {
                                e.preventDefault();
                                if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                            }}
                        >
                            다음 페이지
                        </a>

                    </div>
                    <p className="funding-comment">여러분 동네, 개선이 필요한 공공시설이 있나요?</p>
                    <div className="funding-register-actions">
                        <Link to="/funding/create" className="funding-create-btn">
                            + 펀딩 등록하기
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FundingList;