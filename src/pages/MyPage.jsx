import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./MyPage.css";
import MyInfoModal from "./MyInfoModal";

function MyPage() {
    const [user] = useState(
        JSON.parse(localStorage.getItem("계정정보"))
    );

    const [infoOpen, setInfoOpen] = useState(false);

    const [activeTab, setActiveTab] = useState("project");
    const [myProjects, setMyProjects] = useState([]);
    const [myPosts, setMyPosts] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        if (!user) return;

        // 내가 제안한 프로젝트
        const fundingData =
            JSON.parse(localStorage.getItem("펀딩데이터")) || [];

        setMyProjects(
            fundingData.filter(item => item.author === user.name)
        );

        // 내가 쓴 게시물
        const totalData =
            JSON.parse(localStorage.getItem("통합데이터")) || [];

        setMyPosts(
            totalData.filter(item => item.author === user.name)
        );
    }, [user]);

    return (
        <div>
            <div className="mypage-wrap">
                <h2 className="mypage-title">마이페이지</h2>

                {/* 프로필 영역 */}
                <div className="mypage-profile">
                    <div className="mypage-profile-info">
                        <strong>{user?.name}님</strong>
                        <p>회원 등급: 일반 회원</p>
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
            </div>

            {/* 탭 영역 */}
            <div className="mypage-tabs">
                <button
                    className={`mypage-tab-btn ${
                        activeTab === "project" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("project")}
                >
                    내가 제안한 프로젝트
                </button>
                <button
                    className={`mypage-tab-btn ${
                        activeTab === "post" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("post")}
                >
                    내가 쓴 게시물
                </button>
            </div>

            {/* 콘텐츠 */}
            <div className="mypage-content">
                {/* 내가 제안한 프로젝트 */}
                {activeTab === "project" && (
                    <>
                        {myProjects.length === 0 ? (
                            <p className="mypage-empty-text">
                                제안한 프로젝트가 없습니다.
                            </p>
                        ) : (
                            myProjects.map(project => (
                                <div
                                    key={project.id}
                                    className="mypage-card"
                                >
                                    <strong className="mypage-card-title">
                                        {project.title}
                                    </strong>
                                    <p className="mypage-card-desc">
                                        {project.subTitle}
                                    </p>
                                    <span className="mypage-card-info">
                                        목표 금액:{" "}
                                        {project.goalAmount.toLocaleString()}원
                                    </span>
                                    <button
                                        className="mypage-link-btn"
                                        onClick={() =>
                                            navigate(`/funding/${project.id}`)
                                        }
                                    >
                                        프로젝트 보기
                                    </button>
                                </div>
                            ))
                        )}
                    </>
                )}

                {/* 내가 쓴 게시물 */}
                {activeTab === "post" && (
                    <>
                        {myPosts.length === 0 ? (
                            <p className="mypage-empty-text">
                                작성한 게시물이 없습니다.
                            </p>
                        ) : (
                            myPosts.map(post => (
                                <div
                                    key={post.id}
                                    className="mypage-card mypage-card-clickable"
                                    onClick={() =>
                                        navigate(`/community/${post.id}`)
                                    }
                                >
                                    <strong className="mypage-card-title">
                                        {post.title}
                                    </strong>
                                    <p className="mypage-card-desc">
                                        {post.content}
                                    </p>
                                    <span className="mypage-card-info">
                                        [{post.category}]
                                    </span>
                                </div>
                            ))
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default MyPage;
