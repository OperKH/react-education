import { DELETE_ARTICLE, ADD_NEW_COMMENT } from '../constants';
import { normalizedArticles as initialArticles } from '../fixtures';

function articlesReducer(articles = initialArticles, action) {
	const { type, data } = action;
	switch (type) {
		case DELETE_ARTICLE:
			return articles.filter(article => article.id !== data.id);
		case ADD_NEW_COMMENT:
			return articles.map(article => {
				if (article.id === data.articleID) {
					const a = {
						...article,
						comments: [...article.comments, data.comment.id]
					};
					return a;
				}
				return article;
			});
	}
	return articles;
}

export default articlesReducer;
