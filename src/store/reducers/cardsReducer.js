//import action types
import {
  GET_CARDS
} from '../actions/types';
//declare initalState
const initialState = {
  cards: {
    hubs: {},
    lanes: {}
  },
  order: 'asc',
  orderBy: 'HUB'
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