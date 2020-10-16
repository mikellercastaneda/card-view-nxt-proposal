import { combineReducers } from 'redux';
// import all the reducers
import cardsReducer from './cardsReducer';

export default combineReducers({
    cards: cardsReducer
});