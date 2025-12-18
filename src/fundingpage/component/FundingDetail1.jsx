import React, { useState, useEffect } from "react";
import "../Funding.css";
import { IoMenu } from "react-icons/io5";
// import FundingBox from "./component/FundingBox.js"
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import FundingAmountPlus from "../FundingAmountPlus.jsx";
import './FundingDetail1.css'

function FundingDetail1({ data }) {

    const location = useLocation();
    const id = data.id
    const [liked, setLiked] = useState(false);
    const [count, setCount] = useState(data.hearts || 0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [donateOpen, setDonateOpen] = useState(false);
    const [donateAmount, setDonateAmount] = useState("");
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("계정정보"))
    );


    const handleClick = () => {
        if (liked) {
            setCount(count - 1);
        } else {
            setCount(count + 1);
        }
        setLiked(!liked);
    };

    const handleDonate = () => {
        const amount = Number(donateAmount);

        if (!amount || amount <= 0) {
            alert("기부 금액을 선택 또는 입력하세요.");
            return;
        }

        if ((user.balance || 0) < amount) {
            alert("잔고가 부족합니다.");
            return;
        }

        const updatedUser = {
            ...user,
            balance: (user.balance || 0) - amount,
            totalDonate: (user.totalDonate || 0) + amount,
        };

        let list = JSON.parse(localStorage.getItem("계정목록")) || [];
        const index = list.findIndex(item => item.id === user.id);

        if (index !== -1) {
            list[index] = updatedUser;
            localStorage.setItem("계정목록", JSON.stringify(list));
        }

        localStorage.setItem("계정정보", JSON.stringify(updatedUser));
        setUser(updatedUser);

        alert(`${amount.toLocaleString()}원 후원 완료!`);

        setDonateOpen(false);
        setDonateAmount("");
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
                                    <button
                                        className="donate-btn"
                                        onClick={() => setDonateOpen(true)}
                                    >
                                        후원하기
                                    </button>

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
                        <img src="/images/fundingpage/fundingSupport.png" alt="펀딩 이미지" />
                    </div>

                </div>



            </div>
            {donateOpen && (
                <div
                    className="donate-overlay"
                    onClick={() => setDonateOpen(false)}
                >
                    <div
                        className="donate-modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3>후원 금액 선택</h3>

                        <div className="donate-quick">
                            {[10000, 50000, 100000].map(price => (
                                <button
                                    key={price}
                                    onClick={() => setDonateAmount(price)}
                                >
                                    {price.toLocaleString()}원
                                </button>
                            ))}
                        </div>

                        <input
                            type="text"
                            placeholder="직접 입력"
                            value={
                                donateAmount
                                // 쉼표 추가
                                    ? Number(donateAmount).toLocaleString()
                                    : ""
                            }
                            onChange={(e) => {
                                // 숫자만 남기기
                                const onlyNumber = e.target.value.replace(/[^0-9]/g, "");
                                setDonateAmount(onlyNumber);
                            }}
                        />


                        <button
                            className="donate-confirm-btn"
                            onClick={handleDonate}
                        >
                            후원하기
                        </button>

                        <button
                            className="donate-cancel-btn"
                            onClick={() => {
                                setDonateOpen(false);
                                setDonateAmount("");
                            }}

                        >
                            취소
                        </button>
                    </div>
                </div>
            )
            }



        </div >
    )
}

export default FundingDetail1;