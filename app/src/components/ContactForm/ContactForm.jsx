import React, { useState } from 'react';
import EmailSuccessPopup from '../Popups/EmailSuccessPopup';
import EmailFailedPopup from '../Popups/EmailFailedPopup';

const ContactForm = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [submittingForm, setSubmittingForm] = useState(false);
  const [handleSuccessPopup, setHandleSuccessPopup] = useState(false);
  const [handleFailedPopup, setHandleFailedPopup] = useState(false);

  const handleSubmitContactForm = (e) => {
    e.preventDefault();

    const userNameData = userName;
    const userEmailData = userEmail;
    const subjectData = subject;
    const companyNameData = companyName;
    const userMessageData = userMessage;

    const formDatas = {
      userName: userNameData,
      userEmail: userEmailData,
      subject: subjectData,
      companyName: companyNameData,
      userMessage: userMessageData,
    };

    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    setSubmittingForm(true);

    fetch('http://localhost:3001/send-email', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(formDatas),
    })
      .then((response) => {
        if (response.ok) {
          setUserName('');
          setUserEmail('');
          setSubject('');
          setCompanyName('');
          setSubject('');
          setUserMessage('');
          setSubmittingForm(false);
          setHandleSuccessPopup(true);
        } else {
          console.log('Error when sending email');
          setSubmittingForm(false);
          setHandleFailedPopup(true);
        }
      })
      .catch((error) => {
        console.log('Error when sending email : ', error);
        setSubmittingForm(false);
        setHandleFailedPopup(true);
      });
  };

  const handleClosePopups = (e) => {
    e.preventDefault();
    setHandleSuccessPopup(false);
    setHandleFailedPopup(false);
  };

  return (
    <form onSubmit={handleSubmitContactForm} action="">
      <div className="form-content hidden name-input">
        <label htmlFor="name">Votre nom*</label>
        <input
          type="text"
          id="name"
          name="name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
          placeholder="John Smith"
        />
      </div>
      <div className="form-content hidden email-input">
        <label htmlFor="email">Votre e-mail*</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          required
          placeholder="johnsmith@example.com"
        />
      </div>
      <div className="form-content hidden subject-input">
        <label htmlFor="subject">Sujet*</label>
        <select
          name="subject"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        >
          <option value=""></option>
          <option value="Site-vitrine">Site vitrine</option>
          <option value="Site-e-commerce">Site e-commerce</option>
          <option value="Autre">Autre</option>
        </select>
      </div>
      <div className="form-content hidden company-input">
        <label htmlFor="company">Nom d'entreprise</label>
        <input
          type="text"
          id="company"
          name="company"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="John Smith Co"
        />
      </div>
      <div className="form-content hidden message-input">
        <label htmlFor="message">Message*</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          required
          placeholder="Je souhaite créer un site e-commerce pour vendre des produits de beauté naturels fabriqués localement..."
        ></textarea>
      </div>
      <p className="required-field hidden">*Champs requis</p>
      <div className="btn-container">
        <button className="btn-style hidden" type="submit">
          {submittingForm ? 'Envoi en cours' : "C'est parti !"}
        </button>
      </div>
      <div className="popups-container">
        {handleSuccessPopup ? (
          <EmailSuccessPopup handleClosePopups={handleClosePopups} />
        ) : (
          ''
        )}
        {handleFailedPopup ? (
          <EmailFailedPopup handleClosePopups={handleClosePopups} />
        ) : (
          ''
        )}
      </div>
    </form>
  );
};

export default ContactForm;
