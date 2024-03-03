import React from 'react';
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
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
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
            <div className="triangle-container">
              <svg className="triangle" viewBox="0 0 100 100">
                <path className="hidden" d="M 50 0 L 100 100 L 0 100 Z" />
              </svg>
            </div>
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
            <img src={HtmlLogo} alt="Html5" title="Html5" loading="lazy" />
          </div>
          <div>
            <img src={CssLogo} alt="Css3" title="Css3" loading="lazy" />
          </div>
          <div>
            <img
              src={JsLogo}
              alt="JavaScript"
              title="JavaScript"
              loading="lazy"
            />
          </div>
          <div>
            <img
              src={BootstrapLogo}
              alt="Bootstrap 5"
              title="Bootstrap 5"
              loading="lazy"
            />
          </div>
          <div>
            <img src={SassLogo} alt="Sass" title="Sass" loading="lazy" />
          </div>
          <div>
            <img
              src={ReactLogo}
              alt="React Js"
              title="React Js"
              loading="lazy"
            />
          </div>
          <div>
            <img src={XdLogo} alt="Adobe XD" title="Adobe XD" loading="lazy" />
          </div>
          <div>
            <img
              src={PhotoshopLogo}
              alt="Photoshop"
              title="Photoshop"
              loading="lazy"
            />
          </div>
          <div>
            <img src={FigmaLogo} alt="Figma" title="Figma" loading="lazy" />
          </div>
          <div>
            <img
              src={PrestashopLogo}
              alt="Prestashop"
              title="Prestashop"
              loading="lazy"
            />
          </div>
          <div>
            <img
              src={ShopifyLogo}
              alt="Shopify"
              title="Shopify"
              loading="lazy"
            />
          </div>
          <div>
            <img
              src={WordpressLogo}
              alt="Wordpress"
              title="Wordpress"
              loading="lazy"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default About;
