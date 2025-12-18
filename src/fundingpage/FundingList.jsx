import React, { useState, useEffect } from "react";
import FundingDataInit from "../data/FundingDataInit.js";
import "./Funding.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import FundingBox from "./component/FundingBox.js"
import { Link } from "react-router-dom";
import { useLocation, useNavigate, useParams } from "react-router";
import Button from 'react-bootstrap/Button';


function FundingList() {

    let navigate = useNavigate();
    let nowpage = useLocation();
    let pageArr = (nowpage.pathname.split("/"))
    pageArr.shift()
    pageArr.pop()
    pageArr = pageArr.join('/')
    console.log(pageArr)
    let params = useParams();
    let funding = params.funding;
    let category = params.category;
    let page = params.page
    let fundingData = JSON.parse(localStorage.getItem('펀딩데이터'))
    fundingData = fundingData.filter((item) => {
        switch (funding) {
            case 'main':
                return true
            case 'fundraise':
                {
                    switch(category){
                        case 'main':
                            return item.rate < 100
                        case 'dailylife':
                            return item.rate < 100 && item.category == '생활'
                        case 'culture':
                            return item.rate < 100 && item.category == '문화'
                        case 'safety':
                            return item.rate < 100 && item.category == '안전'
                        case 'environment':
                            return item.rate < 100 && item.category == '환경'
                        case 'sports':
                            return item.rate < 100 && item.category == '체육'
                        case 'traffic':
                            return item.rate < 100 && item.category == '교통'
                    }
                }
            case 'process':
                return item.rate == 100 && item.finish == false
            case 'finish':
                return item.finish == true
        }
    })


    let pages = [];
    for (let i = 1; i <= (fundingData.length - 1) / 9 + 1; i++) {
        pages.push(i);
    }

    let usingData = [];
    for (let i = (page - 1) * 9; i < page * 9; i++) {
        if (fundingData[i] != undefined)
            usingData.push(fundingData[i]);
    }
    return (
        <div className="funding-bg-color body">
            <section className="funding-filter-container">
                <div className="funding-tabs">
                    <button class={"tab " + (funding == 'main' ? 'active' : '')} onClick={() => navigate('/funding/main/1')}>전체 펀딩</button>
                    <button class={"tab " + (funding == 'fundraise' ? 'active' : '')} onClick={() => navigate('/funding/fundraise/main/1')}>모금중인 펀딩</button>
                    <button class={"tab " + (funding == 'process' ? 'active' : '')} onClick={() => navigate('/funding/process/1')}>작업 중인 펀딩</button>
                    <button class={"tab " + (funding == 'finish' ? 'active' : '')} onClick={() => navigate('/funding/finish/1')}>완료된 펀딩</button>
                </div>
                <div className={"funding-tabs " + (funding != 'fundraise' ? 'funding-tabs-hidden' : ' ') }>
                    <button class={'tab ' + (category == 'main' ? 'active' : '')} onClick={() => navigate('/funding/fundraise/main/1')}>전체 카테고리</button>
                    <button class={'tab ' + (category == 'dailylife' ? 'active' : '')} onClick={() => navigate('/funding/fundraise/dailylife//1')}>생활·편의</button>
                    <button class={'tab ' + (category == 'culture' ? 'active' : '')} onClick={() => navigate('/funding/fundraise/culture/1')}>문화·교육</button>
                    <button class={'tab ' + (category == 'safety' ? 'active' : '')} onClick={() => navigate('/funding/fundraise/safety/1')}>안전</button>
                    <button class={'tab ' + (category == 'environment' ? 'active' : '')} onClick={() => navigate('/funding/fundraise/environment/1')}>환경</button>
                    <button class={'tab ' + (category == 'sports' ? 'active' : '')} onClick={() => navigate('/funding/fundraise/sports/1')}>체육·여가</button>
                    <button class={'tab ' + (category == 'traffic' ? 'active' : '')} onClick={() => navigate('/funding/fundraise/traffic/1')}>교통시설</button>
                </div>


                {/* 펀딩 공통 메뉴바 */}

                <div className="funding-filter">
                    <span className="funding-explan">공공시설 개선 현황</span>
                    <div>
                        <button type="button" className="funding-btn-success btn-success" style={{ float: 'right', clear: 'both', marginBottom: '16px', fontSize: '25px' }} onClick={() => {
                            navigate('/funding/create')
                            window.scrollTo(0, 0)
                        }}>등록하기</button>
                    </div>
                </div>
            </section >

            <section className="funding-funding-container">
                <hr />
                <div className="funding-funding-grid">
                    {
                        usingData.map((item) => {
                            return <FundingBox item={item} />
                        })
                    }
                </div>
                <hr className="card-bottom-bar" />

                <div className="funding-page-box">
                    {pages.map((item, index) => {
                        const pageNum = index + 1;
                        return (
                            <a
                                className={`funding-page ${pageNum == page ? 'active' : ''}`}
                                onClick={(e) => {
                                    navigate('/' + pageArr + '/' + pageNum)
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
                                if (1 < page) {
                                    navigate('/' + pageArr + '/' + (Number(page) - 1))
                                } else {
                                    alert('첫번째 페이지입니다')
                                };
                            }}
                        >
                            이전 페이지
                        </a>

                    </div>
                    <div className="funding-more-actions">
                        <a
                            href="#"
                            className="funding-more-btn"
                            onClick={(e) => {
                                e.preventDefault();
                                if (page < pages.length) {
                                    navigate('/' + pageArr + '/' + (Number(page) + 1))
                                } else {
                                    alert('마지막 페이지입니다')
                                };
                            }}
                        >
                            다음 페이지
                        </a>

                    </div>
                    <p className="funding-comment">여러분 동네, 개선이 필요한 공공시설이 있나요?</p>
                    <div className="funding-register-actions">
                        <button className="funding-create-btn" onClick={() => {
                            navigate('/funding/create')
                            window.scrollTo(0, 0)
                        }}>
                            + 펀딩 등록하기
                        </button>
                    </div>
                </div>
            </section>
        </div >
    );
}

export default FundingList;