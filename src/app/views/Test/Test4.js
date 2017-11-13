import React, { Component } from 'react';
import { connect } from 'react-redux';
// import shallowEqual from 'recompose/shallowEqual';
// import TestDecorator from './TestDecorator';
import { testAction } from './TestRedux';
// import Test from './Test5';

class Test4 extends Component {
	constructor(props) {
		console.log('Test4 constructor')
        super(props);
        this.state = {
            test: 1,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    componentWillReceiveProps() {
        console.log('test4 componentWillReceiveProps');
    }
    shouldComponentUpdate() {
        console.log('test4 shouldComponentUpdate');
        return true;
    }
	componentWillUpdate() {
		console.log('test4 componentWillUpdate')
	}
    handleClick() {
        this.props.testAction();
        // this.setState({
        //     test: 2,
        // })
    }
    // renderChildren() {
    //     return (
    //         <div>
    //         </div>
    //     )
    // }
	render() {
		console.log('test4 render')
		return(
			<div>
                test4
                <button onClick={ this.handleClick }>点击</button>
			</div>
		)
	}
}

export default connect((state, ownProps) => {
    console.log('Test4 mapStateToProps called');
    const test = {
        name: 'xqg',
    };
    return {
        // test: '1',
        // test: [].concat([123]),
        test: state.test.test,
    };
}, {
    testAction,
})(Test4);
