
import { useEffect, useState } from "react";
import FundingBox from "../fundingpage/component/FundingBox";
import "./FundingSection.css";
import { useNavigate } from "react-router";

function FundingSection() {
    const [fundingList, setFundingList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const stored = JSON.parse(
            localStorage.getItem("펀딩데이터")
        ) || [];

        setFundingList(stored);
    }, []);

    const getCurrentAmount = (item) => {
        return Math.floor(item.goalAmount * (item.rate / 100));
    };

    const getGoalAmount = (item) => item.goalAmount;

    return (
        <section className="funding-section">
            <div className="funding-section-header">
                <h2>Funding Projects</h2>
                <button
                    className="funding-section-more-btn"
                    onClick={() => navigate("/funding")}
                >
                    더보기 →
                </button>

            </div>

            <div className="funding-section-grid">
                {fundingList.slice(0, 6).map(item => (
                    <FundingBox
                        key={item.id}
                        item={item}
                        getCurrentAmount={getCurrentAmount}
                        getGoalAmount={getGoalAmount}
                    />
                ))}
            </div>
        </section>
    );
}

export default FundingSection;
