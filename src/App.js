import React from 'react';

import CardViewItem from './components/CardViewItem/CardViewItem'

import './assets/styles/App.scss';

function App() {
  return (
    <>
      <CardViewItem title="ATLANTA" subtitle="Hub Capacity" />
      <CardViewItem title="BALTIMORE" subtitle="Hub Capacity" />
      <CardViewItem title="CALGARY" subtitle="Hub Capacity" />
      <CardViewItem title="CHARLOTTE" subtitle="Hub Capacity" />
      <CardViewItem title="CHICAGO" subtitle="Hub Capacity" />
    </>
  );
}

export default App;