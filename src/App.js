import React from 'react';
// Redux 
import { Provider } from 'react-redux';
import store from './store/store';
//Components
import CardViewContainer from './components/CardViewContainer/CardViewContainer'
//Styling
import './assets/styles/App.scss';

function App() {
  return (
    <Provider store={store}>
      <CardViewContainer />
    </Provider>
  );
}

export default App;