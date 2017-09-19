import { combineReducers } from 'redux';
import alive from './stuffReducer';

const rootReducer = combineReducers({
  alive
});

export default rootReducer;
