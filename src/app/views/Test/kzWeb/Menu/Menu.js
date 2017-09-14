import React, { Component } from 'react';
import classnames from '../classnames'; 
import './style.scss';
export default class Menu extends Component {
    renderChildren(children) {
        return children;
    }
    render() {
        const { children, className } = this.props;
        const menuClass = classnames(className);
        return (
            <div className="m-menu">
                <ul className={ menuClass }>
                    { this.renderChildren(children) }
                </ul>
            </div>
        )
    }
}
