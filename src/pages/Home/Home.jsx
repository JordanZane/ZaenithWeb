import React from 'react';

import Header from '../../components/Sections/Header';
import Works from '../../components/Sections/Works';
import Services from '../../components/Sections/Services';
import About from '../../components/Sections/About';
import Contact from '../../components/Sections/Contact';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Works />
      <Services />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
