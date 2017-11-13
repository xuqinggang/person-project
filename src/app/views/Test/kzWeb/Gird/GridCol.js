import React, { Component } from 'react';
import './style.scss';



function GridCol(props) {
    const { className } = props;
    let colNumClass = '';
    if (props.col) {
        colNumClass = `grid-col-${props.col}`;
    }
    return (
        <div className={ `grid-col ${colNumClass} ${className}` }>
            { props.children }
        </div>
    )
}
// class GirdCol extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//         )
//     }
// }
export default GridCol;
