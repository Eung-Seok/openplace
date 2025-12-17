import { Link, useLocation, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import "./Header.css";


function Header() {

    const nowpage = useLocation();
    let navigate = useNavigate();
    const isLogin = localStorage.getItem("로그인현황") === "true";
    const handleLogout = () => {
        let accountInfo = {
            nickname: '',
            name: '',
            mailAdress: '',
            phoneNumber: '',
            birthday: '',
            id: '',
            pw: '',
        };
        localStorage.setItem("계정정보", JSON.stringify(accountInfo))
        localStorage.setItem("로그인현황", "false");
        alert("로그아웃 되었습니다.");
        navigate(nowpage.pathname);
    };
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? "scrolled" : ""}`}>
            <div className="container d-flex justify-content-between align-items-center">

                {/* LOGO */}
                <Link to="/" className="header-logo">
                    <img
                        src="/images/common/OpenPlaceHorizontal.png"
                        alt="OpenPlace Logo"
                        className="logo-icon"
                    />
                </Link>

                {/* NAV */}
                <nav>
                    <ul className="d-flex gap-4 mb-0">
                        <li><Link to="/funding/main/1" className="nav-link">Funding</Link></li>
                        <li><Link to="/community/main/1" className="nav-link">Community</Link></li>
                        <li><Link to="/about" className="nav-link">About</Link></li>

                        {isLogin ? (
                            <>
                                <li>
                                    <Link to="/mypage" className="nav-link">MyPage</Link>
                                </li>
                                <li>
                                    <button
                                        className="nav-link logout-btn"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <li onClick={() => {
                                localStorage.setItem('마지막 주소', JSON.stringify(nowpage.pathname))
                            }}><Link to="/login" className="nav-link">Log-In</Link></li>
                        )}
                    </ul>
                </nav>

            </div>
        </header>
    );
}

export default Header;
