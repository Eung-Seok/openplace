import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./MyPage.css";
import MyInfoModal from "./MyInfoModal";
import PaymentModal from "../pages/PaymentModal"; // ✅ 경로 수정
import { FiUser } from "react-icons/fi";
import MyInfoEditModal from "./MyInfoEditModal";
import Patch from "../communitypage/components/Patch";

function MyPage() {
    const navigate = useNavigate();

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("계정정보"))
    );

    const [infoOpen, setInfoOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("project");
    const [myProjects, setMyProjects] = useState([]);
    const [myPosts, setMyPosts] = useState([]);

    //내 정보 수정 모달
    const [editOpen, setEditOpen] = useState(false);

    // ✅ 결제 모달
    const [paymentOpen, setPaymentOpen] = useState(false);

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

    /* ================= 결제 성공 처리 ================= */
    const handlePaymentSuccess = (amount) => {
        const updatedUser = {
            ...user,
            balance: (user.balance || 0) + amount,
        };

        const list =
            JSON.parse(localStorage.getItem("계정목록")) || [];

        const index = list.findIndex(item => item.id === user.id);
        if (index !== -1) {
            list[index] = updatedUser;
        }

        localStorage.setItem("계정목록", JSON.stringify(list));
        localStorage.setItem("계정정보", JSON.stringify(updatedUser));
        setUser(updatedUser);
    };

    /* ================= 회원 탈퇴 ================= */
    const handleWithdraw = () => {
        setWithdrawModalOpen(true);
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
        setUser(accountInfo);
        let dataList = JSON.parse(localStorage.getItem('통합데이터'))
        let accountList = JSON.parse(localStorage.getItem('계정목록'))
        accountList = accountList.filter((item) => {
            return item.id != user.id;
        })
        dataList = dataList.filter((item) => {
            return item.authorId != user.id
        })

        localStorage.setItem('통합데이터', JSON.stringify(dataList))
        localStorage.setItem('계정목록', JSON.stringify(accountList))
        localStorage.setItem("계정정보", JSON.stringify(accountInfo))
        localStorage.setItem("로그인현황", "false");
        setWithdrawModalOpen(false);
        navigate("/");
        window.scrollTo(0, 0);
    };
    useEffect(() => Patch, [user])
    if (!user) return null;

    return (
        <section className="mypage">
            <div className="mypage-container">

                <h2 className="mypage-title">
                    <FiUser size={30} /> 마이페이지
                </h2>

                {/* ================= 프로필 ================= */}
                <div className="mypage-profile">
                    <div className="mypage-profile-left">
                        <strong>{user.name}님</strong>
                        <p>회원 등급 : {user.level}</p>
                    </div>

                    <div className="mypage-profile-btns">
                        <button
                            className="mypage-edit-btn"
                            onClick={() => setInfoOpen(true)}
                        >
                            내 정보 확인
                        </button>

                        <button
                            className="mypage-edit-btn outline"
                            onClick={() => setEditOpen(true)}
                        >
                            내 정보 수정
                        </button>
                    </div>
                    {infoOpen && (
                        <MyInfoModal
                            user={user}
                            onClose={() => setInfoOpen(false)}
                        />
                    )}

                    {editOpen && (
                        <MyInfoEditModal
                            user={user}
                            onClose={() => setEditOpen(false)}
                            onUpdate={setUser}
                        />
                    )}
                </div>

                {/* ================= 잔고 ================= */}
                <div className="mypage-balance-box">
                    <div>
                        <span>나의 잔고</span>
                        <strong>
                            {(user.balance || 0).toLocaleString()}원
                        </strong>
                    </div>

                    <div>
                        <span>총 후원 금액</span>
                        <strong>
                            {(user.totalDonate || 0).toLocaleString()}원
                        </strong>
                    </div>

                    <button
                        className="mypage-charge-btn"
                        onClick={() => setPaymentOpen(true)}
                    >
                        충전하기
                    </button>
                </div>

                {/* ================= 탭 ================= */}
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

                {/* ================= 콘텐츠 ================= */}
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
                                    <span
                                        style={{
                                            fontSize: "13px",
                                            color: "#777"
                                        }}
                                    >
                                        [{post.category}]
                                    </span>
                                </div>
                            ))
                        )
                    )}
                </div>

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

            {/* ================= 결제 모달 ================= */}
            {paymentOpen && (
                <PaymentModal
                    onClose={() => setPaymentOpen(false)}
                    onSuccess={handlePaymentSuccess}
                />
            )}

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
