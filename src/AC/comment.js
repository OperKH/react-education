import { ADD_NEW_COMMENT } from '../constants';

export function addComment(data) {
	return {
		type: ADD_NEW_COMMENT,
		data
	};
}
