import React, {
    Component
} from 'react';
import SortableList from './SortableList'
import './style.scss';
var data = {
  items: [
    "Gold",
    "Crimson",
    "Hotpink",
    "Blueviolet",
    "Cornflowerblue"
  ]
};
export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ["Red","Green","Blue","Yellow","Black","White","Orange"],
        }
    }
    dragStart(e) {
        // this.dragged = e.currentTarget;
        // e.dataTransfer.effectAllowed = 'move';

        // // Firefox requires calling dataTransfer.setData
        // // for the drag to properly work
        // e.dataTransfer.setData("text/html", e.currentTarget);
    }
    dragEnd(e) {

//         this.dragged.style.display = "block";
//         this.dragged.parentNode.removeChild(placeholder);

//         // Update state
//         var data = this.state.data;
//         var from = Number(this.dragged.dataset.id);
//         var to = Number(this.over.dataset.id);
//         if(from < to) to--;
//         data.splice(to, 0, data.splice(from, 1)[0]);
//         this.setState({data: data});
    }
    dragOver(e) {
        // e.preventDefault();
        // this.dragged.style.display = "none";
        // if(e.target.className == "placeholder") return;
        // this.over = e.target;
        // e.target.parentNode.insertBefore(placeholder, e.target);
    }
    render() {
        return (
            <div>
            <SortableList data={data} />,
                {
                    // <ul onDragOver={this.dragOver}>
                    //     {
                    //         this.state.data.map((item, i) => {
                    //             return (
                    //                 <li
                    //                     data-id={i}
                    //                     key={i}
                    //                     draggable="true"
                    //                     onDragEnd={this.dragEnd}
                    //                     onDragStart={this.dragStart}
                    //                 >
                    //                     {item}
                    //                 </li>
                    //             )
                    //         })
                    //         }
                    //     </ul>
                }
            </div>
        );
    }
}
