import React from 'react';
import { Link } from 'react-scroll';

import Logo from '../../assets/images/logo-full.svg';

const Navigation = () => {
  const handleShowNavigation = () => {
    document.getElementById('fullScreenNav').classList.toggle('show');
    const barsMenu = document.getElementsByClassName('bar');
    for (const bar of barsMenu) {
      bar.classList.toggle('open');
    }
  };

  return (
    <div className="navigation">
      <div className="container">
        <nav>
          <div className="logo-container">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              <img src={Logo} alt="ZænithWeb - Freelance Web Developper" />
            </Link>
          </div>
          <div className="menu-btn-container" onClick={handleShowNavigation}>
            <span>Menu</span>
            <div className="menu-icon" id="menuIcon">
              <div className="bar" id="bar1"></div>
              <div className="bar" id="bar2"></div>
              <div className="bar" id="bar3"></div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
