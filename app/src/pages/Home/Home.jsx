import React, { lazy, Suspense } from 'react';

const ScrollAnim = React.lazy(() =>
  import('../../components/ScrollAnim/ScrollAnim')
);

const Header = React.lazy(() => import('../../components/Sections/Header'));
const Works = React.lazy(() => import('../../components/Sections/Works'));
const Services = React.lazy(() => import('../../components/Sections/Services'));
const About = React.lazy(() => import('../../components/Sections/About'));
const Contact = React.lazy(() => import('../../components/Sections/Contact'));

const Home = ({ handleShowWorksPage }) => {
  return (
    <main className="home">
      <Suspense>
        <ScrollAnim />
        <Header />
        <Works handleShowWorksPage={handleShowWorksPage} />
        <Services />
        <About />
        <Contact />
      </Suspense>
    </main>
  );
};

export default Home;
