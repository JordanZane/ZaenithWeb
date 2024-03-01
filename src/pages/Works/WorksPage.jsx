import React from 'react';
import MediumLogo from '../../assets/images/medium-logo-icon.svg';
import ArrowRight from '../../assets/images/arrow-right.svg';

import WebAgency from '../../assets/images/web-agency.jpg';
import Restoh from '../../assets/images/restoh.jpg';
import Efitax from '../../assets/images/efitax.jpg';
import FermePetelles from '../../assets/images/ferme-des-petelles.jpg';

import ScrollAnim from '../../components/ScrollAnim/ScrollAnim';

const WorksPage = ({ handleHideWorksPage }) => {
  return (
    <div className="works-page">
      <ScrollAnim />
      <div className="container">
        <div className="btn-container">
          <a href="/" onClick={handleHideWorksPage}>
            <img src={ArrowRight} /> Accueil
          </a>
        </div>
        <div className="section-header hidden">
          <h2 className="hidden">Références</h2>
          <div className="img-container">
            <img src={MediumLogo} alt="" />
          </div>
        </div>
        <div className="section-content wrapper">
          <div className="work-container">
            <h3>Web Agency</h3>
            <div className="img-container">
              <a
                href="https://web-agency.jordanzanetti.fr/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={WebAgency}
                  alt="Web Agency - Template for Web Agency"
                />
              </a>
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
              <a
                href="https://web-agency.jordanzanetti.fr/"
                target="_blank"
                rel="noreferrer"
                className="btn-style"
              >
                Voir le site
              </a>
            </div>
          </div>
          <div className="work-container odd-work">
            <h3>Restoh</h3>
            <div className="img-container">
              <a
                href="https://restoh.jordanzanetti.fr/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Restoh}
                  alt="Restoh - Template for French restaurant"
                />
              </a>
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
              <a
                href="https://restoh.jordanzanetti.fr/"
                target="_blank"
                rel="noreferrer"
                className="btn-style"
              >
                Voir le site
              </a>
            </div>
          </div>
          <div className="work-container">
            <h3>Efitax Expertises</h3>
            <div className="img-container">
              <a
                href="https://www.efitax.lu/fr"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Efitax} alt="Efitax - Bureau comptable digitalisé" />
              </a>
            </div>
            <div className="roles">
              <span>Site vitrine</span>
              <span>CMS</span>
              <span>Développement Frontend</span>
            </div>
            <p className="description">
              Intégration de la maquette en Html5/Cs33 & CMS, installation et
              configuration des modules
            </p>
            <div className="btn-container">
              <a
                href="https://www.efitax.lu/fr"
                target="_blank"
                rel="noreferrer"
                className="btn-style"
              >
                Voir le site
              </a>
            </div>
          </div>
          <div className="work-container odd-work">
            <h3>Ferme des Pételles</h3>
            <div className="img-container">
              <a
                href="https://www.fermedespetelles.be/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={FermePetelles}
                  alt="Ferme des Pételles - Ferme pédagogique"
                />
              </a>
            </div>
            <div className="roles">
              <span>Site vitrine</span>
              <span>Wordpress</span>
              <span>Développement Frontend</span>
            </div>
            <p className="description">
              Intégration de la maquette en Html5/Cs33 & Wordpress, installation
              et configuration des modules
            </p>
            <div className="btn-container">
              <a
                href="https://www.fermedespetelles.be/"
                target="_blank"
                rel="noreferrer"
                className="btn-style"
              >
                Voir le site
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksPage;