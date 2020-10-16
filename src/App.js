import React from 'react';
// Redux 
import { Provider } from 'react-redux';
import store from './store/store';
//Components
import CardViewItem from './components/CardViewItem/CardViewItem'
//Styling
import './assets/styles/App.scss';

function App() {
  return (
    <Provider store={store}>
      <CardViewItem title="ATLANTA" subtitle="Hub Capacity" />
      <CardViewItem title="BALTIMORE" subtitle="Hub Capacity" />
      <CardViewItem title="CALGARY" subtitle="Hub Capacity" />
      <CardViewItem title="CHARLOTTE" subtitle="Hub Capacity" />
      <CardViewItem title="CHICAGO" subtitle="Hub Capacity" />
    </Provider>
  );
}

export default App;