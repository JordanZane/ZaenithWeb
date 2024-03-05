import React, { useState, useEffect, lazy, Suspense } from 'react';
import AnimatedCursor from 'react-animated-cursor';
import './styles/_scss/main.scss';

const Home = lazy(() => import('./pages/Home/Home'));
const WorksPage = lazy(() => import('./pages/Works/WorksPage'));
const Footer = lazy(() => import('./components/Sections/Footer'));
const LegalPage = lazy(() => import('./pages/Legal/Legal'));

const Navigation = lazy(() => import('./components/Navigation/Navigation'));

function App() {
  const [showWorksPage, setShowWorksPage] = useState(false);
  const [showLegalPage, setShowLegalPage] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const isMobileDevice = window.matchMedia('(max-width: 1024px)').matches;
      setIsMobile(isMobileDevice);
    };

    checkIfMobile();

    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

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

  const handleShowLegalPage = (e) => {
    e.preventDefault();
    setShowLegalPage(true);
    setTimeout(() => {
      const legalPage = document.getElementById('legal-page');
      if (legalPage) {
        legalPage.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  };

  const handleHideLegalPage = (e) => {
    e.preventDefault();
    setShowLegalPage(false);
    setTimeout(() => {
      const legalPage = document.getElementById('legal-page');
      if (legalPage) {
        legalPage.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
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
      {!isMobile && (
        <AnimatedCursor
          color={'23, 248, 140'}
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={1.7}
          outerAlpha={0.3}
          outerStyle={{
            mixBlendMode: 'exclusion',
          }}
        ></AnimatedCursor>
      )}

      <Suspense
        fallback={
          <div>
            <h1>Loading...</h1>
          </div>
        }
      >
        {showLegalPage ? (
          <LegalPage handleHideLegalPage={handleHideLegalPage} />
        ) : showWorksPage ? (
          <WorksPage
            handleHideWorksPage={handleHideWorksPage}
            handleContactLink={handleContactLink}
          />
        ) : (
          <>
            <Navigation />
            <Home handleShowWorksPage={handleShowWorksPage} />
            <Footer handleShowLegalPage={handleShowLegalPage} />
          </>
        )}
      </Suspense>
    </>
  );
}

export default App;
