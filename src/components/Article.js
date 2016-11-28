import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CommentsList from './CommentsList';
import { deleteArticle } from '../AC/Articles';

const dateOptions = {day: 'numeric', month: 'long', year: 'numeric'};

@connect (
	null,
	{deleteArticle}
)
class Article extends Component {
	static propTypes = {
		article: PropTypes.object.isRequired,
		deleteArticle: PropTypes.func.isRequired
	}

	state = {
		isOpen: false
	};

	toggleOpen = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	deleteArticle = (e) => {
		e.preventDefault();
		const { deleteArticle, article: { id } } = this.props;
		deleteArticle(id);
	}

	render() {
		const { article: { title , text, comments, date } } = this.props;
		const { isOpen } = this.state;

		const body = isOpen ?
			<div className="body">
				<time dateTime={ date }>{ (new Date(date)).toLocaleString('ru-RU', dateOptions) }</time>
				<div className="article-text">{ text }</div>
				<CommentsList comments = { comments || [] } />
			</div>
			: null;
		return (
			<li>
				<article>
					<h2 className="article-header">
						<span onClick={ this.toggleOpen }>{ title }</span> <a href onClick={ this.deleteArticle }>delete</a>
					</h2>
					{ body }
				</article>
			</li>
		);
	}
}

export default Article;
