import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import "./Header.css";


function Header() {

    const [scrolled, setScrolled] = useState(false);
    const nowpage = useLocation();

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
                        <li><Link to="/funding">Funding</Link></li>
                        <li><Link to="/community/main/1">Community</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li onClick={()=>{
                            localStorage.setItem('마지막 주소', JSON.stringify(nowpage.pathname))
                        }}><Link to="/login">Log-In</Link></li>
                    </ul>
                </nav>

            </div>
        </header>
    );
}

export default Header;
