import { normalizedComments as initialComments } from '../fixtures';
import { ADD_NEW_COMMENT } from '../constants';

function commentsReducer(comments = initialComments, action) {
	const { type, data } = action;

	switch (type) {
		case ADD_NEW_COMMENT:
			return [...comments, data.comment];
	}
	return comments;
}

export default commentsReducer;
