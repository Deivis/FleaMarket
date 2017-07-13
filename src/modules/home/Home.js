import React from 'react';

import InConstruction from '../../components/InConstructionWarning';

import './Home.scss';

const Home = () => (
  <div className="home">
    <header className="home__header">
      <span className="home__title">Flea market</span>
    </header>
    <div className="home__content">
      <InConstruction />
    </div>
  </div>
);

export default Home;
