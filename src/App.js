import React from 'react';
// Redux 
import { Provider } from 'react-redux';
import store from './store/store';
//Components
import CardViewContainer from './components/CardViewContainer/CardViewContainer'
// import CardContainerInfinity from './components/CardContainerInfinity/CardContainerInfinity'
//Styling
import './assets/styles/App.scss';

function App() {
  return (
    <Provider store={store}>
      <CardViewContainer />
      {/* <CardContainerInfinity /> */}
    </Provider>
  );
}

export default App;