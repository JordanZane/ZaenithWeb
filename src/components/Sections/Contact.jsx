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
          <h3>
            Une idée ? Projeter votre vision <span>dans le web</span>
          </h3>
          <form action="">
            <div className="form-content">
              <label htmlFor="name">Votre nom*</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-content">
              <label htmlFor="email">Votre e-mail*</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-content">
              <label htmlFor="subject">Sujet*</label>
              <select name="subject" id="subject">
                <option value=""></option>
                <option value="site-vitrine">Site vitrine</option>
                <option value="site-vitrine">Site e-commerce</option>
                <option value="site-vitrine">Autre</option>
              </select>
            </div>
            <div className="form-content">
              <label htmlFor="company">Nom d'entreprise*</label>
              <input type="text" id="company" name="company" />
            </div>
            <div className="form-content">
              <label htmlFor="message">Message*</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="btn-container">
              <div className="btn-style">C'est parti !</div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
