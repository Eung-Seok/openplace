import { useState } from "react";
import { useNavigate } from "react-router";
import "./MainSearch.css";

function MainSearch() {
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (!keyword.trim()) return; // 빈 값 방지
        navigate(`/search?query=${encodeURIComponent(keyword)}`);
    };

    return (
        <div className="main-search">
            <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="검색어를 입력해 주세요"
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSearch();
                    }
                }}
            />
            <button className="main-search-button" type="button" onClick={handleSearch}>
                Search
            </button>
        </div>
    );
}

export default MainSearch;
