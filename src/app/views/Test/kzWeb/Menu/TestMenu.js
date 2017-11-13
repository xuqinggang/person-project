import React, { Component } from 'react';
import Menu, { MenuItem, SubMenu } from './index.js';
import classnames from '../classnames'; 
import './style.scss';
export default class TestMenu extends Component {
    test() {
        for(let i = 0; i < obj.length; i++) {} 
    }
    render() {
        return (
            <Menu className="menu-level1">
                <MenuItem className="level1-item">1</MenuItem>
                <SubMenu menuItem="2" itemClass="level2-item" menuClass="menu-level2">
                    <MenuItem className="level2-item">2-1</MenuItem>
                </SubMenu>
            </Menu>
        )
    }
}
