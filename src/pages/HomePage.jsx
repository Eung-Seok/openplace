import Hero from "../components/Hero";
import FundingSection from "../components/FundingSection";
import Header from "../components/Header";
import CommunitySection from "../components/CommunitySection";
import "./HomePage.css";

function HomePage() {
    return (
        <>
            <Hero />
            <div className="home-container">
                <FundingSection />
                <CommunitySection />
            </div>
        </>
    );
}

export default HomePage;