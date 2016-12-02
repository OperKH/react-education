import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';
import NewCommentForm from './NewCommentForm';

@connect (
	(state, props) => ({
		comments: state.comments.filter(comment => props.comments.includes(comment.id))
	})
)
class CommentsList extends Component {
	static propTypes = {
		comments: PropTypes.array.isRequired,
		articleID: PropTypes.string.isRequired
	}

	render() {
		const { comments, articleID } = this.props;

		const commentsList = comments.map(comment => <Comment comment = { comment } key = { comment.id } />);
		return (
			<section className="comments">
				<h2 className="comments-header">Comments:</h2>
				<ul className="comments-list">
					{ commentsList }
					<li>
						<NewCommentForm articleID={articleID} />
					</li>
				</ul>
			</section>
		);
	}
}

CommentsList.propTypes = {
	comments: PropTypes.array
};

export default CommentsList;
