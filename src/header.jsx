import "./assets/css/header.css";

function Header() {
    return (
      <header>
        <nav>
          <h1>LA</h1>
          <ul className="menu">
            <li><span className="hash">#</span>home</li>
            <li><span className="hash">#</span>projects</li>
            <li><span className="hash">#</span>about-me</li>
            <li><span className="hash">#</span>contacts</li>
          </ul>
        </nav>
      </header>
    );
}
  
export default Header;
  