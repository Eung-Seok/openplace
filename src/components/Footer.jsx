import "./Footer.css";


function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-inner">

                {/* LEFT */}
                <div className="footer-left">
                    <div className="footer-logo">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/common/OpenPlace.png`}
                            alt="OpenPlace"
                        />
                        <span>OpenPlace</span>
                    </div>

                    <ul className="footer-info">
                        <li>지역 문제 제안부터 펀딩과 후기 공유까지 연결하는 포트폴리오 데모입니다.</li>
                        <li>
                            <strong>Source</strong>
                            <a href="https://github.com/Eung-Seok/openplace" target="_blank" rel="noreferrer">
                                GitHub Repository
                            </a>
                        </li>
                    </ul>

                    <p className="copyright">© 2026 OpenPlace Portfolio Project</p>
                </div>

                {/* RIGHT */}
                <div className="footer-right">
                    <ul className="footer-sns">
                        <li>
                            <a href="https://github.com/Eung-Seok/openplace" target="_blank" rel="noreferrer" aria-label="GitHub">
                                <i className="bi bi-github"></i>
                            </a>
                        </li>
                    </ul>

                </div>

            </div>
        </footer>
    );
}

export default Footer;
