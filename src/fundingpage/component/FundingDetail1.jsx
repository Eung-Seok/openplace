import React, { useState, useEffect } from "react";
import "../Funding.css";
import { IoMenu } from "react-icons/io5";
// import FundingBox from "./component/FundingBox.js"
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import FundingAmountPlus from "../FundingAmountPlus.jsx";
import './FundingDetail1.css'
import KakaoMap from "./KakaoMap.jsx";


function FundingDetail1({ data }) {

    const location = useLocation();
    const id = data.id
    const [liked, setLiked] = useState(false);
    const [count, setCount] = useState(data.hearts || 0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [donateOpen, setDonateOpen] = useState(false);
    const [donateAmount, setDonateAmount] = useState("");

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("계정정보")));
    const isLogin = localStorage.getItem("로그인현황") === "true";


    // 아이디어 후원자 댓글 메뉴바
    const [activeTab, setActiveTab] = useState("idea");

    const [alertMsg, setAlertMsg] = useState("");

    const handleClick = () => {
        if (liked) {
            setCount(count - 1);
        } else {
            setCount(count + 1);
        }
        setLiked(!liked);
    };

    const handleSupportClick = () => {
        if (!isLogin || !user) {
            setAlertMsg("로그인 후 후원하실 수 있습니다.");
            return;
        }
        setDonateOpen(true);
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
        }
        localStorage.setItem("계정목록", JSON.stringify(list));
        localStorage.setItem("계정정보", JSON.stringify(updatedUser));
        setUser(updatedUser);

        alert(`${amount.toLocaleString()}원 후원 완료!`);

        setDonateOpen(false);
        setDonateAmount("");
    };


    // 지도 생성
    // useEffect(() => {
    //     if (activeTab === "idea") {
    //         window.kakao.maps.load(() => {
    //             const container = document.getElementById("kakao-map");
    //             if (!container) return;

    //             const options = {
    //                 center: new window.kakao.maps.LatLng(data.lat || 37.5665, data.lng || 126.9780),
    //                 level: 3
    //             };
    //             const map = new window.kakao.maps.Map(container, options);

    //             // 마커 표시
    //             const marker = new window.kakao.maps.Marker({
    //                 position: map.getCenter()
    //             });
    //             marker.setMap(map);
    //         });
    //     }
    // }, [activeTab, data.lat, data.lng]);
    useEffect(() => {
        if (activeTab !== "idea") return;
        if (!window.kakao || !window.kakao.maps) {
            console.log("카카오맵 SDK 준비 안됨");
            return;
        }

        const container = document.getElementById("kakao-map");
        if (!container) return;

        const options = {
            center: new window.kakao.maps.LatLng(data.lat || 37.5665, data.lng || 126.9780),
            level: 3
        };
        const map = new window.kakao.maps.Map(container, options);

        const marker = new window.kakao.maps.Marker({
            position: map.getCenter()
        });
        marker.setMap(map);

    }, [activeTab, data.lat, data.lng]);


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
                                        onClick={() => {
                                            if (isLogin && user) {
                                                // 로그인 되어 있으면 모달 열기
                                                setDonateOpen(true);
                                            } else {
                                                // 로그인 안 되어 있으면 알림
                                                handleSupportClick();
                                            }
                                        }}
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
                        <div className="funding-support-footer-sub">
                            <p className="funding-support-subtitle" style={{ marginBottom: '44px', fontSize: '33px' }}>
                                프로젝트 설명</p>
                            <p className="funding-support-subtitle">{data.subTitle}</p>
                        </div>
                        <img src="/images/fundingpage/fundingSupport.png" alt="펀딩 이미지" />
                    </div>
                    <div className="funding-line-wrapper">
                        <div className="funding-list-line">
                            {/* <div className="funding-list-inner">
                        <span>아이디어</span>
                        <span>관련 이미지</span>
                        <span>모금 상세</span>
                        <span>후원자</span>
                            <span>댓글</span>
                        </div> */}
                            <div className="funding-list-line2" style={{ marginBottom: '-10px' }}></div>
                            <div className="funding-list-inner">
                                <span
                                    className={activeTab === "idea" ? "active-tab" : ""}
                                    onClick={() => setActiveTab("idea")}
                                >
                                    아이디어
                                </span>
                                <span
                                    className={activeTab === "supporter" ? "active-tab" : ""}
                                    onClick={() => setActiveTab("supporter")}
                                >
                                    후원자
                                </span>
                                <span
                                    className={activeTab === "comment" ? "active-tab" : ""}
                                    onClick={() => setActiveTab("comment")}
                                >
                                    댓글
                                </span>
                                <span className="active-tab" style={{ marginLeft: 'auto', marginRight: '420px' }}>지도</span>
                            </div>
                        </div>
                        <div className="funding-tab-content">
                            {activeTab === "idea" && (
                                <div>
                                    <div className="funding-list-line2"></div>

                                    <div
                                        className="funding-tab-box"
                                        style={{
                                            display: "flex",
                                            gap: "20px",
                                            alignItems: "flex-start"
                                        }}
                                    >
                                        {/* 왼쪽 텍스트 영역 */}
                                        <div style={{ flex: 1 }}>
                                            <p className="funding-support-subtitle" style={{ fontSize: '40px' }}>
                                                프로젝트에 반영된 지역 제보 아이디어
                                            </p>
                                            <br></br>
                                            <p className="funding-support-subtitle">
                                                {data.idea}
                                            </p>
                                        </div>

                                        {/* 오른쪽 지도 */}
                                        <KakaoMap
                                            lat={data.lat || 37.5665}
                                            lng={data.lng || 126.9780}
                                            style={{ width: "500px", height: "400px", borderRadius: "12px", flexShrink: 0 }}
                                        />
                                    </div>
                                </div>
                            )}


                            {activeTab === "supporter" && (
                                <div>
                                    <div className="funding-list-line2"></div>
                                    <div className="funding-tab-box">

                                        <p className="funding-support-subtitle">{ }</p>
                                    </div>
                                </div>
                            )}

                            {activeTab === "comment" && (
                                <div>
                                    <div className="funding-list-line2"></div>
                                    <div className="funding-tab-box">

                                        <p className="funding-support-subtitle">{ }</p>
                                    </div>
                                </div>
                            )}

                        </div>

                    </div>

                    {/* <div className="funding-map-line">
                        <div className="funding-map-inner">
                        </div>
                    </div> */}

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
                        <p>선택한 프로젝트</p>
                        <div className="donate-modal-header">
                            <img src={data.imgPath} alt={data.title} style={{ width: '300px', marginBottom: '20px' }} />
                            <div style={{ marginBottom: '55px' }}>
                                <span className="donate-modal-header-title">{data.title}</span><br></br>
                                <FaMapMarkerAlt className="funding-map-icon" style={{ color: '#09947d' }} />
                                <span className="donate-modal-header-map">{data.map}</span><br></br>
                                <span className="donate-modal-header-subtitle">{data.subTitle}</span>
                            </div>
                        </div>
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

            {alertMsg && (
                <div className="alert-modal-bg">
                    <div className="alert-modal-box">
                        <p className="alert-modal-message">
                            {alertMsg}
                        </p>
                        <button
                            className="alert-modal-btn"
                            onClick={() => setAlertMsg("")}
                        >
                            확인
                        </button>
                    </div>
                </div >
            )}
        </div>

    );
}
export default FundingDetail1;