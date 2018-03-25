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
      // action.search is always an array of size 1, did it have to be an array?
      // You were probably aiming ahead for random/{N} -
      // you could have used concat instead of picking one array index
      combine.push(action.search[0]);
      return merge({}, {search: combine});
    }
    default:
      return state;
  }
};

export default historyReducer;
