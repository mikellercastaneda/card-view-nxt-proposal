//import action types
import {
  GET_CARDS,
  ADD_ADJUSTMENT
} from '../actions/types';
//declare initalState
const initialState = {
  cards: {
    hubs: {},
    lanes: {}
  },
  adjustments: [],
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
    case ADD_ADJUSTMENT:
      return {
        ...state,
        adjustments: [
          ...state.adjustments,
          action.payload
        ]
      };
    default:
      return state;
  }
}