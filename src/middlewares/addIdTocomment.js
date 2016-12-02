import { ADD_NEW_COMMENT } from '../constants';
import { randomId } from '../utils';

export default store => next => action => {
	const { type, data } = action;
	let middlewareAction;
	switch (type) {
		case ADD_NEW_COMMENT:
			middlewareAction = {
				...action,
				data: {
					...data,
					comment: {
						...action.data.comment,
						id: randomId(),
						user: 'ME'
					}
				}
			};
			break;
		default:
			middlewareAction = action;
	}
	next(middlewareAction);

};
