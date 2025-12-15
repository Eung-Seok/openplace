import "./AboutPage.css";

function AboutPage() {
    return (
        <section className="about-page">
            <div className="container">

                <h2 className="about-title">회사소개</h2>

                {/* 서비스 소개 */}
                <div className="about-card">
                    <h4 className="about-card-title">
                        <i className="bi bi-leaf-fill about-icon"></i>
                        서비스 소개
                    </h4>
                    <p>
                        <strong>Open Place</strong>는 지역 주민이 직접 참여하여
                        공공시설 개선을 실현하는 시민 기반 펀딩 플랫폼입니다.
                    </p>
                    <p>
                        우리 동네의 불편함을 제안하고, 공감과 펀딩을 통해
                        현실적인 변화를 만들어내는 공간을 꿈꿉니다.
                        프로젝트의 시작부터 완성까지 투명하게 공유하며,
                        모두가 함께 만들고 함께 혜택을 누릴 수 있는
                        공공 개선 생태계를 지향합니다.
                    </p>
                </div>

                {/* 미션 */}
                <div className="about-card">
                    <h4 className="about-card-title">
                        <i className="bi bi-bullseye about-icon"></i>
                        우리의 미션 (Mission)
                    </h4>
                    <ul className="about-list">
                        <li>지역사회 문제를 가장 가까운 사람들인 주민이 직접 해결할 수 있도록 돕습니다.</li>
                        <li>공공시설 개선 과정을 투명하게 공개하여 신뢰 기반 커뮤니티를 만듭니다.</li>
                        <li>지속 가능한 도시 환경을 조성하고 지역의 가치와 생활 품질을 높입니다.</li>
                        <li>작은 참여가 모여 더 큰 사회적 가치를 만드는 선순환을 이끕니다.</li>
                    </ul>
                </div>

                {/* 비전 */}
                <div className="about-card">
                    <h4 className="about-card-title">
                        <i className="bi bi-rocket-takeoff about-icon"></i>
                        우리의 비전 (Vision)
                    </h4>

                    <p className="about-vision-desc">
                        Open Place는 단순한 펀딩 플랫폼을 넘어,<br />
                        <strong>시민이 직접 만드는 스마트한 공공 개선 플랫폼</strong>을 목표로 합니다.
                    </p>

                    <div className="vision-grid">
                        <div className="vision-box">
                            <h5>
                                <i className="bi bi-people-fill vision-icon"></i>
                                시민 중심 플랫폼
                            </h5>
                            <p>
                                주민이 제안하고 참여하며
                                변화의 주체가 되는 구조를 구축합니다.
                            </p>
                        </div>

                        <div className="vision-box">
                            <h5>
                                <i className="bi bi-clipboard-data-fill vision-icon"></i>
                                투명한 공공 데이터
                            </h5>
                            <p>
                                Before & After, 예산 사용 내역 등
                                모든 정보를 공개합니다.
                            </p>
                        </div>

                        <div className="vision-box">
                            <h5>
                                <i className="bi bi-buildings-fill vision-icon"></i>
                                지속 가능한 도시
                            </h5>
                            <p>
                                환경·안전·생활 편의 개선을 통해
                                더 나은 도시 생태계를 만듭니다.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default AboutPage;
