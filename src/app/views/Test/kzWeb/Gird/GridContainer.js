import React, { Component, Children } from 'react';
import './style.scss';
class GridContainer extends Component {
    constructor(props) {
        super(props);
    }
    // renderRow(props = this.props) {
    //     Children.forEach(props.children, row => {

    //         Children.forEach(row.props.children, col => {
    //             return (
    //                 <div class="gird-col">
    //                     { col.props.children } 
    //                 </div>
    //             )
    //         })
    //         return (
    //             <div className="gird-row">
    //                 <div class="gird-col">

    //                 </div>
    //             </div>
    //         )  
    //     }) 
    // }
    render() {
        return (
            <div className="g-grid-container">
                { this.props.children }   
            </div>
        )
    }
}
export default GridContainer;
