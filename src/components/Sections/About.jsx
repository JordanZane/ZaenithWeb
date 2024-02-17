import React from 'react';
import MediumLogo from '../../assets/images/medium-logo-icon.svg';
import HtmlLogo from '../../assets/images/html-icon.svg';
import CssLogo from '../../assets/images/css-icon.svg';
import JsLogo from '../../assets/images/js-icon.svg';
import BootstrapLogo from '../../assets/images/bootstrap-icon.svg';
import ReactLogo from '../../assets/images/react-icon.svg';
import SassLogo from '../../assets/images/sass-icon.svg';
import XdLogo from '../../assets/images/xd-icon.svg';
import PhotoshopLogo from '../../assets/images/photoshop-icon.svg';
import FigmaLogo from '../../assets/images/figma-icon.svg';
import WordpressLogo from '../../assets/images/wordpress-icon.svg';
import PrestashopLogo from '../../assets/images/prestashop-icon.svg';
import ShopifyLogo from '../../assets/images/shopify-icon.svg';

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header hidden">
          <h2 className="hidden">à propos</h2>
          <div className="img-container">
            <img className="hidden" src={MediumLogo} alt="" />
          </div>
        </div>
        <div className="section-content">
          <div className="description">
            <p>
              Hello ! Moi c'est <span>Jordan</span>, je me consacre à la
              réalisation de vos idées en projet web. Chaque animation, chaque
              ligne de code, est façonnée pour donner vie et transformer vos
              idées en une réalité interactive
            </p>
          </div>
        </div>
      </div>
      <div className="skills-container">
        <img src={HtmlLogo} alt="Html5" />
        <img src={CssLogo} alt="Css3" />
        <img src={JsLogo} alt="JavaScript" />
        <img src={BootstrapLogo} alt="Bootstrap 5" />
        <img src={SassLogo} alt="Sass" />
        <img src={ReactLogo} alt="React Js" />
        <img src={XdLogo} alt="Adobe XD" />
        <img src={PhotoshopLogo} alt="Photoshop" />
        <img src={FigmaLogo} alt="Figma" />
        <img src={PrestashopLogo} alt="Prestashop" />
        <img src={ShopifyLogo} alt="Shopify" />
        <img src={WordpressLogo} alt="Wordpress" />
      </div>
    </section>
  );
};

export default About;
