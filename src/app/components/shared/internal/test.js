import React, {
	Component,
	PropTypes,
	createElement,
	cloneElement,
	isValidElement,
} from 'react';

class Test extends Component {
	componentDidMount() {
		console.log('componentDidMount')
	}
	componentWillEnter() {
		console.log('componentWillEnter test');
	}
	componentWillAppear() {
		console.log('123')
	}
	render() {
		console.log('redner')
		return (
			<div>x123x</div>
		)
	}
}

export default Test;