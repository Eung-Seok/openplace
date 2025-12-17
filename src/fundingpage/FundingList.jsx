import React, { useState, useEffect } from "react";
import FundingDataInit from "../data/FundingDataInit.js";
import "./Funding.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import FundingBox from "./component/FundingBox.js"
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router";
import Button from 'react-bootstrap/Button';


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
    const tabs = [
        "전체 카테고리",
        "생활·편의",
        "문화·교육",
        "안전",
        "환경",
        "체육·여가",
        "교통시설",
    ];

    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <div className="funding-bg-color">
            <section className="funding-filter-container">
                
                <div className="funding-tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`funding-tab ${activeTab === tab ? "active" : ""}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* 펀딩 공통 메뉴바 */}

                <div className="funding-filter">
                    <span className="funding-explan">공공시설 개선 현황</span>
                    <div>
                        {/* <Button style={{ float: 'right', clear: 'both', marginBottom: '16px' }} variant="success" onClick={() => navigate('/funding/write')}>등록하기</Button> */}
                        <Link to="/funding/create">
                            <Button type="button" className="funding-btn-success btn-success" style={{ float: 'right', clear: 'both', marginBottom: '16px', fontSize: '25px' }}>등록하기</Button>
                        </Link>
                    </div>
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
        </div >
    );
}

export default FundingList;