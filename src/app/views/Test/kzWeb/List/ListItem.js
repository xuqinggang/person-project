import React, { Component } from 'react';
import './style.scss';
class ListItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        const { text, value } = this.props;
        if (this.props.onClick) {
            this.props.onClick( event, {
                text,
                value
            });  
        }
    }
    render() {
        return (
            <div className="list-item" onClick={ this.handleClick }>
                <span className="item-text">
                    { this.props.text }
                </span>
            </div>
        )
    }
}
export default ListItem;
