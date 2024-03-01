import React, { useState } from 'react';

import Home from './pages/Home/Home';
import Navigation from './components/Navigation/Navigation';
import WorksPage from './pages/Works/WorksPage';
import Footer from './components/Sections/Footer';

import './styles/_scss/main.scss';

function App() {
  const [showWorksPage, setShowWorksPage] = useState(false);

  const handleShowWorksPage = (e) => {
    e.preventDefault();
    document.querySelector('body').style.overflowX = 'hidden';
    setShowWorksPage(true);
    setTimeout(() => {
      const worksPageElement = document.getElementById('worksPage');
      if (worksPageElement) {
        worksPageElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  };

  const handleHideWorksPage = (e) => {
    e.preventDefault();
    setShowWorksPage(false);
    setTimeout(() => {
      const homeElement = document.getElementById('home');
      if (homeElement) {
        homeElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  };

  const handleContactLink = (e) => {
    e.preventDefault();
    setShowWorksPage(false);
    setTimeout(() => {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  };

  return (
    <>
      {showWorksPage ? (
        <WorksPage
          handleHideWorksPage={handleHideWorksPage}
          handleContactLink={handleContactLink}
        />
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
