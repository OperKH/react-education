import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArtilceList from '../components/ArticleList';

@connect (
	({articles}) => ({articles})
)
class Article extends Component {
	render() {
		const { articles } = this.props;
		return <ArtilceList articles={ articles } />;
	}
}

export default Article;
