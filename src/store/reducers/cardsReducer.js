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

const isLane = (cardName) => (
  cardName.split("-").length === 2
);

const getInputIndex = (state, payload) => (
  state.cards[isLane(payload.cardName) ? "lanes" : "hubs"][payload.cardName]
    .findIndex(({ name, dt }) => name === 'hubCapacity' ?
      (name === payload.name && dt === payload.dt) :
      (name === payload.name))
);

//switch action type and exports
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS:
      return {
        ...state,
        cards: action.payload
      };
    case SET_VALUE_CHANGED:

      const property = isLane(action.payload.cardName) ? "lanes" : "hubs";

      const parmIndex = state.cards[property][action.payload.cardName]
        .findIndex(({ name, dt }) =>
          name === 'hubCapacity' ?
            (name === action.payload.name && dt === action.payload.dt) :
            (name === action.payload.name));

      let newCards = {
        cards: {
          hubs: {
            ...state.cards.hubs
          },
          lanes: {
            ...state.cards.lanes
          }
        }
      }

      newCards.cards[property][action.payload.cardName][parmIndex] = {
        ...state.cards[property][action.payload.cardName][parmIndex],
        "valueChanged": action.payload.valueChanged
      };

      // Reflect.defineProperty(newCards.cards.hubs[action.payload.cardName][parmIndex], 'property1', { value: 42 });

      return {
        ...state,
        cards: newCards.cards
      };
    case RESET_VALUE:

      let newState = {
        cards: {
          hubs: {
            ...state.cards.hubs
          },
          lanes: {
            ...state.cards.lanes
          }
        }
      }

      Reflect.deleteProperty(newState.cards[
        isLane(action.payload.cardName) ? "lanes" : "hubs"
      ][action.payload.cardName][
        getInputIndex(state, action.payload)
      ], "valueChanged");

      return {
        ...state,
        cards: newState.cards
      };
    default:
      return state;
  }
}