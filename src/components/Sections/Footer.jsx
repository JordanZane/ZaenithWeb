import React from 'react';
import Logo from '../../assets/images/logo-full.svg';

import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="logo-container">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <img src={Logo} alt="ZænithWeb - Freelance Web Developper" />
            </Link>{' '}
          </div>
          <p>
            Tout droits réservés - Design & développement par Jordan Zanetti -{' '}
            <a href="/legal">Mentions légales</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
