import React, { Component } from 'react';
import './style.scss';
import logo from './weixin.jpeg';
class Logo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="m-logo">
                <img src={ logo } alt="" />
            </div>
        )
    }
}
export default Logo;
