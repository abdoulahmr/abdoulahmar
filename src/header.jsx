import "./assets/css/header.css";

function Header() {
    return (
      <header>
        <nav>
          <h1>LA</h1>
          <ul className="menu">
            <a href="#home"><li><span className="hash">#</span>home</li></a>
            <a href="#projects"><li><span className="hash">#</span>projects</li></a>
            <a><li><span className="hash">#</span>about-me</li></a>
            <a><li><span className="hash">#</span>contacts</li></a>
          </ul>
        </nav>
      </header>
    );
}
  
export default Header;
  