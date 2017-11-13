import React, { Component } from 'react';
import './style.scss';



function GridCol(props) {
    return (
        <div className={ `grid-col ${props.col}` }>
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
