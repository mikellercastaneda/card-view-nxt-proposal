//import action types
import {
  GET_CARDS,
  SET_VALUE_CHANGED,
  RESET_VALUE
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
    case SET_VALUE_CHANGED:
      console.log(action.payload);

      const parmIndex = state.cards.hubs[action.payload.hub]
        .findIndex(({ name, dt }) =>
          name === 'hubCapacity' ?
            (name === action.payload.name && dt === action.payload.dt) :
            (name === action.payload.name));

      const newCards = {
        cards: {
          hubs: {
            ...state.cards.hubs,
            [action.payload.hub]: [
              ...state.cards.hubs[action.payload.hub],
            ]
          },
          lanes: {
            ...state.cards.lanes
          }
        }
      }

      newCards.cards.hubs[action.payload.hub][parmIndex] = {
        ...state.cards.hubs[action.payload.hub][parmIndex],
        "valueChanged": action.payload.valueChanged
      };

      return {
        ...state,
        cards: newCards.cards
      };
    case RESET_VALUE:
      console.log(action.payload);
      return {
        ...state
      };
    default:
      return state;
  }
}