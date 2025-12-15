import "./FundingSection.css";


function FundingSection() {
    const fundingList = [
        {
            id: 1,
            title: "어두운 골목길 조명 개선",
            description: "야간 보행 안전을 위한 LED 가로등 설치 프로젝트",
            currentAmount: 1800000,
            goalAmount: 3000000,
            image: "/images/fundingpage/funding1.jpeg",
        },
        {
            id: 2,
            title: "노후 놀이터 리모델링",
            description: "아이들이 안전하게 뛰놀 수 있는 놀이터 조성",
            currentAmount: 4200000,
            goalAmount: 5000000,
            image: "/images/fundingpage/funding2.jpeg",
        },
        {
            id: 3,
            title: "보행로 미끄럼 방지 공사",
            description: "비 오는 날에도 안전한 보행 환경 조성",
            currentAmount: 900000,
            goalAmount: 2000000,
            image: "/images/fundingpage/funding3.jpeg",
        },
        {
            id: 4,
            title: "공원 벤치 및 쉼터 설치",
            description: "어르신과 주민을 위한 휴식 공간 마련",
            currentAmount: 1200000,
            goalAmount: 1500000,
            image: "/images/fundingpage/funding4.jpg",
        },
        {
            id: 5,
            title: "어린이 보호구역 표지 개선",
            description: "시인성 높은 표지판으로 교통사고 예방",
            currentAmount: 700000,
            goalAmount: 1000000,
            image: "/images/fundingpage/funding7.jpg",
        },
        {
            id: 6,
            title: "마을 쓰레기 분리수거함 설치",
            description: "쾌적한 생활 환경을 위한 분리수거 공간",
            currentAmount: 300000,
            goalAmount: 800000,
            image: "/images/fundingpage/funding6.jpg",
        },
    ];

    return (
        <section id="portfolio" className="p-5 bg-light">
            <div className="container">
                <div className="section-title">
                    <h2>Funding Projects</h2>
                    <p>우리 동네를 바꾸는 진행 중인 펀딩</p>
                </div>

                <div className="row">
                    {fundingList.map((item) => {
                        const progress = Math.min(
                            Math.round((item.currentAmount / item.goalAmount) * 100),
                            100
                        );

                        return (
                            <div key={item.id} className="col-lg-4 col-md-6 mb-4">
                                <div className="funding-card">
                                    <div className="funding-img-wrap">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="funding-img"
                                        /></div>

                                    <div className="funding-body">
                                        <h5>{item.title}</h5>
                                        <p>{item.description}</p>

                                        {/* PROGRESS INFO */}
                                        <div className="funding-progress-info">
                                            <span>{progress}% 달성</span>
                                            <span>
                                                {item.currentAmount.toLocaleString()}원 /
                                                {item.goalAmount.toLocaleString()}원
                                            </span>
                                        </div>

                                        {/* PROGRESS BAR */}
                                        <div className="funding-progress-bar">
                                            <div
                                                className="funding-progress-fill"
                                                style={{ width: `${progress}%` }}
                                            ></div>
                                        </div>

                                        <button className="btn btn-primary w-100 mt-3">
                                            간편보기
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default FundingSection;
