//import action types
import {
  GET_CARDS
} from '../actions/types';
//declare initalState
const initialState = {
  cards: null
};
//switch action type and exports
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS:
      return {
        ...state,
        cards: action.payload
      };
    default:
      return state;
  }
}