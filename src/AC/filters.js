import { CHANGE_FILTERS } from '../constants';

function changeFilters(change) {
	return {
		type: CHANGE_FILTERS,
		data: change
	};
}

export default changeFilters;
