import { applyMiddleware } from 'redux';
import addIdTocomment from './addIdTocomment';

const enhancer = applyMiddleware(addIdTocomment);

export default enhancer;
