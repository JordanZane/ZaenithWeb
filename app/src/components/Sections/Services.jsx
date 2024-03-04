import React from 'react';
import MediumLogo from '../../assets/images/medium-logo-icon.svg';

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="green-blur-circle"></div>
      <div className="container">
        <div className="section-header hidden">
          <h2 className="hidden">Services</h2>
          <div className="img-container">
            <img className="hidden" src={MediumLogo} alt="" />
          </div>
        </div>
        <div className="section-content">
          <div className="service-content">
            <p className="big-title fadeLeft hidden">Développement</p>
            <div className="line"></div>
            <p className="service-desc fadeRight hidden">
              <strong>Sites vitrines</strong> ou{' '}
              <strong>plateformes E-commerce</strong>, je créer des sites web{' '}
              <strong>modernes</strong> et <strong>performants</strong>, je
              m'occupe de l'intégration harmonieuse de vos maquettes, assurant
              une expérience fluide sur tous les appareils, créant ainsi une
              navigation intuitive et adaptée à tous les utilisateurs.
            </p>
          </div>
          <div className="service-content odd">
            <p className="service-desc fadeLeft hidden">
              Des <strong>animations</strong> et des{' '}
              <strong>transitions</strong> soigneusement pensées pour élever
              l'interactivité de votre site web. Chaque mouvement est conçu pour
              améliorer <strong>l'expérience utilisateur</strong>, créant ainsi
              une immersion captivante à chaque visite.
            </p>
            <div className="line"></div>
            <p className="big-title fadeRight hidden">UX Design</p>
          </div>
          <div className="service-content">
            <p className="big-title fadeLeft hidden">SEO</p>
            <div className="line"></div>
            <p className="service-desc fadeRight hidden">
              Je m'assure de l'optimisation de votre <strong>SEO</strong> pour
              renforcer la présence en ligne de votre marque. En optimisant le{' '}
              <strong>copywriting</strong>, <strong>les sitemaps</strong>, les{' '}
              <strong>meta tags</strong> , et les{' '}
              <strong>balises OpenGraph</strong>, tout en garantissant la{' '}
              <strong>performance</strong>, la <strong>sémantique</strong>, et
              le <strong>respect des normes W3C</strong>. J'améliore votre
              visibilité dans les classements de recherche.
            </p>
          </div>
        </div>
      </div>
      <div className="green-blur-circle second-circle"></div>
    </section>
  );
};

export default Services;
