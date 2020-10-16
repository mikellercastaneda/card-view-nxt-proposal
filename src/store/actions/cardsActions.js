//import axios from 'axios';

//import actionTypes
import {
  GET_CARDS
} from './types'; 
//export functions and dispatchers
//dispatchers is for integration
export const getCards = () => {
  return {
    type: GET_CARDS,
    payload: [1,2,3]
  };
};

//line 11 add payload with the fake json response body of the cards