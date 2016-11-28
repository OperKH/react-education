import React, { Component, PropTypes } from 'react';

class Comment extends Component {
	render() {
		const { user, text } = this.props.comment;

		return (
			<li>
				<section>
					<h2 className="comments-header" onClick={ this.toggleOpen }>{ user }:</h2>
					<div className="body">{ text }</div>
				</section>
			</li>
		);
	}
}

Comment.propTypes = {
	comment: PropTypes.object.isRequired
};

export default Comment;
