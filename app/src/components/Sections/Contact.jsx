import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import MediumLogo from '../../assets/images/medium-logo-icon.svg';
import emailIcon from '../../assets/images/email-icon.png';
import phoneIcon from '../../assets/images/phone-icon.png';
import facebookIcon from '../../assets/images/facebook-icon.png';
import maltIcon from '../../assets/images/malt-icon.png';

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header hidden">
          <h2 className="hidden">Contact</h2>
          <div className="img-container">
            <img className="hidden" src={MediumLogo} alt="" />
          </div>
        </div>
        <div className="sections-container">
          <div className="section-content">
            <h3 className="hidden">
              Projeter votre vision <span>dans le web</span>
            </h3>
            <ContactForm />
          </div>
          <div className="section-content">
            <h3 className="hidden">Informations</h3>
            <div className="infos-content hidden">
              <a href="mailto:contact@jordanzanetti.fr">
                <img src={emailIcon} alt="Email" />
                <p>contact@jordanzanetti.fr</p>
              </a>
            </div>
            <div className="infos-content phone-content hidden">
              <a href="tel:0666179121">
                <img src={phoneIcon} alt="Téléphone" />
                <p>06.66.17.91.21</p>
              </a>
            </div>
            <div className="infos-content facebook-content hidden">
              <a
                href="https://www.facebook.com/profile.php?id=61557320190202&locale=fr_FR"
                target="_blank"
                rel="noreferrer"
              >
                <img src={facebookIcon} alt="Facebook" />
                <p>Suivez-moi sur Facebook !</p>
              </a>
            </div>
            <div className="infos-content malt-content hidden">
              <a
                href="https://www.malt.fr/profile/jordanzanettideveloppementweb?modifyAvailability=true"
                target="_blank"
                rel="noreferrer"
              >
                <img src={maltIcon} alt="Malt" />
                <p>Visitez mon profil malt !</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
