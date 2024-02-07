import React from 'react';
import { Link } from 'react-scroll';

import Logo from '../../assets/images/logo-full.svg';

const Navigation = () => {
  const handleShowNavigation = () => {
    const fullScreenNav = document.getElementById('fullScreenNav');
    const barsMenu = document.querySelectorAll('.bar');
    const linkItems = document.querySelectorAll('.link-item');

    if (fullScreenNav.classList.contains('show')) {
      setTimeout(() => {
        fullScreenNav.classList.toggle('show');
      }, 1000);

      linkItems.forEach((link) => {
        link.classList.add('hide');
      });
    } else {
      fullScreenNav.classList.toggle('show');
      linkItems.forEach((link) => {
        link.classList.remove('hide');
      });
    }

    barsMenu.forEach((bar) => {
      bar.classList.toggle('open');
    });
  };

  return (
    <>
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
      <div className="full-screen-nav" id="fullScreenNav">
        <div className="containerFluid">
          <nav>
            <ul>
              <li className="link-item home-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={handleShowNavigation}
                >
                  Accueil
                </Link>
              </li>
              <li className="link-item works-link">
                <Link
                  to="works"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  Références
                </Link>
              </li>
              <li className="link-item services-link">
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  Services
                </Link>
              </li>
              <li className="link-item about-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  à propos
                </Link>
              </li>
              <li className="link-item contact-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;
