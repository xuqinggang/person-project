import React, { Component, Children } from 'react';
import './style.scss';
class DragAndDrop extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
           <div>{ this.props.children }</div>
        )
    }
}
export default DragAndDrop;
