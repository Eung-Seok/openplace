import "./CommunitySection.css";

function CommunitySection() {
    const communityTopList = [
        {
            id: 1,
            title: "우리 동네 쓰레기통 부족 문제",
            likes: 132,
        },
        {
            id: 2,
            title: "어린이 보호구역 신호등 설치 요청",
            likes: 89,
        },
        {
            id: 3,
            title: "노후된 벤치 교체 필요",
            likes: 64,
        },
    ];

    return (
        <section className="community-section">
            <div className="container">
                <h3 className="community-title">
                    지역 문제 제보 TOP
                </h3>

                <ul className="community-list">
                    {communityTopList.map((item) => (
                        <li key={item.id} className="community-item">
                            <p className="community-item-title">
                                {item.title}
                            </p>
                            <span className="community-like">
                                <span style={{color:"red"}}> ❤ </span> {item.likes} 공감
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default CommunitySection;
