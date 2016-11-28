import articles from './articles';
import counter from './counter';
import { combineReducers } from 'redux';

export default combineReducers({
	articles,
	counter
});
