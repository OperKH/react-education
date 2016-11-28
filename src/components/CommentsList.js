import React, { Component, PropTypes } from 'react';
import Comment from './Comment';

class CommentsList extends Component {
	render() {
		const { comments } = this.props;

		const commentsList = comments.map(comment => <Comment comment = { comment } key = { comment.id } />);
		return (
			<section className="comments">
				<h2 className="comments-header">Comments:</h2>
				<ul className="comments-list">
					{ commentsList }
				</ul>
			</section>
		);
	}
}

CommentsList.propTypes = {
	comments: PropTypes.array
};

export default CommentsList;
