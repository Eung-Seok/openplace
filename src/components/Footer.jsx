import "./Footer.css";


function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-inner">

                {/* LEFT */}
                <div className="footer-left">
                    <div className="footer-logo">
                        <img
                            src="/images/common/OpenPlace.png"
                            alt="OpenPlace"
                        />
                        <span>OpenPlace</span>
                    </div>

                    <ul className="footer-info">
                        <li><strong>전화번호</strong> 1566-9564</li>
                        <li><strong>E-mail</strong> openplace@openplace.or.kr</li>
                        <li><strong>홈페이지</strong> http://www.human.or.kr/</li>
                        <li>
                            <strong>주소</strong>
                            (31144) 충남 천안시 동남구 대흥로 215 7층, 8층
                        </li>
                    </ul>

                    <p className="copyright">
                        copyright© OpenPlace All rights reserved.
                    </p>
                </div>

                {/* RIGHT */}
                <div className="footer-right">
                    <ul className="footer-sns">
                        <li>
                            <a href="https://www.instagram.com/" aria-label="Instagram">
                                <i className="bi bi-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.kakaocorp.com/" aria-label="KakaoTalk">
                                <i className="bi bi-chat-dots"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/" aria-label="Facebook">
                                <i className="bi bi-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/" aria-label="YouTube">
                                <i className="bi bi-youtube"></i>
                            </a>
                        </li>
                    </ul>

                </div>

            </div>
        </footer>
    );
}

export default Footer;
