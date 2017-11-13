import React, { Component } from 'react';
import './Club.scss';
import iconImg from './images/132.jpeg';
class Card extends Component {
    render() {
        return (
            <div className="m-topic">
                <CardHead />
            </div>
        )
    }
} 
function CardHead() {
    return (
        <div className="topic-head">
            <a className="usr-icon f-inline-block">
                <img className="icon-img" src={ iconImg } alt="" />
                <span className="usr-rank"></span>
            </a>  
            <div className="usr-info f-inline-block">
                <a href="ll" className="f-block">
                    <span className="usr-name f-inline-block">Meliorem in futurum</span>
                </a>
                <span className="usr-pubTime f-block">1小时前</span>
            </div>
            <div className="share-button f-inline-block">
                <a href="">
                    <i></i>
                </a>
            </div>
        </div>
    )
}
function CardBody() {
    return (
        <div class="topic-body">
            <h2 className="topic-title">奇异博士</h2>
            <div class="topic-content">
                <p>asdfasfa12312asfasdf</p>
            </div>  
        </div>
    )
}
export default Card;
