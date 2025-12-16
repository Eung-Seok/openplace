import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function FundingBox({ item, getCurrentAmount, getGoalAmount }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/funding/support", { state: { item } });
    };

    return (
        <div
            key={item.id}
            className="funding-funding-card"
            onClick={handleClick}
        >
            <img src={item.imgPath} alt={item.title} className="funding-detail-img" />
            <h3 className="funding-title">{item.title}</h3>
            <p className="funding-icon">
                <FaMapMarkerAlt className="funding-map-icon" />
                <span className="funding-map">&nbsp;{item.map}</span>
            </p>
            <h4 className="funding-sub-title">{item.subTitle}</h4>

            <div className="funding-gauge">
                <div className="funding-gauge-top">
                    <span className="funding-current-gauge">모금률 {item.rate}%</span>
                    <span className="funding-max-gauge">100%</span>
                </div>
                <div className="funding-bar">
                    <span style={{ width: `${item.rate}%` }}></span>
                </div>

                <div className="funding-rate-container">
                    <div className="funding-rate-column">
                        <span className="funding-rate-text">현재금액</span>
                        <span className="funding-rate-amount">{getCurrentAmount(item).toLocaleString()}만원</span>
                    </div>
                    <div className="funding-rate-column">
                        <span className="funding-rate-text">목표금액</span>
                        <span className="funding-rate-amount">{getGoalAmount(item).toLocaleString()}만원</span>
                    </div>
                    <div className="funding-rate-column">
                        <span className="funding-rate-text">남은기간</span>
                        <span className="funding-rate-amount">{item.timeLeft}일</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FundingBox;
