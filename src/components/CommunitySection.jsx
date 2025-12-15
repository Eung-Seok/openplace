import Card from "../communitypage/components/Card";
import "./CommunitySection.css";

function CommunitySection() {

    let totalData = JSON.parse(localStorage.getItem('통합데이터'));
    let likeArr = [];
    for (let i = 0; i < totalData.length; i++) {
        likeArr.push(totalData[i].likes)
    }
    // 가장 높은 숫자의 인덱스를 구하는 함수 
    let topData = [...totalData]
        .slice(0, 5)

    return (
        <section className="community-section">
            <div className="container">
                <h3 className="community-title">
                    지역 문제 TOP5
                </h3>
                {topData.map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
}

export default CommunitySection;
