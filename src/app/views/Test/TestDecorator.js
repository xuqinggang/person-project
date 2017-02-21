import React, { Component } from 'react';

/**
 * Makes the given component "pure".
 *
 * @param object Target Component.
 */
export default function TestDecorator(Target) {
  class Wrapper extends Component {
  	componentDidMount() {
  		console.log(this.test,'123')
  	}
    render() {
      return React.createElement(Target, this.props, this.props.children);
    }
  }

  return Wrapper;
}