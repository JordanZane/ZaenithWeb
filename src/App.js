import React from 'react';

import Home from './pages/Home/Home';
import Navigation from './components/Navigation/Navigation';

import './styles/_scss/main.scss';

function App() {
  return (
    <>
      <Navigation />
      <Home />
    </>
  );
}

export default App;
