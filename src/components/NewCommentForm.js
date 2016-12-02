import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../AC/comment';

@connect(
	null,
	{addComment}
)
class NewCommentForm extends Component {
	static propTypes = {
		articleID: PropTypes.string.isRequired,
		addComment: PropTypes.func.isRequired
	}

	state = {
		newCommentText: ''
	}

	newCommentTextChangeHandler = e => {
		this.setState({
			newCommentText: e.target.value
		});
	}

	submitHandler = e => {
		e.preventDefault();
		const { newCommentText: text } = this.state;
		const { articleID, addComment } = this.props;
		if (!text) return;
		addComment({
			articleID,
			comment: {
				text
			}
		});
		this.setState({
			newCommentText: ''
		});
	}

	render() {
		const { newCommentText } = this.state;
		return (
			<form name="new-comment-form" className="new-comment-form" onSubmit={this.submitHandler}>
				<h4>Add new comment:</h4>
				<textarea className="new-comment-text" name="new-comment-text" value={newCommentText} onChange={this.newCommentTextChangeHandler}></textarea>
				<button className="send-new-comment">Send</button>
			</form>
		);
	}
}

export default NewCommentForm;
