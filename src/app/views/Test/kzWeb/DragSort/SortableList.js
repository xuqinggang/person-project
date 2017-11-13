import React from 'react';
//import { Sortable } from 'react-sortable';
import { sortable } from 'react-sortable';

var ListItem = React.createClass({
  displayName: 'SortableListItem',
  render: function () {
    return (
      <div {...this.props} className="list-item">{this.props.children}</div>
    )
  }
})

var SortableListItem = sortable(ListItem);

var SortableList = React.createClass({

  getInitialState: function () {
    return {
      draggingIndex: null,
      data: this.props.data
    };
  },

  updateState: function (obj) {
    this.setState(obj);
  },

  render: function () {
    var listItems = this.state.data.items.map(function (item, i) {
      return (
        <SortableListItem
          key={i}
          updateState={this.updateState}
          items={this.state.data.items}
          draggingIndex={this.state.draggingIndex}
          sortId={i}
          outline="list">{item}</SortableListItem>
      );
    }, this);

    return (
      <div className="list">{listItems}</div>
    )
  }
});
export default SortableList;
