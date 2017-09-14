import React, { Component } from 'react';
import classnames from '../classnames'; 
import './style.scss';
export default function MenuItem(props) {
    const menuItemClass = classnames('menu-item', props.className);
    return (
        <li className={ menuItemClass }>
            { props.children }
        </li>
    )
} 
