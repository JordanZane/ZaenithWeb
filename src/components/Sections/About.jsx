import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 12,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
  };
  return (
    <section className="section" id="about">
      <div className="blue-blur-circle"></div>
      <div className="container">
        <div className="section-header hidden">
          <h2 className="hidden">à propos</h2>
          <div className="img-container">
            <img className="hidden" src={MediumLogo} alt="" />
          </div>
        </div>
        <div className="section-content">
          <div className="description hidden">
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
        <Slider {...settings}>
          <div>
            <img src={HtmlLogo} alt="Html5" title="Html5" />
          </div>
          <div>
            <img src={CssLogo} alt="Css3" title="Css3" />
          </div>
          <div>
            <img src={JsLogo} alt="JavaScript" title="JavaScript" />
          </div>
          <div>
            <img src={BootstrapLogo} alt="Bootstrap 5" title="Bootstrap 5" />
          </div>
          <div>
            <img src={SassLogo} alt="Sass" title="Sass" />
          </div>
          <div>
            <img src={ReactLogo} alt="React Js" title="React Js" />
          </div>
          <div>
            <img src={XdLogo} alt="Adobe XD" title="Adobe XD" />
          </div>
          <div>
            <img src={PhotoshopLogo} alt="Photoshop" title="Photoshop" />
          </div>
          <div>
            <img src={FigmaLogo} alt="Figma" title="Figma" />
          </div>
          <div>
            <img src={PrestashopLogo} alt="Prestashop" title="Prestashop" />
          </div>
          <div>
            <img src={ShopifyLogo} alt="Shopify" title="Shopify" />
          </div>
          <div>
            <img src={WordpressLogo} alt="Wordpress" title="Wordpress" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default About;
