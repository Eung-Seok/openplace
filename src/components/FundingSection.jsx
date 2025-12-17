import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./FundingSection.css";
import { FaBullseye, FaChartPie } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";


function FundingSection() {
    const [fundingList, setFundingList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedFunding =
            JSON.parse(localStorage.getItem("펀딩데이터")) || [];

        // 메인 홈 미리보기 8개
        setFundingList(storedFunding.slice(0, 8));
    }, []);

    const getCurrentAmount = (item) =>
        Math.floor(item.goalAmount * (item.rate / 100));

    return (
        <section className="funding-section">
            <div className="funding-section-header">
                <h2 className="funding-section-title">
                    진행 중인 펀딩 프로젝트
                </h2>
                <button
                    className="funding-section-more-btn"
                    onClick={() => navigate("/funding")}
                    aria-label="펀딩 더보기"
                >
                    <FaChevronRight />
                </button>
            </div>

            <div className="funding-section-grid">
                {fundingList.map(item => (
                    <div
                        key={item.id}
                        className="funding-section-card"
                        onClick={() => navigate(`/funding/${item.id}`)}
                    >
                        {/* 이미지 */}
                        <div className="funding-card-image">
                            <img src={item.imgPath} alt={item.title} />
                        </div>

                        {/* 카드 바디 */}
                        <div className="funding-card-body">
                            {/* 상단 메타 */}
                            <div className="funding-card-meta">
                                <span className="funding-card-category">{item.category}</span>
                                <span className="funding-card-region">{item.map}</span>
                            </div>
                            {/* 제목 */}
                            <h3 className="funding-card-title">{item.title}</h3>

                            {/* 정보 리스트 */}
                            <ul className="funding-card-info">
                                <li>
                                    <FaBullseye className="funding-card-icon" />
                                    목표금액: {item.goalAmount.toLocaleString()}원
                                </li>
                                <li>
                                    <FaChartPie className="funding-card-icon" />
                                    달성률: {item.rate}%
                                </li>
                                <div className="funding-card-progress">
                                    <div className="funding-card-progress-track">
                                        <div
                                            className="funding-card-progress-bar"
                                            style={{ width: `${item.rate}%` }}
                                        />
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FundingSection;
