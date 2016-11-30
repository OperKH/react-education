import React, { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import ArtilceList from '../components/ArticleList';
import { filterArticles } from '../utils';

@connect (
	({articles, filters}) => ({
		articles: filterArticles(articles, filters)
	})
)
class Article extends Component {
	static propTypes = {
		articles: PropTypes.array.isRequired
	}

	render() {
		const { articles } = this.props;
		return <ArtilceList articles={ articles } />;
	}
}

export default Article;
