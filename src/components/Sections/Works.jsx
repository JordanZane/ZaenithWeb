import React from 'react';

import ArrowRight from '../../assets/images/arrow-right.svg';
import WebAgency from '../../assets/images/web-agency.jpg';
import Restoh from '../../assets/images/restoh.jpg';
import Efitax from '../../assets/images/efitax.jpg';
import FermePetelles from '../../assets/images/ferme-des-petelles.jpg';

const Works = () => {
  return (
    <section className="section" id="works">
      <div className="container">
        <div className="section-header hidden">
          <h2 className="hidden">Références</h2>
          <div className="link-container hidden">
            <a href="/">
              Voir plus <img src={ArrowRight} />
            </a>
          </div>
        </div>
        <div className="section-content wrapper">
          <div className="work-container">
            <h3 className="hidden">Web Agency</h3>
            <div className="img-container">
              <a
                href="https://web-agency.jordanzanetti.fr/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={WebAgency}
                  alt="Web Agency - Template for Web Agency"
                  className="hidden"
                />
              </a>
            </div>
            <div className="roles hidden">
              <span>Site vitrine</span>
              <span>Template</span>
              <span>Développement Frontend</span>
            </div>
            <p className="description hidden">
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
            <h3 className="hidden">Restoh</h3>
            <div className="img-container">
              <a
                href="https://restoh.jordanzanetti.fr/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Restoh}
                  alt="Restoh - Template for French restaurant"
                  className="hidden"
                />
              </a>
            </div>
            <div className="roles hidden">
              <span>Site vitrine</span>
              <span>Template</span>
              <span>Développement Frontend</span>
            </div>
            <p className="description hidden">
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
            <h3 className="hidden">Efitax Expertises</h3>
            <div className="img-container">
              <a
                href="https://www.efitax.lu/fr"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Efitax}
                  alt="Efitax - Bureau comptable digitalisé"
                  className="hidden"
                />
              </a>
            </div>
            <div className="roles hidden">
              <span>Site vitrine</span>
              <span>CMS</span>
              <span>Développement Frontend</span>
            </div>
            <p className="description hidden">
              Intégration de la maquette en Html5/Cs33 & CMS, installation et
              configuration des modules
            </p>
            <div className="btn-container">
              <div className="btn-style">
                <a
                  href="https://www.efitax.lu/fr"
                  target="_blank"
                  rel="noreferrer"
                >
                  Voir le site
                </a>
              </div>
            </div>
          </div>
          <div className="work-container odd-work">
            <h3 className="hidden">Ferme des Pételles</h3>
            <div className="img-container">
              <a
                href="https://www.fermedespetelles.be/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={FermePetelles}
                  alt="Ferme des Pételles - Ferme pédagogique"
                  className="hidden"
                />
              </a>
            </div>
            <div className="roles hidden">
              <span>Site vitrine</span>
              <span>Wordpress</span>
              <span>Développement Frontend</span>
            </div>
            <p className="description hidden">
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
    </section>
  );
};

export default Works;
