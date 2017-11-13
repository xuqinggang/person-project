import React, { Component } from 'react';
import Test4 from './Test4';
import Test2 from './Test2';
import shallowEqual from 'recompose/shallowEqual';
import TestDecorator from './TestDecorator';

class Test5 extends Component {
	constructor(props) {
		console.log('Test5 constructor')
		super(props);
        this.state = {
            test5: '',
            inputVal: '',
        };
        // this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
	}
    componentDidMount() {
    }
	componentWillUpdate() {
		console.log('test5 componentWillUpdate')
	}
    handleClick(...params) {
        console.log('params', params)
        this.setState({
            test5: 'test5',
        });
    }
	render() {
		console.log('test5 render');
        const st = { color: '#fff' };
		return(
			<div>
                test5
                <button onClick={ this.handleClick } >test5 rerender</button>
                {
                    // <Test4  onClick={ this.handleClick } test5={ this.state.test5 }/>
                    // <Test2 />
                }
			</div>
		)
	}
}

export default Test5;
