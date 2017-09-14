import React, { Component } from 'react';
import classnames from '../classnames'; 
import './style.scss';
export default class SubMenu extends Component {
    renderSubChildren(children) {
        return children; 
    }
    render() {
        // props.item 子级菜单项的值 
        // props.children 子级菜单的菜单项
        const { menuItem, children, className, itemClass, menuClass } = this.props;
        const menuItemClass = classnames('menu-item', itemClass);
        const subMenuClass = classnames('m-subMenu', className, menuClass);
        return (
            <li className={ menuItemClass } >
                <div>
                    { menuItem }
                </div>
                <ul className={ subMenuClass }>
                    { this.renderSubChildren(children) }
                </ul>
            </li>
        )
    }
}
