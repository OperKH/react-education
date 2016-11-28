import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Counter from './Counter';
import Articles from './Articles';

class Root extends Component {
	render() {
		return (
			<Provider store={ store }>
				<div className="wrapper">
					<Counter />
					<Articles />
				</div>
			</Provider>
		);
	}
}

export default Root;
