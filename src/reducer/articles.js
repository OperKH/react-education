import { DELETE_ARTICLE } from '../constants';
import { normalizedArticles as initialArticles } from '../fixtures';

function articlesReducer(articles = initialArticles, action) {
	const { type, data } = action;
	switch (type) {
		case DELETE_ARTICLE:
			return articles.filter(article => article.id !== data.id);
		default:
			return articles;
	}
}

export default articlesReducer;
