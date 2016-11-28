import React, { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import ArtilceList from '../components/ArticleList';

@connect (
	({articles}) => ({articles})
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
