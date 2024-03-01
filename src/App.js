import React, { useState, useEffect } from 'react';

import Home from './pages/Home/Home';
import Navigation from './components/Navigation/Navigation';
import WorksPage from './pages/Works/WorksPage';
import Footer from './components/Sections/Footer';

import './styles/_scss/main.scss';

function App() {
  const [showWorksPage, setShowWorksPage] = useState(false);

  const handleShowWorksPage = (e) => {
    e.preventDefault();
    setShowWorksPage(true);
  };

  const handleHideWorksPage = (e) => {
    e.preventDefault();
    setShowWorksPage(false);
  };

  return (
    <>
      {showWorksPage ? (
        <WorksPage handleHideWorksPage={handleHideWorksPage} />
      ) : (
        <>
          <Navigation />
          <Home handleShowWorksPage={handleShowWorksPage} />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
