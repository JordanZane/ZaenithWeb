import React from 'react';

import Home from './pages/Home/Home';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Sections/Footer';

import ScrollAnim from './components/ScrollAnim/ScrollAnim';

import './styles/_scss/main.scss';

function App() {
  return (
    <>
      <ScrollAnim />
      <Navigation />
      <Home />
      <Footer />
    </>
  );
}

export default App;
