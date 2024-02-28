import React from 'react';
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
          <form action="">
            <div className="form-content hidden name-input">
              <label htmlFor="name">Votre nom*</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-content hidden email-input">
              <label htmlFor="email">Votre e-mail*</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-content hidden subject-input">
              <label htmlFor="subject">Sujet*</label>
              <select name="subject" id="subject">
                <option value=""></option>
                <option value="site-vitrine">Site vitrine</option>
                <option value="site-vitrine">Site e-commerce</option>
                <option value="site-vitrine">Autre</option>
              </select>
            </div>
            <div className="form-content hidden company-input">
              <label htmlFor="company">Nom d'entreprise*</label>
              <input type="text" id="company" name="company" />
            </div>
            <div className="form-content hidden message-input">
              <label htmlFor="message">Message*</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <p className="required-field hidden">*Champs requis</p>
            <div className="btn-container">
              <div className="btn-style hidden">C'est parti !</div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
