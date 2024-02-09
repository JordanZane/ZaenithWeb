import React from 'react';
import { Link } from 'react-scroll';

import BigLogo from '../../assets/images/big-logo-icon.svg';

const Header = () => {
  return (
    <header id="home">
      <div className="container">
        <div className="header-content">
          <h1>
            <span className="first-title">zænith</span>
            <span className="second-title">web</span>
            <div className="logo-container">
              <img src={BigLogo} />
            </div>
          </h1>
          <p className="subtitle">
            Project your vision <span>into the web</span>
          </p>
          <p className="intro">
            Transformons vos idées en réalité numérique. Projetez votre vision
            dans le web avec des sites vitrines et e-commerce qui marquent les
            esprits et favorisent la croissance de votre activité en ligne.
          </p>
          <div className="btn-container">
            <Link
              to="contact"
              className="btn-style"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              Discutons de votre projet
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
