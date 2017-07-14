import React from 'react';

import ItemList from '../ItemsList';

import './Main.scss';

const Main = () => (
  <div className="main">
    <header className="main__header">
      <span className="main__title">Flea market</span>
    </header>
    <div className="main__content">
      <ItemList />
    </div>
  </div>
);

export default Main;
