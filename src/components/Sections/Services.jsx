import React from 'react';
import MediumLogo from '../../assets/images/medium-logo-icon.svg';

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-header hidden">
          <h2 className="hidden">Services</h2>
          <div className="img-container">
            <img className="hidden" src={MediumLogo} alt="" />
          </div>
        </div>
        <div className="section-content">
          <div className="service-content">
            <p className="big-title">Développement</p>
            <div className="line"></div>
            <p className="service-desc">
              Sites vitrines ou plateformes E-commerce, je m'occupe de
              l'intégration harmonieuse de vos maquettes, assurant une
              expérience fluide sur tous les appareils. Chaque élément est
              soigneusement positionné, créant ainsi une navigation intuitive et
              adaptée à tous les utilisateurs.
            </p>
          </div>
          <div className="service-content">
            <p className="service-desc">
              Des animations et des transitions soigneusement pensées pour
              élever l'interactivité de votre site web. Chaque mouvement est
              conçu pour améliorer l'expérience utilisateur, créant ainsi une
              immersion captivante à chaque visite.
            </p>
            <div className="line"></div>
            <p className="big-title">UX Design</p>
          </div>
          <div className="service-content">
            <p className="big-title">SEO</p>
            <div className="line"></div>
            <p className="service-desc">
              Je déploie une approche SEO stratégique pour renforcer la présence
              en ligne de votre marque. En optimisant le copywriting, les
              sitemaps, les meta tags, et les balises OpenGraph, tout en
              garantissant la performance, la sémantique, et le respect des
              normes W3C, j'améliore votre visibilité dans les classements de
              recherche.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
