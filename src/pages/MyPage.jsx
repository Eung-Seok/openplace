import React from "react";

function MyPage() {
    return (
            <section className="mypage-container">
                <h1>마이페이지</h1>

                {/* 프로필 정보 */}
                <div className="profile-box">
                    <div className="profile-left">
                        <img
                            src="https://source.unsplash.com/100x100/?profile"
                            alt="profile"
                            className="profile-img"
                        />
                        <div>
                            <h3>안송이 님</h3>
                            <p>회원 등급: 일반 회원</p>
                        </div>
                    </div>
                    <button className="edit-btn">정보 수정</button>
                </div>

                {/* 탭 메뉴 */}
                <div className="mypage-tabs">
                    <button className="mypage-tab active">후원 내역</button>
                    <button className="mypage-tab">내가 등록한 프로젝트</button>
                    <button className="mypage-tab">알림센터</button>
                    <button className="mypage-tab">계정 설정</button>
                </div>

                {/* 후원 내역 */}
                <div className="mypage-section">
                    <h2>후원 내역</h2>

                    <div className="support-card">
                        <h3>○○동 놀이터 리뉴얼 프로젝트</h3>
                        <p>후원 금액: 20,000원</p>
                        <p>후원 날짜: 2025-01-12</p>
                        <a href="FundingDetail.html" className="detail-link">
                            프로젝트 보기
                        </a>
                    </div>

                    <div className="support-card">
                        <h3>자전거 도로 야간 조명 설치</h3>
                        <p>후원 금액: 10,000원</p>
                        <p>후원 날짜: 2025-02-01</p>
                        <a href="FundingDetail.html" className="detail-link">
                            프로젝트 보기
                        </a>
                    </div>
                </div>

                {/* 내가 등록한 프로젝트 */}
                <div className="mypage-section">
                    <h2>내가 등록한 프로젝트</h2>

                    <div className="support-card">
                        <h3>공원 벤치 교체 프로젝트</h3>
                        <p>상태: 승인 완료</p>
                        <a href="FundingDetail.html" className="detail-link">
                            프로젝트 보기
                        </a>
                    </div>
                </div>

                {/* 알림센터 */}
                <div className="mypage-section">
                    <h2>알림센터</h2>

                    <div className="alert-box">
                        <p>🎉 참여한 프로젝트가 목표 금액의 50%를 달성했습니다!</p>
                    </div>

                    <div className="alert-box">
                        <p>📢 새 커뮤니티 댓글이 달렸습니다.</p>
                    </div>
                </div>

                {/* 계정 설정 */}
                <div className="mypage-section">
                    <h2>계정 설정</h2>
                    <button className="logout-btn">로그아웃</button>
                </div>
            </section>
       
    );
}

export default MyPage;
