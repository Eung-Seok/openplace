import "./FundingRegister.css"
// import FundingBox from "./component/FundingBox";
import { useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router-dom";

function FundingRegister() {

    // 저장 버튼 이동
    const navigate = useNavigate();

    // 필수입력창 이동
    const scrollToWithOffset = (id) => {
        const element = document.getElementById(id);
        if (!element) return;

        element.scrollIntoView({ behavior: 'smooth', block: 'start' });

        element.focus();
    };

    // 빨간색 변경
    const [errors, setErrors] = useState({
        title: false,
        location: false,
        summary: false,
        description: false,
        goalAmount: false,
        timeLeft: false,
    });

    const handleSave = () => {
        const newErrors = {
            title: !title,
            location: !location,
            summary: !summary,
            description: !description,
            goalAmount: !goalAmount,
            timeLeft: !timeLeft,
        };

        setErrors(newErrors);

        // 스크롤이동
        
        const firstErrorField = Object.keys(newErrors).find((key) => newErrors[key]);
        if (firstErrorField) {
            alert("필수 내용을 작성해주세요.");
            setTimeout(() => {
                const element = document.getElementById(firstErrorField);
                if (element) {
                    const yOffset = -80; 
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                    element.focus();
                }
            }, 50); 
            return;
        }

        if (window.confirm("작성하신 프로젝트 내용을 저장하시겠습니까?")) {
            navigate("/funding/main/1");
        }
    };

    const [goalAmount, setGoalAmount] = useState("");

    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const formattedToday = `${yyyy}-${mm}-${dd}`;

    //오늘 날짜 초기화
    const [timeStart, setTimeStart] = useState(formattedToday);
    const [timeLeft, setTimeLeft] = useState("");

    // 별표 없애기 textarea
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [summary, setSummary] = useState("");
    const [description, setDescription] = useState("");


    return (
        <div className="funding-register-container">
            <div className="funding-project-container">
                <h1>프로젝트 페이지 만들기</h1>
            </div>
            <div className="funding-input-container">
                <p className="funding-your-idea" style={{ marginTop: '77px' }}>당신의 아이디어</p>
                {/* <p className="funding-register-explan">앞으로 모금을 진행하게 될 후원자에게 무엇을 할 계획인지, 어떻게 그것을 달성할 것이고, 그리고 그것이 가져올 이점에 대해 적어주세요 !</p> */}
                <p className="funding-register-explan"><p className="funding-register-explan">
                    앞으로 모금을 통해 개선하고자 하는 <span>공공시설은 무엇인지</span>
                    <>, 그 변화가</> <span>지역 사회에 어떤 의미를 가지는지</span>
                    <>, 그리고 이를 통해</><br></br> <span>어떤 긍정적인 효과를 기대할 수 있는지</span>를 소개해 주세요.

                    또한 해당 프로젝트를 <span>어떤 방식으로 실현해 나갈 것인지 </span><br></br>
                    구체적인 계획과 함께 <span>진정성 있게 작성</span>해 주세요.
                    여러분의 진솔한 설명은 후원자들의 <span>공감과 참여</span>로 이어집니다.
                </p>
                </p>
                <hr style={{ marginTop: "77px", marginBottom: "40px" }}></hr>

                <p className={`funding-my-idea ${errors.title ? "error" : ""}`}
                    style={{ marginTop: "77px" }}>
                    프로젝트 제목 {!title && <span>*</span>}
                </p>

                <div className="textarea-wrapper textarea-wrapper-width2">
                    <textarea
                        id="title"
                        style={{ height: "40px" }}
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                            if (errors.title) {
                                setErrors(prev => ({ ...prev, title: false }));
                            }
                        }}
                        className={errors.title ? "error" : ""}
                    ></textarea>

                    <span className="funding-tooltip">?
                        <div className="funding-tooltip-text">
                            <p>프로젝트 제목을 입력해주세요.</p>
                            <br></br>
                            프로젝트 제목은 후원자에게 가장 먼저 전달되는 정보입니다.
                            어떤 프로젝트인지 한눈에 알 수 있도록
                            내용과 잘 어울리는 제목을 작성해 주세요.
                            <br></br>

                            <a style={{ color: "#09947d" }}><br></br>(예: 놀이터 리뉴얼 프로젝트) </a>
                        </div>
                    </span>
                </div>

                <p className={`funding-my-idea ${errors.location ? "error" : ""}`}>
                    해당 장소 위치 {!location && <span>*</span>}
                </p>

                <div className="textarea-wrapper textarea-wrapper-width2">
                    <textarea
                        id="location"
                        style={{ height: "40px" }}
                        value={location}
                        onChange={(e) => {
                            setLocation(e.target.value);
                            if (errors.location) setErrors(prev => ({ ...prev, location: false }));
                        }}
                        className={errors.location ? "error" : ""}
                    ></textarea>

                    <span className="funding-tooltip">?
                        <div className="funding-tooltip-text">
                            <p>해당 프로젝트가 진행될 장소를 입력해주세요.</p>
                            <br></br>
                            프로젝트 제목은 후원자에게 가장 먼저 전달되는 정보입니다.
                            프로젝트의 목적과 내용을 한눈에 알 수 있도록
                            너무 모호하지 않은 제목을 작성해 주세요.
                            <br></br>
                            <a style={{ color: "#09947d" }}><br></br>(예: 천안 불당동 숲놀이터)</a>
                        </div>
                    </span>
                </div>

                <p className={`funding-my-idea ${errors.summary ? "error" : ""}`}>
                    귀하의 아이디어에 대한 간략한 요약 {!summary && <span>*</span>}
                </p>
                <div className="textarea-wrapper textarea-wrapper-width">
                    <textarea
                        rows="10"
                        id="summary"
                        value={summary}
                        onChange={(e) => {
                            setSummary(e.target.value);
                            if (errors.summary) setErrors(prev => ({ ...prev, summary: false }));
                        }}
                        className={errors.summary ? "error" : ""}
                    ></textarea>

                    <span className="funding-tooltip">?
                        <div className="funding-tooltip-text">
                            <p>프로젝트의 핵심 아이디어를 간략히 요약해주세요.</p>
                            <br></br>
                            이 요약은 후원자가 프로젝트를 처음 이해하는 부분입니다.
                            무엇을 하려는 프로젝트인지 왜 필요한지 한눈에 알 수 있도록 작성해 주세요.
                            <br></br>
                            <a style={{ color: "#09947d" }}><br></br>
                                과도한 홍보보다는 프로젝트의 본질이 잘 드러나도록 작성해 주세요.
                            </a>
                        </div>
                    </span>
                </div>

                <p className={`funding-my-idea ${errors.description ? "error" : ""}`}>
                    프로젝트 설명 {!description && <span>*</span>}
                </p>

                <div className="textarea-wrapper textarea-wrapper-width">
                    <textarea
                        rows="10"
                        id="description"
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                            if (errors.description) setErrors(prev => ({ ...prev, description: false }));
                        }}
                        className={errors.description ? "error" : ""}
                    ></textarea>

                    <span className="funding-tooltip">?
                        <div className="funding-tooltip-text">
                            <p>프로젝트에 대한 상세 설명을 작성해주세요.</p>
                            <br></br>
                            후원자들이 기부금의 사용 목적을 쉽게 이해할 수 있도록
                            프로젝트의 목표와 기대되는 결과를 명확히 작성해 주세요.
                            <br></br>
                            <a style={{ color: "#09947d" }}>
                                <br />
                                후원자가 쉽게 이해할 수 있도록 핵심만 정리해 주세요.
                            </a>
                        </div>
                    </span>
                </div>

                <span className="funding-my-idea funding-amount-label">
                    목표 금액과 기간 설정 {(goalAmount === "" || timeLeft === "") && <span>*</span>}

                    <div className="textarea-wrapper funding-help-amount">
                        <span className="funding-tooltip" style={{ display: "inline-flex", justifyContent: "center", alignItems: "center" }}>
                            ?
                            <div className="funding-tooltip-text" style={{ width: "250px", height: "77px", textAlign: "center" }}>
                                <p>프로젝트 목표 금액과 종료 날짜를 선택해주세요.</p>
                            </div>
                        </span>

                    </div>

                </span>

                <div className="funding-amount-time">
                    <div className="funding-amount-row">
                        <input
                            id="goalAmount"
                            className={`funding-amount-input ${errors.goalAmount ? "error" : ""}`}
                            type="text"
                            value={goalAmount}
                            placeholder="목표 금액"
                            onFocus={() => {
                                setGoalAmount(goalAmount.replace(/ 원/g, ""));
                            }}
                            onChange={(e) => {
                                const onlyNumber = e.target.value.replace(/[^0-9]/g, "");
                                const formatted = onlyNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                setGoalAmount(formatted);
                                if (errors.goalAmount) setErrors(prev => ({ ...prev, goalAmount: false }));
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    e.target.blur();
                                }
                            }}
                            onBlur={() => {
                                if (goalAmount && !goalAmount.includes("원")) {
                                    setGoalAmount(`${goalAmount} 원`);
                                }
                            }}
                        />
                        {/* <span className="funding-amount-unit">원</span> */}
                    </div>

                    <div className="funding-date-row">
                        <div className="funding-date-box">
                            <input type="date" value={timeStart} readOnly
                            />
                            <span>프로젝트 시작</span>
                        </div>

                        <span className="funding-date-tilde">~</span>

                        <div className="funding-date-box">
                            <input
                                id="timeLeft"
                                type="date"
                                value={timeLeft}
                                className={errors.timeLeft ? "error" : ""}
                                onChange={(e) => {
                                    setTimeLeft(e.target.value);
                                    if (errors.timeLeft) setErrors(prev => ({ ...prev, timeLeft: false }));
                                }}
                            />
                            <span>프로젝트 종료</span>
                        </div>
                    </div>
                    <div className="funding-my-idea">
                        <label style={{ marginTop: "0px" }}>이미지 첨부 (선택)</label>
                    </div>
                    <div className="funding-img-style">
                        <input type="file" />
                    </div>
                </div>


                <div className="funding-footer-setting">
                    <button
                        className="funding-edit-btn"
                        onClick={() => {
                            // 버튼 클릭 초반에 errors 상태 업데이트 및 첫 번째 오류로 스크롤
                            const newErrors = {
                                title: !title,
                                location: !location,
                                summary: !summary,
                                description: !description,
                                goalAmount: !goalAmount,
                                timeLeft: !timeLeft,
                            };
                            setErrors(newErrors);

                            const firstErrorField = Object.keys(newErrors).find((key) => newErrors[key]);
                            if (firstErrorField) {
                                alert("필수 내용을 작성해주세요.");
                                scrollToWithOffset(firstErrorField);
                                document.getElementById(firstErrorField)?.focus();
                                return;
                            }

                            if (window.confirm("작성하신 프로젝트 내용을 저장하시겠습니까?")) {
                                navigate("/funding/main/1");
                            }
                            window.scrollTo(0, 0);
                        }}
                    >저장</button>
                </div>

            </div >
        </div >
    );
}

export default FundingRegister;