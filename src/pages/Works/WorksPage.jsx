import React from 'react';
import MediumLogo from '../../assets/images/medium-logo-icon.svg';

import WebAgency from '../../assets/images/web-agency.jpg';
import Restoh from '../../assets/images/restoh.jpg';
import Efitax from '../../assets/images/efitax.jpg';
import FermePetelles from '../../assets/images/ferme-des-petelles.jpg';

const WorksPage = () => {
  return (
    <div className="works">
      <div className="container">
        <div className="section-header">
          <h1>Références</h1>
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
        </div>
      </div>
    </div>
  );
};

export default WorksPage;
