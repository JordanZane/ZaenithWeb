import React from 'react';

import Home from './pages/Home/Home';
import Navigation from './components/Navigation/Navigation';
import FullScreenNav from './components/FullScreenNav';

import './styles/_scss/main.scss';

function App() {
  return (
    <>
      <Navigation />
      <FullScreenNav />
      <Home />
    </>
  );
}

export default App;
