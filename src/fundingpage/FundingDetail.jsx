import React, { useState, useEffect } from "react";
import FundingDataInit from "../data/FundingDataInit.js";
import "./Funding.css";
import { IoMenu } from "react-icons/io5";
// import FundingBox from "./component/FundingBox.js"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import FundingAmountPlus from "./FundingAmountPlus.jsx";

function FundingDetail() {

    const location = useLocation();
    const { item } = location.state || {};

    const [liked, setLiked] = useState(false);
    const [count, setCount] = useState(item.hearts || 0);

    const handleClick = () => {
        if (liked) {
            setCount(count - 1);
        } else {
            setCount(count + 1);
        }
        setLiked(!liked);
    };

    return (
        <div className="funding-bg-color">

            {/* 펀딩 공통 메뉴 */}
            {/* <nav className="funding-menu">
                <div className="funding-menu-left">
                    <IoMenu className="funding-menu-icon" />
                </div>

                <div className="funding-menu-center">
                    <Link to="/funding">홈</Link>
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
            </nav> */}

            {/* 후원창 이미지카드 */}
            <div className="funding-container-support">

                <div className="funding-support-explain">
                    <h2>{item.title}</h2>
                    <p className="funding-icon">
                        <FaMapMarkerAlt className="funding-map-icon" />
                        <span className="funding-map">&nbsp;{item.map}</span>
                    </p>

                    <div className="funding-support-header">
                        <img src={item.imgPath} alt={item.title} className="funding-support-img" />

                        <div className="funding-explan-text">
                            <div className="funding-p-row2">
                                <p className="funding-support-normal-text">후원자</p>
                                <p className="funding-support-normal-text">좋아요</p>
                            </div>
                            <div className="funding-p-row">
                                <p className="funding-support-su">{item.bankers || 0}</p>
                                {/* <p className="funding-support-su2">
                                    <span onClick={() => {

                                    }}>❤</span>100</p> */}

                                <p className="funding-support-su2">
                                    <span
                                        onClick={() => {
                                            if (liked) {
                                                setCount(count - 1);
                                            } else {
                                                setCount(count + 1);
                                            }
                                            setLiked(!liked);
                                        }}
                                        style={{ cursor: "pointer",
                                            color: liked ? "red" : "white",
                                            WebkitTextStroke: "2px black",
                                            fontSize: "50px",
                                            marginRight: "5px"
                                        }}
                                    >
                                        ❤
                                    </span>
                                    {count}
                                </p>


                            </div>

                            

                            {/* <p className="funding-support-amount-current">
                                {item.currentAmount
                                    ? (item.currentAmount / 10000).toLocaleString()
                                    : Math.floor(item.goalAmount * item.rate / 100 / 10000).toLocaleString()
                                } <span>만원</span>
                            </p> */}
                            <p className="funding-support-amount-current">
                                <FundingAmountPlus
                                    amount={
                                        item.currentAmount
                                            ? item.currentAmount / 10000
                                            : Math.floor(item.goalAmount * item.rate / 100 / 10000)
                                    }
                                /> <span>만원</span>
                            </p>

                            <p className="funding-support-amount">
                                목표금액: {(item.goalAmount / 10000).toLocaleString()} 만원
                            </p>

                            <div className="funding-support-gauge-container">
                                <div className="funding-support-top">
                                    <span className="funding-support-current">{item.rate}%</span>
                                    <span className="funding-support-left">남은기간: {item.timeLeft}일</span>
                                </div>
                                <div className="funding-support-bar">
                                    <span style={{ width: `${item.rate}%` }}></span>
                                </div>

                                <div className="funding-support-button">
                                    <Link to="/funding/support">
                                        <button className="">후원하기</button>
                                    </Link>
                                </div>

                                <div>
                                    <p className="funding-project-explan">
                                        이 프로젝트는 천안 지역 공공시설의 안전과 편의를 위해,
                                        2025년 12월 29일까지 후원금을 모집합니다.
                                        모금된 금액은 프로젝트 종료 후 시설 개선에 안전하게 사용되며,
                                        여러분의 참여가 우리 마을을 더 쾌적하게 만듭니다.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="funding-support-footer">
                        <p className="funding-support-subtitle">{item.subTitle}</p>
                    </div>

                </div>



            </div>


        </div>
    )
}

export default FundingDetail;