import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment } from '../AC/counter';

@connect(
	({counter}) => ({counter}),
	{increment}
)
class Counter extends Component {
	static propTypes = {
		counter: PropTypes.number.isRequired,
		increment: PropTypes.func.isRequired
	}

	render() {
		const { counter, increment } = this.props;
		return (
			<section>
				<h2>Counter: {counter}</h2>
				<button type="button" onClick={increment}>Increment</button>
			</section>
		);
	}
}

export default Counter;
