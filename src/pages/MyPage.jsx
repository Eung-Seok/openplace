import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./MyPage.css";
import MyInfoModal from "./MyInfoModal";
import { FiUser } from "react-icons/fi";

function MyPage() {
    const navigate = useNavigate();

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("계정정보"))
    );

    const [infoOpen, setInfoOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("project");
    const [myProjects, setMyProjects] = useState([]);
    const [myPosts, setMyPosts] = useState([]);

    // 충전
    const [chargeOpen, setChargeOpen] = useState(false);
    const [chargeAmount, setChargeAmount] = useState("");

    // 🔥 회원 탈퇴 모달
    const [withdrawModalOpen, setWithdrawModalOpen] = useState(false);

    useEffect(() => {
        if (!user) return;

        const fundingData =
            JSON.parse(localStorage.getItem("펀딩데이터")) || [];

        setMyProjects(
            fundingData.filter(item => item.author === user.name)
        );

        const totalData =
            JSON.parse(localStorage.getItem("통합데이터")) || [];

        setMyPosts(
            totalData.filter(item => item.author === user.name)
        );
    }, [user]);

    /* ================= 충전 ================= */
    const handleCharge = () => {
        const amount = Number(chargeAmount);
        if (!amount || amount <= 0) {
            alert("충전 금액을 선택 또는 입력하세요.");
            return;
        }

        const updatedUser = {
            ...user,
            balance: (user.balance || 0) + amount,
        };

        let list = JSON.parse(localStorage.getItem("계정목록"));
        let index = list.findIndex(item => item.id === user.id);

        list[index] = updatedUser;
        localStorage.setItem("계정목록", JSON.stringify(list));
        setUser(updatedUser);
        setChargeOpen(false);
        setChargeAmount("");
    };

    /* ================= 회원 탈퇴 ================= */
    const handleWithdraw = () => {
        setWithdrawModalOpen(true); // ✅ 모달만 열기
    };

    const confirmWithdraw = () => {
        const accountInfo = {
            nickname: "",
            name: "",
            mailAdress: "",
            phoneNumber: "",
            birthday: "",
            id: "",
            pw: "",
        };

        localStorage.setItem("계정정보", JSON.stringify(accountInfo));
        localStorage.setItem("로그인현황", "false");

        setWithdrawModalOpen(false);
        navigate("/");
        window.scrollTo(0, 0);
    };

    if (!user) return null;

    return (
        <section className="mypage">
            <div className="mypage-container">

                <h2 className="mypage-title">
                    <FiUser size={30} /> 마이페이지
                </h2>

                {/* 프로필 */}
                <div className="mypage-profile">
                    <div>
                        <strong>{user.name}님</strong>
                        <p>회원 등급 : {user.level}</p>
                    </div>
                    <button
                        className="mypage-edit-btn"
                        onClick={() => setInfoOpen(true)}
                    >
                        내 정보 확인
                    </button>

                    {infoOpen && (
                        <MyInfoModal
                            user={user}
                            onClose={() => setInfoOpen(false)}
                        />
                    )}
                </div>

                {/* 잔고 */}
                <div className="mypage-balance-box">
                    <div>
                        <span>나의 잔고</span>
                        <strong>{(user.balance || 0).toLocaleString()}원</strong>
                    </div>
                    <div>
                        <span>총 후원 금액</span>
                        <strong>{(user.totalDonate || 0).toLocaleString()}원</strong>
                    </div>
                    <button
                        className="mypage-charge-btn"
                        onClick={() => setChargeOpen(true)}
                    >
                        충전하기
                    </button>
                </div>

                {/* ================= 충전 모달 ================= */}
                {chargeOpen && (
                    <div className="charge-modal">
                        <h3>결제 금액 선택</h3>

                        <div className="charge-quick">
                            {[10000, 50000, 100000].map(price => (
                                <button
                                    key={price}
                                    onClick={() => setChargeAmount(price)}
                                >
                                    {price.toLocaleString()}원
                                </button>
                            ))}
                        </div>

                        <input
                            type="number"
                            placeholder="직접 입력"
                            value={chargeAmount}
                            onChange={(e) => setChargeAmount(e.target.value)}
                        />

                        <button
                            className="charge-confirm-btn"
                            onClick={handleCharge}
                        >
                            간편 결제
                        </button>

                        <button
                            className="charge-cancel-btn"
                            onClick={() => setChargeOpen(false)}
                        >
                            취소
                        </button>
                    </div>
                )}

                {/* 탭 */}
                <div className="mypage-tabs">
                    <button
                        className={activeTab === "project" ? "active" : ""}
                        onClick={() => setActiveTab("project")}
                    >
                        내가 제안한 프로젝트
                    </button>
                    <button
                        className={activeTab === "post" ? "active" : ""}
                        onClick={() => setActiveTab("post")}
                    >
                        내가 쓴 게시물
                    </button>
                </div>

                {/* 콘텐츠 */}
                <div className="mypage-content">
                    {activeTab === "project" &&
                        myProjects.map(project => (
                            <div
                                key={project.id}
                                className="mypage-card"
                                onClick={() => {
                                    navigate(`/funding/detail/${project.id}`);
                                    window.scrollTo(0, 0);
                                }}
                            >
                                <strong>{project.title}</strong>
                                <p>{project.subTitle}</p>
                            </div>
                        ))}
                </div>

                {activeTab === "post" && (
                    myPosts.length === 0 ? (
                        <p className="mypage-empty-text">
                            작성한 게시물이 없습니다.
                        </p>
                    ) : (
                        myPosts.map(post => (
                            <div
                                key={post.id}
                                className="mypage-card"
                                onClick={() => {
                                    navigate(`/community/${post.id}`);
                                    window.scrollTo(0, 0);
                                }}
                            >
                                <strong>{post.title}</strong>
                                <p>{post.content}</p>
                                <span style={{ fontSize: "13px", color: "#777" }}>
                                    [{post.category}]
                                </span>
                            </div>
                        ))
                    )
                )}

                {/* ================= 회원 탈퇴 ================= */}
                <div className="mypage-danger-zone">
                    <button
                        className="mypage-withdraw-btn"
                        onClick={handleWithdraw}
                    >
                        회원 탈퇴
                    </button>
                </div>

            </div>

            {/* ================= 회원 탈퇴 모달 ================= */}
            {withdrawModalOpen && (
                <div className="withdraw-modal-backdrop">
                    <div className="withdraw-modal-box">
                        <p className="withdraw-modal-text">
                            정말 회원 탈퇴 하시겠습니까?
                        </p>
                        <p className="withdraw-modal-subtext">
                            탈퇴 시 모든 정보는 복구할 수 없습니다.
                        </p>

                        <div className="withdraw-modal-btn-group">
                            <button
                                className="withdraw-modal-confirm-btn"
                                onClick={confirmWithdraw}
                            >
                                탈퇴
                            </button>
                            <button
                                className="withdraw-modal-cancel-btn"
                                onClick={() => setWithdrawModalOpen(false)}
                            >
                                취소
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </section>
    );
}

export default MyPage;