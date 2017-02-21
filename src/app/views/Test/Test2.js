import React, { Component } from 'react';
import shallowEqual from 'recompose/shallowEqual';
import TestDecorator from './TestDecorator';
@TestDecorator
class Test2 extends Component {
	constructor(props) {
		console.log('Test constructor')
		super(props);
	}
	componentWillUpdate() {
		console.log('componentWillUpdate')
	}
	shouldComponentUpdate(nextProps) {
		return !shallowEqual(this.props, nextProps);
	}
	render() {
		console.log('test23 render')
		return(
			<div>
				child
			</div>
		)
	}
}

export default Test2;