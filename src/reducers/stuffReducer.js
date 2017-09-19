import initialState from './initialState';
import { CHECK_ALIVE, SWITCH_ALIVE } from '../action/actionTypes';

export default function isAlive(state = initialState.alive, action) {
  let newState;
  switch(action.type) {
    case CHECK_ALIVE:
      console.log("CHECK_ALIVE action");
      return action;
    case SWITCH_ALIVE:
      console.log("SWITCH_ALIVE action");
      return action;
    default:
      return state;
  }
}
