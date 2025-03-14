import "./assets/css/aside.css";

function Aside() {
    return (
      <aside className="sidebar">
        <ul className="social-icons">
          <li><a href="https://www.facebook.com/people/Abdou-Lahmar/pfbid036fVWEU3GJLL177UeNkKML7t9KMkZmjS7i65AxGMo1fLAmWMRi7aV3PdPz65HPgmSl/"><img src="/svg/facebook.svg" alt="Facebook" /></a></li>
          <li><a href="https://www.instagram.com/lahmar_abdessalem?igsh=MXNtNm03bGVlZHNsdQ=="><img src="/svg/instagram.svg" alt="Instagram" /></a></li>
          <li><a href="https://www.linkedin.com/in/lahmar-abdessalem-92189a24/"><img src="/svg/linkedin.svg" alt="LinkedIn" /></a></li>
          <li><a href="https://github.com/abdoulahmr"><img src="/svg/github.svg" alt="GitHub" /></a></li>
        </ul>
      </aside>
    );
}

export default Aside;
