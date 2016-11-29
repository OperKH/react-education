import React, { Component, PropTypes } from 'react';
import Article from './Article';
import Filters from '../containers/Filters';

class ArticleList extends Component {
	static propTypes = {
		articles: PropTypes.array.isRequired
	}

	render() {
		const { articles } = this.props;
		const articleList = articles.map(article => <Article article = { article } key = { article.id } />);

		return (
			<section>
				<h2 className="articles-header">Articles:</h2>
				<Filters />
				<ol className="article-list">
					{ articleList }
				</ol>
			</section>
		);
	}
}

export default ArticleList;
