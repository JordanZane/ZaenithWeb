import React from 'react';
import { Link } from 'react-scroll';

import Header from '../../components/Sections/Header';
import Works from '../../components/Sections/Works';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Works />
    </div>
  );
};

export default Home;
