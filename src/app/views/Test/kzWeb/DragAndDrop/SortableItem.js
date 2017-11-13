import React from 'react';
import { sortable } from 'react-anything-sortable';

@sortable
class SortableItem extends React.Component {
    render() {
        return (
            <div
                className={this.props.className}
                style={this.props.style}
                onMouseDown={this.props.onMouseDown}
                onTouchStart={this.props.onTouchStart}
            >
                your item                
            </div>                    
        );
    }
};
export default SortableItem;
