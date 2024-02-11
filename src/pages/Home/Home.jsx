import React from 'react';
import { Link } from 'react-scroll';

import Header from '../../components/Sections/Header';
import Works from '../../components/Sections/Works';
import Services from '../../components/Sections/Services';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Works />
      <Services />
    </div>
  );
};

export default Home;
