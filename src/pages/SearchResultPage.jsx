import { useLocation } from "react-router";
import "./SearchResultPage.css";

function SearchResultPage() {
    const { search } = useLocation();
    const query = new URLSearchParams(search).get("query");

    const totalData = JSON.parse(localStorage.getItem("통합데이터")) || [];

    const searchedData = totalData.filter(item =>
        item.title?.includes(query)
    );

    // ⭐ 반드시 선언되어야 함
    const reportResults = searchedData.filter(
        item => item.category === "지역제보"
    );

    const freeBoardResults = searchedData.filter(
        item => item.category === "자유게시판"
    );
    const projectResults = searchedData.filter(
        item => item.category === "프로젝트 후기"
    );

    return (
        <div className="search-page">
            <h2 className="search-title" >🔍 “{query}” 검색 결과</h2>

            {/* 지역 제보 */}
            <section className="search-section">
                <h3 className="search-section-title">지역 제보</h3>

                {reportResults.length === 0 && (
                    <p className="search-empty-text">관련 제보가 없습니다.</p>
                )}

                <div className="search-result-list">
                    {reportResults.map(item => (
                        <div className="search-result-card" key={item.id}>
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

            {/* 자유게시판 */}
            <section className="search-section">
                <h3 className="search-section-title">자유게시판</h3>

                {freeBoardResults.length === 0 && (
                    <p className="search-empty-text">관련 제보가 없습니다.</p>
                )}

                <div className="search-result-list">
                    {freeBoardResults.map(item => (
                        <div className="search-result-card" key={item.id}>
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
            {/* 프로젝트 후기 */}
            <section className="search-section">
                <h3 className="search-section-title">프로젝트 후기</h3>

                {projectResults.length === 0 && (
                    <p className="search-empty-text">관련 제보가 없습니다.</p>
                )}

                <div className="search-result-list">
                    {projectResults.map(item => (
                        <div className="search-result-card" key={item.id}>
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
        </div>
    );
}

export default SearchResultPage;
