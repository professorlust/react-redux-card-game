import { NEW_GAME } from './game';

function nameReducer(state = '', action) {
  return action.type === NEW_GAME ? action.opponentName : state;
}

function handCountReducer(state = 2) {
  return state;
}

function deckCountReducer(state = 30) {
  return state;
}

export default function opponentReducer(state = {}, action) {
  return {
    name: nameReducer(state.name, action),
    handCount: handCountReducer(state.handCount, action),
    deckCount: deckCountReducer(state.deckCount, action),
  };
}