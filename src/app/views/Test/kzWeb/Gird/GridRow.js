import React, { Component } from 'react';
import './style.scss';
// class GirdRow extends Component {
//     constructor(props) {
//         super(props);
//     }
//     renderCol() {
//         Children.map(props.children, col => {
//         })
//     }
//     render() {
//         return (
//             <div class="gird-row">
//                 { this.renderCol() }   
//             </div>
//         )
//     }
// }
function GridRow(props) {
    return (
        <div className="grid-row">
            { props.children }   
        </div> 
    )
}
export default GridRow;
