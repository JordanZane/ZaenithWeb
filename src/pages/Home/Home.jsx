import React from 'react';
import { Link } from 'react-scroll';

import Header from '../../components/Sections/Header';
import Works from '../../components/Sections/Works';
import Services from '../../components/Sections/Services';
import About from '../../components/Sections/About';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Works />
      <Services />
      <About />
    </div>
  );
};

export default Home;
