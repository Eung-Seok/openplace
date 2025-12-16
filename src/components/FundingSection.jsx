
import { useEffect, useState } from "react";
import FundingBox from "../fundingpage/component/FundingBox";
import "./FundingSection.css";

function FundingSection() {
    const [fundingList, setFundingList] = useState([]);

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
                <p>시민 참여로 변화가 시작되는 프로젝트</p>
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
