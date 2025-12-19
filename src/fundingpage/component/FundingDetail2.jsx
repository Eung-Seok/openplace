import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./FundingDetail2.css";

function FundingDetail2({ data }) {

    // 안전 장치
    if (!data || data.projectStatus === "PENDING") {
        return null;
    }

    // ✅ 단계 정의 (고정)
    const steps = [
        { step: 1, title: "모금 완료" },
        { step: 2, title: "지자체 승인" },
        { step: 3, title: "시공사 선정" },
        { step: 4, title: "공사 진행" },
        { step: 5, title: "완료 및 공개" }
    ];

    const currentStep = data.progressStep || 1;
    const logs = Array.isArray(data.progressLogs) ? data.progressLogs : [];

    return (
        <div className="funding-detail2-bg">

            {/* 제목 & 위치 */}
            <h2 className="funding-detail2-title">{data.title}</h2>

            <p className="funding-detail2-location">
                <FaMapMarkerAlt /> {data.map}
            </p>

            {/* 메인 영역 */}
            <div className="funding-detail2-main">

                {/* 왼쪽 이미지 */}
                <img
                    src={data.imgPath}
                    alt={data.title}
                    className="funding-detail2-img"
                />

                {/* 오른쪽 설명 */}
                <div className="funding-detail2-desc-box">

                    <h3 className="funding-detail2-desc-title">
                        프로젝트 내용
                    </h3>

                    <p className="funding-detail2-desc">
                        {data.description || data.subTitle}
                    </p>

                    {/* ===== 진행 단계 (로그 기반 매칭) ===== */}
                    <div className="funding-detail2-progress-horizontal">
                        {steps.map(step => {
                            // ⭐ 해당 step의 로그 찾기
                            const log = logs.find(l => l.step === step.step);

                            return (
                                <div
                                    key={step.step}
                                    className={`progress-h-step 
                                        ${step.step <= currentStep ? "active" : ""}`}
                                >
                                    <div className="progress-h-circle">
                                        {step.step}
                                    </div>

                                    <p className="progress-h-title">
                                        {/* 로그에 title 있으면 우선 사용 */}
                                        {log?.title || step.title}
                                    </p>

                                    <span className="progress-h-date">
                                        {log?.date || "예정"}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>

            {/* ===== 단계별 진행 로그 카드 ===== */}
            {logs.length > 0 && (
                <div className="funding-detail2-log-section">
                    <h3 className="funding-detail2-log-title">
                        프로젝트 진행 상세
                    </h3>

                    <div className="funding-detail2-log-grid">
                        {logs.map(log => (
                            <div
                                key={log.step}
                                className={`funding-detail2-log-card
                                    ${log.step > currentStep ? "pending" : ""}`}
                            >
                                <span
                                    className={`log-step-badge
                                        ${log.step <= currentStep ? "active" : ""}`}
                                >
                                    {log.step}
                                </span>

                                <strong className="log-title">
                                    {log.title}
                                </strong>

                                <p className="log-desc">
                                    {log.desc}
                                </p>

                                <ul className="log-meta">
                                    {log.department && (
                                        <li><b>담당 부서</b> : {log.department}</li>
                                    )}
                                    {log.manager && (
                                        <li><b>담당자</b> : {log.manager}</li>
                                    )}
                                    {log.contractor && (
                                        <li><b>시공사</b> : {log.contractor}</li>
                                    )}
                                </ul>

                                <span className="log-date">
                                    {log.date || "예정"}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default FundingDetail2;
