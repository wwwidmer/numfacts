import merge from 'lodash/merge';
import { SAVE_SEARCH } from '../actions/history_actions';

const historyReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case SAVE_SEARCH:
      return merge({}, {search: action.search});
    default:
      return state;
  }
};

export default historyReducer;
