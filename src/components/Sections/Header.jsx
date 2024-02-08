import React from 'react';
import BigLogo from '../../assets/images/big-logo-icon.svg';

const Header = () => {
  return (
    <header id="home" className="section">
      <div className="container">
        <div className="header-content">
          <h1>
            zænith <span>web</span>
            <div className="logo-container">
              <img src={BigLogo} />
            </div>
          </h1>
          <p className="subtitle">
            Project your vision <span>into the web</span>
          </p>
          <p>
            Transformons vos idées en réalité numérique. Projetez votre vision
            dans le web avec des sites vitrines et e-commerce qui marquent les
            esprits et favorisent la croissance de votre activité en ligne.
          </p>
          <div className="btn-container">
            <a href="/" className="btn-style">
              Discutons de votre projet
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
