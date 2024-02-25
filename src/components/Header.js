import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from "../images/Logo.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const location = useLocation();

  return (
    <div className="header">
      <div className="main-nav">
        <div className="nav-left">
          <Link to="/" className="logo-link">
            <img src={Logo} alt="" className="logo" />
          </Link>
          <ul>
            <li><Link to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>Domov</Link></li>
            <li><Link to="/src/pages/News.js" className={location.pathname === '/src/pages/Actuality.js' ? 'nav-link active' : 'nav-link'}>Aktuality</Link></li>
            <li><Link to="/src/pages/HalfMarathon.js" className={location.pathname === '/src/pages/HalfMarathon.js' ? 'nav-link active' : 'nav-link'}>Hámornícky polmaratón</Link></li>
            <li><Link to="/src/pages/Members.js" className={location.pathname === '/src/pages/Members.js' ? 'nav-link active' : 'nav-link'}>Členovia klubu</Link></li>
            <li><Link to="/src/pages/Contact.js" className={location.pathname === '/src/pages/Contact.js' ? 'nav-link active' : 'nav-link'}>Kontakt</Link></li>
          </ul>
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=100057216499381" target="_blank" rel="noopener noreferrer" className="facebook"><FaFacebookF /></a>
          <a href="https://www.instagram.com/bk_spartak_medzev/" target="_blank" rel="noopener noreferrer" className="instagram"><FaInstagram /></a>
        </div>
      </div>
    </div>
  );
};

export default Header;
