// 页面底部
import React, { PropTypes, Children, cloneElement, } from 'react';
import classnames from 'classnames';
import './style.scss';
export default function Footer(props) {
    const { className } = props;
    return (
        <div className={ className }>
            footer
        </div>
    )
}
