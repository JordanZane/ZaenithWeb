import React from 'react';
import { Link } from 'react-scroll';

import Logo from '../../assets/images/logo-full.svg';

const Navigation = () => {
  const handleShowNavigation = () => {
    const fullScreenNav = document.getElementById('fullScreenNav');
    const body = document.querySelector('body');
    const barsMenu = document.querySelectorAll('.bar');
    const linkItems = document.querySelectorAll('.link-item');

    if (fullScreenNav.classList.contains('show')) {
      setTimeout(() => {
        fullScreenNav.classList.toggle('show');
        body.classList.toggle('no-scroll');
      }, 500);

      linkItems.forEach((link) => {
        link.classList.add('hide');
      });
    } else {
      body.classList.toggle('no-scroll');
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
      <div className="navigation hidden">
        <div className="container">
          <nav>
            <div className="logo-container">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
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
                  duration={500}
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
                  duration={500}
                  onClick={handleShowNavigation}
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
                  duration={500}
                  onClick={handleShowNavigation}
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
                  duration={500}
                  onClick={handleShowNavigation}
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
                  duration={500}
                  onClick={handleShowNavigation}
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
