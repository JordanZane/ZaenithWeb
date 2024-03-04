import React from 'react';

const EmailFailedPopup = ({ handleClosePopups }) => {
  return (
    <div className="failed-popup">
      <div className="btn-container" onClick={handleClosePopups}>
        X
      </div>
      <p>Problème avec l'envoi de l'email</p>
    </div>
  );
};

export default EmailFailedPopup;
