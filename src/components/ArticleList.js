import React, { Component, PropTypes } from 'react';
import Article from './Article';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

import DayPicker, { DateUtils } from "react-day-picker";
import '../css/DayPicker.css';

const dateOptions = {day: 'numeric', month: 'long', year: 'numeric'};

class ArticleList extends Component {
	static propTypes = {
		articles: PropTypes.array.isRequired
	}

	state = {
		selectedArticles: null,
		selectedDays: DateUtils.addDayToRange(new Date('2016-01-05'), {	to: new Date('2016-01-07')})
	};

	handleSelectchange = selectedArticles => {
		this.setState({
			selectedArticles
		});
	}

	handleDayClick = (e, day) => {
		const { selectedDays } = this.state;
		const range = DateUtils.addDayToRange(day, selectedDays);
		this.setState({
            selectedDays: range
        });
    }

	render() {
		const { articles } = this.props;
		const articleList = articles.map(article => <Article article = { article } key = { article.id } />);

		const selectOptions = articles.map(article => ({
			label: article.title,
			value: article.id
		}));

		const { selectedArticles, selectedDays } = this.state;
		const { from, to } = selectedDays;

		return (
			<section>
				<h2 className="articles-header">Articles:</h2>
				<div className="article-list-time-range">
					<span>С </span>
					<time dateTime={ from ? from.toISOString() : ''}>{ from ? from.toLocaleString('ru-RU', dateOptions) : ''}</time>
					<span> по </span>
					<time dateTime={ to ? to.toISOString() : '' }>{ to ? to.toLocaleString('ru-RU', dateOptions) : '' }</time>
				</div>
				<Select
					options={selectOptions}
					value={selectedArticles}
					onChange={this.handleSelectchange}
					multi={true}
				/>
				<DayPicker
					numberOfMonths={3}
					firstDayOfWeek={1}
					initialMonth={ selectedDays.from }
					selectedDays={day => DateUtils.isDayInRange(day, selectedDays)}
					onDayClick={this.handleDayClick}
					weekdaysShort={ ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'] }
					months={ ['Январь', 'Февраль', 'Март', 'Апрель', 'Мая', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'] }
				/>
				<ol className="article-list">
					{ articleList }
				</ol>
			</section>
		);
	}
}

export default ArticleList;
