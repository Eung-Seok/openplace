import React, { useState, useEffect } from "react";
import "../Funding.css";
import { IoMenu } from "react-icons/io5";
// import FundingBox from "./component/FundingBox.js"
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import FundingAmountPlus from "../FundingAmountPlus.jsx";
import './FundingDetail1.css'

function FundingDetail1({data}) {

    const location = useLocation();
    const id = data.id 
    const [liked, setLiked] = useState(false);
    const [count, setCount] = useState(data.hearts || 0);


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

            {/* 후원창 이미지카드 */}
            <div className="funding-container-support">

                <div className="funding-support-explain">
                    <h2>{data.title}</h2>
                    <p className="funding-icon">
                        <FaMapMarkerAlt className="funding-map-icon" />
                        <span className="funding-map">&nbsp;{data.map}</span>
                    </p>

                    <div className="funding-support-header">
                        <img src={data.imgPath} alt={data.title} className="funding-support-img" />

                        <div className="funding-explan-text">
                            <div className="funding-p-row2">
                                <p className="funding-support-normal-text">후원자</p>
                                <p className="funding-support-normal-text">좋아요</p>
                            </div>
                            <div className="funding-p-row">
                                <p className="funding-support-su">{data.bankers || 0}</p>
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
                                        style={{
                                            cursor: "pointer",
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
                                        data.currentAmount
                                            ? data.currentAmount / 10000
                                            : Math.floor(data.goalAmount * data.rate / 100 / 10000)
                                    }
                                /> <span>만원</span>
                            </p>

                            <p className="funding-support-amount">
                                목표금액: {(data.goalAmount / 10000).toLocaleString()} 만원
                            </p>

                            <div className="funding-support-gauge-container">
                                <div className="funding-support-top">
                                    <span className="funding-support-current">{data.rate}%</span>
                                    <span className="funding-support-left">남은기간: {data.timeLeft}일</span>
                                </div>
                                <div className="funding-support-bar">
                                    <span style={{ width: `${data.rate}%` }}></span>
                                </div>

                                <div className="funding-support-button">
                                    <Link to={"/funding/support/" + id}>
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
                        <p className="funding-support-subtitle">{data.subTitle}</p>
                    </div>

                </div>



            </div>


        </div>
    )
}

export default FundingDetail1;