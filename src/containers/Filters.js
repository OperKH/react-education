import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

import DayPicker, { DateUtils } from "react-day-picker";
import '../css/DayPicker.css';

import changeFilters from '../AC/filters';

const dateOptions = {day: 'numeric', month: 'long', year: 'numeric'};

@connect (
	({articles, filters}) => ({articles, filters}),
	{changeFilters}
)
class Filters extends Component {
	static propTypes = {
		articles: PropTypes.array.isRequired,
		filters: PropTypes.object.isRequired,
		changeFilters: PropTypes.func.isRequired,
	}

	handleSelectchange = selectedArticles => {
		const { changeFilters } = this.props;
		changeFilters({
			selectedArticles
		});
	}

	handleDayClick = (e, day) => {
		const { filters, changeFilters } = this.props;
		const { selectedDays } = filters;
		const range = DateUtils.addDayToRange(day, selectedDays);
		changeFilters({
			selectedDays: range
		});
	}

	render() {
		const { articles, filters } = this.props;
		const selectOptions = articles.map(article => ({
			label: article.title,
			value: article.id
		}));

		const { selectedArticles, selectedDays } = filters;
		const { from, to } = selectedDays;

		return (
			<div>
				<Select
					options={selectOptions}
					value={selectedArticles}
					onChange={this.handleSelectchange}
					multi={true}
				/>
				<div className="article-list-time-range">
					<span>С </span>
					<time dateTime={ from ? from.toISOString() : ''}>{ from ? from.toLocaleString('ru-RU', dateOptions) : ''}</time>
					<span> по </span>
					<time dateTime={ to ? to.toISOString() : '' }>{ to ? to.toLocaleString('ru-RU', dateOptions) : '' }</time>
				</div>
				<DayPicker
					numberOfMonths={3}
					firstDayOfWeek={1}
					initialMonth={ selectedDays.from }
					selectedDays={day => DateUtils.isDayInRange(day, selectedDays)}
					onDayClick={this.handleDayClick}
					weekdaysShort={ ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'] }
					months={ ['Январь', 'Февраль', 'Март', 'Апрель', 'Мая', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'] }
				/>
			</div>
		);
	}
}

export default Filters;
