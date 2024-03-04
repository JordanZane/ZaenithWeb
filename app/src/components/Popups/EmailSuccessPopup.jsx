import React from 'react';

const EmailSuccessPopup = ({ handleClosePopups }) => {
  return (
    <div className="success-popup">
      <div className="btn-container" onClick={handleClosePopups}>
        X
      </div>
      <p>
        E-mail envoyé avec succés ! Je vous répondrais dans les plus délais.
      </p>
    </div>
  );
};

export default EmailSuccessPopup;
