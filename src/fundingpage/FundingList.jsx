import React from "react";
import "./Funding.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

function FundingList() {
    const fundingData = [
        {
            id: 1,
            title: "놀이터 리뉴얼 프로젝트",
            map: "천안 불당동",
            subTitle: "천안 불당동 숲놀이터와 유아숲체험장을 더 안전하고 쾌적한 공간으로 정비합니다. 기존 노후 시설을 개선해 아이들이 안심하고 뛰어놀 수 있는 환경을 만듭니다.",
            rate: 64,
            goalAmount: 8000000,
            timeLeft: 21,
            imgPath: "/images/fundingpage/funding1.jpg"
        },
        {
            id: 2,
            title: "자전거 도로 야간 조명 설치",
            map: "천안 하천권",
            subTitle: "야간 이용이 많은 천안 자전거 도로에 밝은 조명을 설치해 안전한 라이딩 환경을 제공합니다. 천안천·원성천·삼룡천 등 주요 하천길과 성환천 억새길, 입장 포도길 등 테마 코스를 중심으로 개선을 진행합니다.",
            rate: 74,
            goalAmount: 15000000,
            timeLeft: 18,
            imgPath: "/images/fundingpage/funding2.jpg"
        },
        {
            id: 3,
            title: "공원 벤치 교체 프로젝트",
            map: "천안 삼거리공원",
            subTitle: "천안 삼거리공원의 노후된 벤치와 테이블을 새롭게 교체해 편안한 휴식 공간을 만듭니다. 가족·친구·연인과 함께 야외에서 여유를 즐기기 좋은 공원 환경으로 정비합니다.",
            rate: 38,
            goalAmount: 5000000,
            timeLeft: 25,
            imgPath: "/images/fundingpage/funding3.jpg"
        },
        {
            id: 4,
            title: "주민 쉼터 조명 개선 프로젝트",
            map: "천안 두정동 쉼터",
            subTitle: "천안 동네 쉼터의 어두운 조명을 밝게 교체해 밤에도 안심하고 이용할 수 있는 휴식 환경을 마련합니다. 야간 산책과 주민 휴식을 더 안전하고 편안하게 만드는 조명 개선 사업입니다.",
            rate: 52,
            goalAmount: 4500000,
            timeLeft: 20,
            imgPath: "/images/fundingpage/funding4.jpg"
        },
        {
            id: 5,
            title: "도시 화단 정비 및 식재 프로젝트",
            map: "천안 불당동 도심화단",
            subTitle: "천안 도심 곳곳의 방치된 화단을 정비하고 계절감을 살린 식재를 더해 도시 미관을 개선합니다. 시민들이 걷기만 해도 기분 좋아지는 쾌적한 거리 환경을 조성합니다.",
            rate: 20,
            goalAmount: 3500000,
            timeLeft: 22,
            imgPath: "/images/fundingpage/funding5.jpg"
        },
        {
            id: 6,
            title: "초등학교 안전 울타리 설치",
            map: "천안 쌍용초등학교",
            subTitle: "천안 초등학교 주변의 노후·부족한 울타리를 보완해 등하굣길 안전을 강화합니다. 차도와 인도의 경계가 불분명한 구역을 개선해 어린이들의 보행 위험을 줄입니다.",
            rate: 87,
            goalAmount: 12000000,
            timeLeft: 16,
            imgPath: "/images/fundingpage/funding6.jpg"
        },
        {
            id: 7,
            title: "스쿨존 횡단보도 LED 안전표시 설치",
            map: "천안 성정초등학교",
            subTitle: "천안 스쿨존 횡단보도에 LED 안전표시를 설치해 운전자가 멀리서도 잘 보도록 시인성을 높입니다. 야간·우천 시에도 어린이의 보행 안전을 강화하는 교통 환경 개선 작업입니다.",
            rate: 46,
            goalAmount: 9000000,
            timeLeft: 19,
            imgPath: "/images/fundingpage/funding7.jpg"
        },
        {
            id: 8,
            title: "작은 도서관 환경 개선 프로젝트",
            map: "천안 신부동 작은도서관",
            subTitle: "천안 지역 작은 도서관의 노후 시설을 정비해 더 편안하고 쾌적한 독서 공간으로 리뉴얼합니다. 채광·환기·열람 환경을 개선해 아이들과 주민들이 머물기 좋은 지역 문화 공간을 만듭니다.",
            rate: 12,
            goalAmount: 7000000,
            timeLeft: 24,
            imgPath: "/images/fundingpage/funding8.jpg"
        },
        {
            id: 9,
            title: "노후 체육시설 보수 프로젝트",
            map: "천안 종합운동장 공원",
            subTitle: "천안 시민들이 자주 이용하는 공원·운동장의 노후 체육시설을 보수해 안전한 운동 환경을 마련합니다. 파손·미끄럼 구역을 개선해 사고 위험을 줄이고 이용 편의성을 높입니다.",
            rate: 58,
            goalAmount: 10000000,
            timeLeft: 17,
            imgPath: "/images/fundingpage/funding9.jpg"
        },
        // {
        //     id: 10,
        //     title: "공공 시설물 CCTV 개선 프로젝트",
        //     map: "천안 서북구 전역",
        //     subTitle: "천안 공공시설의 노후 CCTV를 고화질 장비로 교체해 범죄 예방과 안전 모니터링을 강화합니다. 사각지대를 줄이고 실시간 대응성을 높여 주민들이 더 안심할 수 있는 생활 환경을 만듭니다.",
        //     rate: 100,
        //     goalAmount: 25000000,
        //     timeLeft: 30,
        //     imgPath: "/images/fundingpage/funding10.jpg"
        // },
        // {
        //     id: 11,
        //     title: "천안 공공주차장 개선 프로젝트",
        //     map: "천안 신부동 공영주차장",
        //     subTitle: "주차난이 심한 천안 지역의 공공주차 환경을 개선해 시민들의 이동 편의를 높입니다. 노후화된 시설을 정비하고 부족한 주차 공간을 확충해 안전하고 체계적인 주차 시스템을 마련합니다. 더 쾌적한 도시 교통 환경을 위해 시민들이 편하게 이용할 수 있는 공공주차장을 조성합니다.",
        //     rate: 77,
        //     goalAmount: 18000000,
        //     timeLeft: 26,
        //     imgPath: "/images/fundingpage/funding11.jpg"
        // }

    ];

    const getCurrentAmount = (item) => Math.floor(item.goalAmount * item.rate / 1000000);
    const getGoalAmount = (item) => Math.floor(item.goalAmount / 10000);

    return (
        <div className="bg-color">
            <nav className="menu">
                <div className="left"><IoMenu className="menu-icon" /></div>
                <a href="/all-list">전체목록</a>
                <a href="/my-fund">나의 펀딩</a>
                <a href="/categories">카테고리</a>
                {/* <a href="/popular">인기순</a> */}
                <a href="/funding">후원하기</a>
                <a href="/register">등록하기</a>
            </nav>

            <section className="filter-container">
                <div className="filter">
                    <span className="explan">공공시설 개선 현황</span>
                    <select className="choose">
                        <option selected>전체 카테고리</option>
                        <option>생활·편의</option>
                        <option>문화·교육</option>
                        <option>안전·환경</option>
                        <option>체육·여가</option>
                        <option>교통시설</option>
                    </select>
                    <select className="choose">
                        <option selected>정렬 기준</option>
                        <option>인기순</option>
                        <option>최신순</option>
                        <option>마감 임박</option>
                        <option>달성률 높은순</option>
                        <option>참여 많은순</option>
                    </select>
                </div>

            </section>

            <section className="funding-container">
                <hr />
                <div className="funding-grid">
                    {fundingData.map((item) => (
                        <div
                            key={item.id}
                            className="funding-card"
                            onClick={() => (window.location.href = `/funding/${item.id}`)}
                        >
                            <img src={item.imgPath} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p className="icon"><FaMapMarkerAlt className="map-icon" /><span className="map">&nbsp;{item.map}</span></p>
                            <h4 className="sub-title">{item.subTitle}</h4>

                            <div className="gauge">
                                <span className="current-gauge">모금률 {item.rate}%</span>
                                <span className="max-gauge">100%</span>
                                <div className="bar">
                                    <span style={{ width: `${item.rate}%` }}></span>
                                </div>

                                <div className="rate-container">
                                    <div className="rate-column">
                                        <span className="rate-text">현재금액</span>
                                        <span className="rate-amount">{getCurrentAmount(item).toLocaleString()}만원</span>
                                    </div>
                                    <div className="rate-column">
                                        <span className="rate-text">목표금액</span>
                                        <span className="rate-amount">{getGoalAmount(item).toLocaleString()}만원</span>
                                    </div>
                                    <div className="rate-column">
                                        <span className="rate-text">남은기간</span>
                                        <span className="rate-amount">{item.timeLeft}일</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
                <div className="plus">
                    <div className="more-actions">
                        <a href="/funding/more" className="more-btn">
                            더보기
                        </a>
                    </div>
                    <p className="comment">여러분 동네, 개선이 필요한 공공시설이 있나요?</p>
                    <div className="register-actions">
                        <a href="/funding/create" className="create-btn">
                            + 펀딩 등록하기
                        </a>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default FundingList;