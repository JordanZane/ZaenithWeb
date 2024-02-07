import React from 'react';
import { Link } from 'react-scroll';

const FullScreenNav = () => {
  const handleShowNavigation = () => {
    document.getElementById('fullScreenNav').classList.toggle('show');
    const barsMenu = document.getElementsByClassName('bar');
    for (const bar of barsMenu) {
      bar.classList.toggle('open');
    }
  };

  return (
    <div className="full-screen-nav" id="fullScreenNav">
      <div className="containerFluid">
        <nav>
          <ul>
            <li>
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
            <li>
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
            <li>
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
            <li>
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
            <li>
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
  );
};

export default FullScreenNav;
