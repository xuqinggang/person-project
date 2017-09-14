import React, { Component } from 'react';
import './style.scss';
class List extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="m-list">
                { this.props.children }
            </div>
        )
    }
}
export default List;
