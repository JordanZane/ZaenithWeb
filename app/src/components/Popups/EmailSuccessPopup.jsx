import React from 'react';

const EmailSuccessPopup = ({ handleClosePopups }) => {
  return (
    <div className="success-popup">
      <div className="btn-container" onClick={handleClosePopups}>
        X
      </div>
      <p>
        E-mail envoyé avec succès, je vous répondrai dans les plus brefs délais.
      </p>
    </div>
  );
};

export default EmailSuccessPopup;
