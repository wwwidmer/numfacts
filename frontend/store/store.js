import {createStore} from 'redux';
import rootReducer from '../reducers/root_reducer';

// Look up redux dev tools middleware its a great way to help you debug a development build
// You can log the state changes and even create boilerplate Jest tests
const configureStore = () => createStore(rootReducer);

export default configureStore;
