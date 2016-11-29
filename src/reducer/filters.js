import { DateUtils } from "react-day-picker";

import { CHANGE_FILTERS } from '../constants';


const defaultFilters = {
	selectedArticles: null,
	selectedDays: DateUtils.addDayToRange(new Date('2016-01-05'), {	to: new Date('2016-01-07')})
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
