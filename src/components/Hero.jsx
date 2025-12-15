import "./Hero.css";
import MainSearch from "./MainSearch";


function Hero() {
    return (
        <section id="hero" className="hero-section d-flex align-items-center">
            <div className="container">
                <div className="row align-items-stretch">

                    {/* LEFT : TEXT */}
                    <div className="col-lg-6 hero-text d-flex flex-column justify-content-center">
                        <h1>
                            OpenPlace
                        </h1><br />
                        <h4>
                            시민이 직접 참여해 공공시설을 개선하고,<br />
                            우리 동네의 문제를 함께 해결하는<br />
                            <strong>참여형 펀딩 플랫폼</strong>입니다.
                        </h4>
                        {/* SEARCH BAR */}
                        <MainSearch/>

                    </div>

                    {/* RIGHT : IMAGE */}
                    <div className="col-lg-6 hero-image d-flex align-items-center">
                        <img
                            src="/images/mainpage/main1.png"
                            alt="Hero Illustration"
                            className="img-fluid"
                        />

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;
