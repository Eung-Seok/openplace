import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./FundingDetail2.css";

function FundingDetail2({ data }) {

    const steps = [
        { step: 1, title: "모금 완료", date: "2025.01.10" },
        { step: 2, title: "지자체 승인", date: "2025.01.18" },
        { step: 3, title: "시공사 선정" },
        { step: 4, title: "공사 진행" },
        { step: 5, title: "완료 및 공개" }
    ];

    const currentStep = data.progressStep || 2;

    // ===== 모금 관련 데이터 =====
    const goalAmount = data.goalAmount || 5000000;
    const currentAmount = data.currentAmount || goalAmount;
    const rate = Math.min(
        Math.floor((currentAmount / goalAmount) * 100),
        100
    );

    return (
        <div className="funding-detail2-bg">

            <h2 className="funding-detail2-title">{data.title}</h2>

            <p className="funding-detail2-location">
                <FaMapMarkerAlt /> {data.map}
            </p>

            <div className="funding-detail2-main">

                {/* 왼쪽 이미지 */}
                <img
                    src={data.imgPath}
                    alt={data.title}
                    className="funding-detail2-img"
                />

                {/* 오른쪽 설명 영역 */}
                <div className="funding-detail2-desc-box">
                    {/* 프로젝트 설명 */}
                    <h3 className="funding-detail2-desc-title">
                        프로젝트 내용
                    </h3>

                    <p className="funding-detail2-desc">
                        {data.description ||
                            "본 프로젝트는 지역 주민과 아이들의 안전을 위해 노후된 공공시설을 개선하는 사업입니다. 시민의 참여로 시작된 이 프로젝트는 행정 승인 및 시공 과정을 투명하게 공개하며 진행됩니다."}
                    </p>

                    {/* ===== 모금 금액 요약 & 게이지 ===== */}
                    <div className="funding-amount-box">

                        <div className="funding-amount-summary">
                            <span>
                                목표금액 <strong>{(goalAmount / 10000).toLocaleString()}만원</strong>
                            </span>
                        </div>
                        <div className="funding-amount-summary">
                            <span>
                                현재 모금액 <strong>{(currentAmount / 10000).toLocaleString()}만원</strong>
                            </span>
                        </div>

                    </div>

                    {rate >= 100 && (

                        <div className="funding-success-box">
                            목표 금액 100% 달성

                            <div className="funding-progress-bar">
                                <div
                                    className="funding-progress-fill"
                                    style={{ width: `${rate}%` }}
                                />
                            </div>
                        </div>
                    )}

                    {/* 진행 단계 */}
                    <div className="funding-detail2-progress-horizontal">
                        {steps.map(item => (
                            <div
                                key={item.step}
                                className={`progress-h-step 
                                    ${item.step <= currentStep ? "active" : ""}`}
                            >
                                <div className="progress-h-circle">
                                    {item.step}
                                </div>

                                <p className="progress-h-title">{item.title}</p>

                                {item.date && (
                                    <span className="progress-h-date">
                                        {item.date}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* ===== 단계별 진행 로그 ===== */}
            <div className="funding-detail2-log-section">
                <h3 className="funding-detail2-log-title">
                    프로젝트 진행 상세
                </h3>

                <div className="funding-detail2-log-grid">

                    <div className="funding-detail2-log-card">
                        <span className="log-step-badge active">1</span>
                        <strong className="log-title">모금 완료</strong>
                        <p className="log-desc">
                            시민 참여로 목표 금액 100%를 달성하였습니다.
                        </p>
                        <ul className="log-meta">
                            <li><b>담당 부서</b> : Open Place 운영팀</li>
                            <li><b>담당자</b> : 김민정 매니저</li>
                        </ul>
                        <span className="log-date">2025.01.10</span>
                    </div>

                    <div className="funding-detail2-log-card">
                        <span className="log-step-badge active">2</span>
                        <strong className="log-title">지자체 승인 완료</strong>
                        <p className="log-desc">
                            관할 지자체의 행정 검토 및 사업 승인이 완료되었습니다.
                        </p>
                        <ul className="log-meta">
                            <li><b>담당 부서</b> : 천안시 도시환경과</li>
                            <li><b>담당자</b> : 이성훈 주무관</li>
                        </ul>
                        <span className="log-date">2025.01.18</span>
                    </div>
                    {/* 3단계 */}
                    <div className="funding-detail2-log-card pending">
                        <span className="log-step-badge">3</span>
                        <strong className="log-title">시공사 선정</strong>
                        <p className="log-desc"> 공개 입찰을 통해 시공사를 선정할 예정입니다. </p>
                        <ul className="log-meta">
                            <li><b>시공사</b> : 선정 예정</li>
                            <li><b>담당 부서</b> : 시설관리팀</li> </ul>
                        <span className="log-date">예정</span>
                    </div>
                    {/* 4단계 */}
                    <div className="funding-detail2-log-card pending">
                        <span className="log-step-badge">4</span>
                        <strong className="log-title">공사 진행</strong>
                        <p className="log-desc"> 현장 공사 및 중간 점검이 진행됩니다. </p>
                        <ul className="log-meta">
                            <li><b>시공사</b> : 미정</li>
                            <li><b>담당자</b> : 현장 관리자 배정 예정</li>
                        </ul> <span className="log-date">예정</span>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default FundingDetail2;