import merge from 'lodash/merge';
import _ from 'lodash';
import { SAVE_SEARCH } from '../actions/history_actions';

const historyReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case SAVE_SEARCH:
    if (_.isEmpty(state)) {
      return merge({}, {search: action.search});
    } else {
      let combine = state.search;
      combine.push(action.search[0]);
      return merge({}, {search: combine});
    }
    default:
      return state;
  }
};

export default historyReducer;
