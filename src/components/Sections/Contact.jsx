import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import MediumLogo from '../../assets/images/medium-logo-icon.svg';

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
        <div className="section-content">
          <h3 className="hidden">
            Une idée ? Projeter votre vision <span>dans le web</span>
          </h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
