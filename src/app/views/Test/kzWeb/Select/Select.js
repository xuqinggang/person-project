import React, { Component, Children, cloneElement } from 'react';
import List from '../List/List';
import classnames from '../classnames'; 
import './style.scss';
class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: this.props.show || false,
            value: this.props.value,
        };
        this.handleClickToggle = this.handleClickToggle.bind(this);
        this.handleHideSelectList = this.handleHideSelectList.bind(this);
    }
    componentDidMount() {
        // 监听body的 click事件
        document.body.addEventListener('click', this.handleHideSelectList);
    }
    componentWillUnmount() {
        // 移除body的 click事件
        document.body.removeEventListener('click', this.handleHideSelectList);
    }
    // 隐藏下拉列表的事件处理程序
    handleHideSelectList(event) { 
        let clickDom = event.target;
            if (clickDom !== this.refs.selectText) {
                this.setState({
                    show: false,
                });
            }
            console.log(event.target, event.target.className);
    }
    // 点击select组件显示字符的事件处理程序
    handleClickToggle() {
        this.setState({
            show: !this.state.show,
        });
    }
    // 点击select 下拉list item的事件处理程序
    handleItemClick(event, selectInfo) {
        this.setState({
            show: false,
            value: selectInfo.value,
        }, () => {
            if(this.props.onChange) {
                this.props.onChange(event, selectInfo);
            }
        });
    }
    cloneItems(props = this.props) {
        const preChildren = props.children;
        return Children.map( preChildren, preChild => {
            // 给list item组件添加额外的props
            let extraProps = Object.assign({}, {
                onClick: event => {
                    this.handleItemClick(event, {
                        text: preChild.props.text,
                        value: preChild.props.value,
                    });
                }
            });   
            return cloneElement( preChild, extraProps );
        });
    }
    render() {
        const { children, className } = this.props;
        const { value } = this.state;
        // select 显示字符
        let displayText = '';
        Children.forEach(children, child => {
            if(child && value === child.props.value) {
                displayText = child.props.text;
            }
        });
        const newChildren = this.cloneItems();
        const rootClass = classnames('m-select', className);
        return (
            <div className={ rootClass }>
                <div ref="selectText" className="select-text" onClick = {this.handleClickToggle}>
                    <span>{ displayText }</span>
                    <span className="u-select-icon">
                        <i className="kz-e-angle-down"></i>
                    </span>
                </div>
                <div className={`select-list ${ this.state.show ? 'select-list-show' : 'select-list-hide' }`}>
                    <List>
                        { newChildren }
                    </List>
                </div>
            </div>
        )
    }
}
module.exports = Select;
