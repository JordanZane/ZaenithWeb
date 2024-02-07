import React from 'react';
import { Link } from 'react-scroll';

const FullScreenNav = () => {
  return (
    <div className="full-screen-nav" id="fullScreenNav">
      <nav>
        <ul>
          <li>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
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
  );
};

export default FullScreenNav;
