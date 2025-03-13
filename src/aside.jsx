import "./assets/css/aside.css";

function Aside() {
    return (
      <aside className="sidebar">
        <ul className="social-icons">
          <li><a href="#"><img src="src/assets/svg/facebook.svg" alt="Facebook" /></a></li>
          <li><a href="#"><img src="src/assets/svg/instagram.svg" alt="Instagram" /></a></li>
          <li><a href="#"><img src="src/assets/svg/linkedin.svg" alt="LinkedIn" /></a></li>
          <li><a href="#"><img src="src/assets/svg/github.svg" alt="GitHub" /></a></li>
        </ul>
      </aside>
    );
}

export default Aside;
