import { createStore } from 'redux';
import reducer from '../reducer';
import  enhancer from '../middlewares';

const store = createStore(reducer, {}, enhancer);
window.store = store;

export default store;
