import React from 'react';

import ArrowRight from '../../assets/images/arrow-right.svg';
import WebAgency from '../../assets/images/web-agency.jpg';
import Restoh from '../../assets/images/restoh.jpg';
import Efitax from '../../assets/images/efitax.jpg';

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
              <img src={WebAgency} alt="Web Agency - Template for Web Agency" />
            </div>
            <div className="roles">
              <span>Site vitrine</span>
              <span>Template</span>
              <span>Développement Frontend</span>
            </div>
            <p className="description">
              Création de maquette et réalisation d'un template d'agence en
              React Js (Single Page application)
            </p>
            <div className="btn-container">
              <div className="btn-style">Voir le site</div>
            </div>
          </div>
          <div className="work-container odd-work">
            <h3>Restoh</h3>
            <div className="img-container">
              <img src={Restoh} alt="Restoh - Template for French restaurant" />
            </div>
            <div className="roles">
              <span>Site vitrine</span>
              <span>Template</span>
              <span>Développement Frontend</span>
            </div>
            <p className="description">
              Création de maquette et réalisation d'un template de restaurant en
              React Js (Single Page application)
            </p>
            <div className="btn-container">
              <div className="btn-style">Voir le site</div>
            </div>
          </div>
          <div className="work-container">
            <h3>Efitax Expertises</h3>
            <div className="img-container">
              <img src={Efitax} alt="Efitax - Bureau comptable digitalisé" />
            </div>
            <div className="roles">
              <span>Site vitrine</span>
              <span>Développement Frontend</span>
            </div>
            <p className="description">
              Intégration de la maquette en Html5/Cs33 & CMS, installation et
              configuration des modules
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
              Création de maquette et réalisation d'un template d'agence en
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
