import React, { useState, useEffect } from "react";
import "./Funding.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import FundingBox from "./component/FundingBox.js";
import { useLocation, useNavigate, useParams } from "react-router";
import Button from "react-bootstrap/Button";
import ComboBox1 from "../communitypage/components/Combobox1.js";
import Pagination from "react-bootstrap/Pagination";

function FundingList() {
    const params = useParams();
    const funding = params.funding;
    const category = params.category;
    const page = params.page;

    const navigate = useNavigate();
    const nowpage = useLocation();

    const user = JSON.parse(localStorage.getItem("계정정보"));
    const isAdmin = user?.level === "관리자";

    /* ================= 알럿 ================= */
    const [alertMsg, setAlertMsg] = useState("");

    const [fundingData, setFundingData] = useState(
        JSON.parse(localStorage.getItem("펀딩데이터")) || []
    );
    const [usingData, setUsingData] = useState([]);
    const [boxSelected, setBoxSelected] = useState("최신순");
    const [keyword, setKeyword] = useState("");

    const currentPage = parseInt(page) || 1;

    let pageArr = nowpage.pathname.split("/");
    pageArr.shift();
    pageArr.pop();
    pageArr = pageArr.join("/");

    /* ================= 관리자 전용 등록 ================= */
    const handleCreateFunding = () => {
        if (!isAdmin) {
            setAlertMsg("관리자만 이용 가능합니다.");
            return;
        }
        navigate("/funding/create");
        window.scrollTo(0, 0);
    };

    /* ================= 검색 ================= */
    const handleSearch = () => {
        if (!keyword.trim()) return;
        navigate("/" + pageArr + "/search/" + keyword + "/1");
        window.scrollTo(0, 0);
    };

    /* ================= 데이터 필터 ================= */
    useEffect(() => {
        let sortedList =
            JSON.parse(localStorage.getItem("펀딩데이터")) || [];

        sortedList = sortedList.filter(item => {
            switch (funding) {
                case "main":
                    return true;
                case "fundraise":
                    if (item.rate >= 100) return false;
                    if (category === "main") return true;
                    return item.category ===
                        ({
                            dailylife: "생활",
                            culture: "문화",
                            safety: "안전",
                            environment: "환경",
                            sports: "체육",
                            traffic: "교통"
                        }[category]);
                case "process":
                    return item.rate === 100 && item.finish === false;
                case "finish":
                    return item.finish === true;
                default:
                    return true;
            }
        });

        if (boxSelected === "진행도순") {
            sortedList.sort((a, b) => (b.rate || 0) - (a.rate || 0));
        }

        setFundingData(sortedList);
    }, [boxSelected, funding, category]);

    /* ================= 페이지 슬라이싱 ================= */
    useEffect(() => {
        const startIndex = (currentPage - 1) * 9;
        const endIndex = startIndex + 9;
        setUsingData(fundingData.slice(startIndex, endIndex));
    }, [fundingData, currentPage]);

    /* ================= 페이지네이션 ================= */
    const items = [];
    for (let number = 1; number <= fundingData.length / 9 + 1; number++) {
        items.push(
            <Pagination.Item
                key={number}
                active={number === currentPage}
                onClick={() => {
                    navigate("/" + pageArr + "/" + number);
                    window.scrollTo(0, 0);
                }}
            >
                {number}
            </Pagination.Item>
        );
    }

    return (
        <div className="funding-bg-color body">
            <section className="funding-filter-container">
                <div className="funding-tabs">
                    <button className={`tab ${funding === "main" ? "active" : ""}`} onClick={() => navigate("/funding/main/1")}>전체 펀딩</button>
                    <button className={`tab ${funding === "fundraise" ? "active" : ""}`} onClick={() => navigate("/funding/fundraise/main/1")}>모금중인 펀딩</button>
                    <button className={`tab ${funding === "process" ? "active" : ""}`} onClick={() => navigate("/funding/process/1")}>작업 중인 펀딩</button>
                    <button className={`tab ${funding === "finish" ? "active" : ""}`} onClick={() => navigate("/funding/finish/1")}>완료된 펀딩</button>
                </div>

                <div className="funding-filter">
                    <ComboBox1 selected={boxSelected} onSelect={setBoxSelected} />

                    {/* ✅ 비활성화 ❌ / 클릭으로 제어 */}
                    <button
                        type="button"
                        className="funding-btn-success"
                        onClick={handleCreateFunding}
                    >
                        등록하기
                    </button>
                </div>
            </section>

            <section className="funding-funding-container">
                <div className="funding-funding-grid">
                    {usingData.map(item => (
                        <FundingBox key={item.id} item={item} />
                    ))}
                </div>

                <div className="community-search">
                    <input
                        type="text"
                        value={keyword}
                        onChange={e => setKeyword(e.target.value)}
                        placeholder="검색어를 입력해 주세요"
                        onKeyDown={e => e.key === "Enter" && handleSearch()}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>

                <div className="funding-pagination-wrap">
                    <button
                        className="funding-more-btn"
                        onClick={() =>
                            currentPage > 1
                                ? navigate("/" + pageArr + "/" + (currentPage - 1))
                                : setAlertMsg("첫 페이지입니다.")
                        }
                    >
                        <FaChevronLeft />
                    </button>

                    <Pagination>{items}</Pagination>

                    <button
                        className="funding-more-btn"
                        onClick={() =>
                            currentPage < fundingData.length / 9
                                ? navigate("/" + pageArr + "/" + (currentPage + 1))
                                : setAlertMsg("마지막 페이지입니다.")
                        }
                    >
                        <FaChevronRight />
                    </button>
                </div>

                <div className="funding-register-actions">
                    <Button
                        className="funding-create-btn"
                        onClick={handleCreateFunding}
                    >
                        펀딩 등록하기
                    </Button>
                </div>
            </section>

            {/* ================= 알럿 모달 ================= */}
            {alertMsg && (
                <div className="alert-modal-bg">
                    <div className="alert-modal-box">
                        <p className="alert-modal-message">{alertMsg}</p>
                        <button
                            className="alert-modal-btn"
                            onClick={() => setAlertMsg("")}
                        >
                            확인
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FundingList;