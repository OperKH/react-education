import { INCREMENT } from '../constants';

function counterReducer(count = 0, action) {
	const { type } = action;
	switch (type) {
		case INCREMENT:
			return count + 1;
		default:
			return count;
	}
}

export default counterReducer;
