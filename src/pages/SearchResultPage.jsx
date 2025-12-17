import { useLocation, useNavigate } from "react-router";
import "./SearchResultPage.css";

function SearchResultPage() {
    const navigate = useNavigate();
    const { search } = useLocation();
    const query = new URLSearchParams(search).get("query");

    // ========================
    // 데이터 로드
    // ========================
    const totalData = JSON.parse(localStorage.getItem("통합데이터")) || [];
    const fundingData = JSON.parse(localStorage.getItem("펀딩데이터")) || [];

    // ========================
    // 커뮤니티 검색
    // ========================
    const searchedData = totalData.filter(item =>
        item.title?.includes(query)
    );

    const reportResults = searchedData.filter(
        item => item.category === "지역 제보"
    );

    const freeBoardResults = searchedData.filter(
        item => item.category === "자유게시판"
    );

    const projectResults = searchedData.filter(
        item => item.category === "프로젝트 후기"
    );

    // ========================
    // 펀딩 검색
    // ========================
    const fundingResults = fundingData.filter(item =>
        item.title?.includes(query) ||
        item.subtitle?.includes(query) ||
        item.map?.includes(query)
    );

    return (
        <div className="search-page">
            <h2 className="search-title">🔍 “{query}” 검색 결과</h2>

            {/* ================= 지역 제보 ================= */}
            <section className="search-section">
                <h3 className="search-section-title">지역 제보</h3>

                {reportResults.length === 0 && (
                    <p className="search-empty-text">관련 제보가 없습니다.</p>
                )}

                <div className="search-result-list">
                    {reportResults.map(item => (
                        <div
                            className="search-result-card"
                            key={item.id}
                            onClick={() => {
                                navigate(`/community/${item.id}`);
                                window.scrollTo(0, 0);
                            }}
                            style={{ cursor: "pointer" }}
                        >
                            <div className="search-result-meta">
                                <span>{item.category}</span>
                            </div>

                            <div className="search-result-title">
                                {item.title}
                            </div>

                            <div className="search-result-content">
                                {item.content}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= 자유게시판 ================= */}
            <section className="search-section">
                <h3 className="search-section-title">자유게시판</h3>

                {freeBoardResults.length === 0 && (
                    <p className="search-empty-text">관련 게시글이 없습니다.</p>
                )}

                <div className="search-result-list">
                    {freeBoardResults.map(item => (
                        <div
                            className="search-result-card"
                            key={item.id}
                            onClick={() => {
                                navigate(`/community/${item.id}`)
                                window.scrollTo(0, 0);
                            }}
                            style={{ cursor: "pointer" }}
                        >
                            <div className="search-result-meta">
                                <span>{item.category}</span>
                            </div>

                            <div className="search-result-title">
                                {item.title}
                            </div>

                            <div className="search-result-content">
                                {item.content}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= 프로젝트 후기 ================= */}
            <section className="search-section">
                <h3 className="search-section-title">프로젝트 후기</h3>

                {projectResults.length === 0 && (
                    <p className="search-empty-text">관련 후기가 없습니다.</p>
                )}

                <div className="search-result-list">
                    {projectResults.map(item => (
                        <div
                            className="search-result-card"
                            key={item.id}
                            onClick={() => {
                                navigate(`/community/${item.id}`);
                                window.scrollTo(0, 0);
                            }}
                            style={{ cursor: "pointer" }}
                        >
                            <div className="search-result-meta">
                                <span>{item.category}</span>
                            </div>

                            <div className="search-result-title">
                                {item.title}
                            </div>

                            <div className="search-result-content">
                                {item.content}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= 펀딩 ================= */}
            <section className="search-section">
                <h3 className="search-section-title">펀딩</h3>

                {fundingResults.length === 0 && (
                    <p className="search-empty-text">관련 펀딩이 없습니다.</p>
                )}

                <div className="search-result-list">
                    {fundingResults.map(item => (
                        <div
                            className="search-result-card search-funding-card"
                            key={item.id}
                            onClick={() => {
                                navigate(`/funding/detail/${item.id}`);
                                window.scrollTo(0, 0);
                            }}
                        >
                            <img
                                src={item.imgPath}
                                alt={item.title}
                                className="search-funding-image"
                            />

                            <div className="search-result-meta">
                                <span>{item.category}</span>
                                <span>{item.map}</span>
                            </div>

                            <div className="search-result-title">
                                {item.title}
                            </div>

                            <div className="search-result-content">
                                {item.subtitle}
                            </div>

                            <div className="search-funding-info">
                                <span>🎯 목표금액: {item.goalAmount.toLocaleString()}원</span>
                                <span>📊 달성률: {item.rate}%</span>
                                <span>⏰ 남은기간: {item.timeLeft}일</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default SearchResultPage;
