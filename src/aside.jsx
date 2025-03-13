import "./assets/css/aside.css";

function Aside() {
    return (
      <aside className="sidebar">
        <ul className="social-icons">
          <li><a href="#"><img src="/svg/facebook.svg" alt="Facebook" /></a></li>
          <li><a href="#"><img src="/svg/instagram.svg" alt="Instagram" /></a></li>
          <li><a href="#"><img src="/svg/linkedin.svg" alt="LinkedIn" /></a></li>
          <li><a href="#"><img src="/svg/github.svg" alt="GitHub" /></a></li>
        </ul>
      </aside>
    );
}

export default Aside;
