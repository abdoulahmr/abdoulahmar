import "./assets/css/header.css";

function Header() {
    return (
        <header>
            {/* Desktop Navigation */}
            <div className="desktop">
                <nav>
                    <h1>LA</h1>
                    <ul className="menu">
                        <a href="#home"><li><span className="hash">#</span>home</li></a>
                        <a href="#projects"><li><span className="hash">#</span>projects</li></a>
                        <a href="#about-me"><li><span className="hash">#</span>about-me</li></a>
                        <a href="#contacts"><li><span className="hash">#</span>contacts</li></a>
                    </ul>
                </nav>
            </div>

            {/* Mobile Navigation */}
            <div className="mobile">
                <nav>
                    <h1>LA</h1>
                    <div className="hamburger-menu">
                        <input type="checkbox" id="menu-toggle" />
                        <label htmlFor="menu-toggle" className="menu-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                        <ul className="menu">
                            <a href="#home"><li><span className="hash">#</span>home</li></a>
                            <a href="#projects"><li><span className="hash">#</span>projects</li></a>
                            <a href="#about-me"><li><span className="hash">#</span>about-me</li></a>
                            <a href="#contact-me"><li><span className="hash">#</span>contacts</li></a>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
