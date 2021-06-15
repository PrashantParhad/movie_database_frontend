import {createStore} from 'redux';
//import thunkMiddleware from 'redux-thunk';
import allReducers from './reducers';

const store = createStore(allReducers);

export default store;