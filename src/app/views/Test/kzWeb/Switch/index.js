import React, { Component } from 'react';
import './style.scss';
class Switch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            on: !!this.props.on || false,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if ('on' in nextProps) {
            this.setState({
                on: nextProps.on,
            })
        }
    }
    handleClick(e) {
        let preStatus = this.state.on;
        this.setState({
            on: !preStatus,
        }, () => {
            if (this.props.onToggle) {
                this.props.onToggle(e, this.state.on);
            }
        });
    }
    render() {
        let switchClass = this.state.on ? 'u-switch-open' : 'u-switch-close';
        return (
            <div className={ `u-switch ${switchClass}`} onClick={this.handleClick}>
                <input className="switch-input" type="radio" value="on"/>
                <span className="switch-circle"></span>
            </div>
        )
    }
} 
export default Switch;
