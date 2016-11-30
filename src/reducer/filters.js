import { DateUtils } from "react-day-picker";

import { CHANGE_FILTERS } from '../constants';


const defaultFilters = {
	selectedArticles: [],
	selectedDays: DateUtils.addDayToRange(null)
};

function filtersReducer(filters = defaultFilters, action) {
	const { type, data } = action;

	switch (type) {
		case CHANGE_FILTERS:
			return {...filters, ...data};
		default:
			return filters;
	}
}

export default filtersReducer;
