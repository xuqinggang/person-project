import React, { Component } from 'react';
import shallowEqual from 'recompose/shallowEqual';
// import TestDecorator from './TestDecorator';
// @TestDecorator
class Test2 extends Component {
	constructor(props) {
		console.log('test2 constructor')
		super(props);
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps === this.props);
    }
	componentWillUpdate() {
		console.log('test2 componentWillUpdate')
	}
	// shouldComponentUpdate(nextProps) {
	// 	return !shallowEqual(this.props, nextProps);
	// }
	render() {
		console.log('test2 render')
		return(
			<div>
                test2
			</div>
		)
	}
}

export default Test2;
