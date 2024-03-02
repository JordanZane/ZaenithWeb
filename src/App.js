import React, { useState } from 'react';

import Home from './pages/Home/Home';
import Navigation from './components/Navigation/Navigation';
import WorksPage from './pages/Works/WorksPage';
import Footer from './components/Sections/Footer';
import AnimatedCursor from 'react-animated-cursor';
import './styles/_scss/main.scss';

function App() {
  const [showWorksPage, setShowWorksPage] = useState(false);

  const handleShowWorksPage = (e) => {
    e.preventDefault();
    setShowWorksPage(true);
    setTimeout(() => {
      const homeElement = document.getElementById('worksPage');
      if (homeElement) {
        homeElement.scrollIntoView({ behavior: 'smooth' });
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
      <AnimatedCursor
        color="23, 248, 140"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0.3}
        outerStyle={{
          mixBlendMode: 'exclusion',
        }}
      />
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
