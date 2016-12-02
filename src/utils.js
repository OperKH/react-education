export function filterArticles(articles, filters) {
	const { selectedArticles, selectedDays: { from, to } } = filters;
	const selectedArticlesValieList = selectedArticles.map(({value}) => value);
	return articles
		.filter( ({id}) => selectedArticles.length ? selectedArticlesValieList.includes(id) : true )
		.filter( ({date}) => (!from || Date.parse(date) > from) && (!to || Date.parse(date) < to) )
		;
}

export function randomId() {
	return Math.round(Math.random() * 0xffffffffffffffff).toString(36);
}
