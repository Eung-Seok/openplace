import Card from "../communitypage/components/Card";
import "./CommunitySection.css";
import { useNavigate } from "react-router";
import { FaChevronRight } from "react-icons/fa";

function CommunitySection() {
    const navigate = useNavigate();

    const totalData =
        JSON.parse(localStorage.getItem("통합데이터")) || [];

    // 좋아요(likes) 기준 내림차순 정렬 후 상위 5개
    const topData = [...totalData]
        .sort((a, b) => (b.likes || 0) - (a.likes || 0))
        .slice(0, 5);

    return (
        <section className="community-section">
            <div className="community-section-inner">
                <div className="community-section-header">
                    <div className="funding-section-header-left">
                        <h2 className="community-section-title">
                            커뮤니티 공감 베스트
                        </h2>

                        <button
                            className="community-section-more-btn"
                            onClick={() => {
                                navigate("/community/main/1");
                                window.scrollTo(0, 0);
                            }}
                            aria-label="커뮤니티 더보기"
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                </div>

                <div className="community-section-list">
                    {topData.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CommunitySection;
