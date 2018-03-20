import {combineReducers} from 'redux';
import searchReducer from './history_reducer';

const rootReducer = combineReducers({
  search: searchReducer
});

export default rootReducer;
