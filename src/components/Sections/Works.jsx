import React from 'react';

import ArrowRight from '../../assets/images/arrow-right.svg';
import WebAgency from '../../assets/images/web-agency.jpg';

const Works = () => {
  return (
    <section className="section" id="works">
      <div className="container">
        <div className="section-header">
          <h2>Références</h2>
          <div className="link-container">
            <a href="/">
              Voir plus <img src={ArrowRight} />
            </a>
          </div>
        </div>
        <div className="section-content wrapper">
          <div className="work-container">
            <h3>Web Agency</h3>
            <div className="img-container">
              <img src={WebAgency} alt="Web Agency - Template" />
            </div>
            <div className="roles">
              <span>Site vitrine</span>
              <span>Template</span>
              <span>Développement Frontend</span>
            </div>
            <p className="description">
              Création de maquette et réalisation d’un template d’agence en
              React Js (Single Page application)
            </p>
            <div className="btn-container">
              <div className="btn-style">Voir le site</div>
            </div>
          </div>
          <div className="work-container odd-work">
            <h3>Web Agency</h3>
            <div className="img-container">
              <img src={WebAgency} alt="Web Agency - Template" />
            </div>
            <div className="roles">
              <span>Site vitrine</span>
              <span>Template</span>
              <span>Développement Frontend</span>
            </div>
            <p className="description">
              Création de maquette et réalisation d’un template d’agence en
              React Js (Single Page application)
            </p>
            <div className="btn-container">
              <div className="btn-style">Voir le site</div>
            </div>
          </div>
          <div className="work-container">
            <h3>Web Agency</h3>
            <div className="img-container">
              <img src={WebAgency} alt="Web Agency - Template" />
            </div>
            <div className="roles">
              <span>Site vitrine</span>
              <span>Template</span>
              <span>Développement Frontend</span>
            </div>
            <p className="description">
              Création de maquette et réalisation d’un template d’agence en
              React Js (Single Page application)
            </p>
            <div className="btn-container">
              <div className="btn-style">Voir le site</div>
            </div>
          </div>
          <div className="work-container odd-work">
            <h3>Web Agency</h3>
            <div className="img-container">
              <img src={WebAgency} alt="Web Agency - Template" />
            </div>
            <div className="roles">
              <span>Site vitrine</span>
              <span>Template</span>
              <span>Développement Frontend</span>
            </div>
            <p className="description">
              Création de maquette et réalisation d’un template d’agence en
              React Js (Single Page application)
            </p>
            <div className="btn-container">
              <div className="btn-style">Voir le site</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
