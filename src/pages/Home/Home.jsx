import React from 'react';

import Header from '../../components/Sections/Header';
import Works from '../../components/Sections/Works';
import Services from '../../components/Sections/Services';
import About from '../../components/Sections/About';
import Contact from '../../components/Sections/Contact';

import ScrollAnim from '../../components/ScrollAnim/ScrollAnim';

const Home = ({ handleShowWorksPage }) => {
  return (
    <div className="home">
      <ScrollAnim />
      <Header />
      <Works handleShowWorksPage={handleShowWorksPage} />
      <Services />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
