import { normalizedComments as initialComments } from '../fixtures';

function commentsReducer(comments = initialComments) {
	return comments;
}

export default commentsReducer;
