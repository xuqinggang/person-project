import React, {
	Component,
	PropTypes,
	createElement,
	cloneElement,
	isValidElement,
} from 'react';
import ReactDOM from 'react-dom';
import ReactTransitionGroup from 'react-addons-transition-group';

import CSSModules from 'react-css-modules';

import transition from 'components/shared/styles/transition';
import autoPrefix from 'components/shared/utils/autoPrefix';

class ScaleInChild extends Component {
	 static propTypes = {
    children: PropTypes.node,
    enterDelay: PropTypes.number,
    maxScale: PropTypes.number,
    minScale: PropTypes.number,
    style: PropTypes.object,
  };
	static defaultProps = {
    enterDelay: 0,
    maxScale: 1,
    minScale: 0,
  };
	constructor(props) {
		super(props);
	}
	initializeAnimation(callback) {
    const style = ReactDOM.findDOMNode(this).style;

    style.opacity = '0';
    autoPrefix.set(style, 'transform', 'scale(0)');

    this.enterTimer = setTimeout(callback, this.props.enterDelay);
  }
  animate() {
    const style = ReactDOM.findDOMNode(this).style;

    style.opacity = '1';
    autoPrefix.set(style, 'transform', `scale(${this.props.maxScale})`);
  }
	componentWillAppear(callback) {
    this.initializeAnimation(callback);
  }

  componentWillEnter(callback) {
    this.initializeAnimation(callback);
  }
  componentDidAppear() {
    this.animate();
  }

  componentDidEnter() {
    this.animate();
  }
  componentWillLeave(callback) {
    const style = ReactDOM.findDOMNode(this).style;

    style.opacity = '0';
    autoPrefix.set(style, 'transform', `scale(${this.props.minScale})`);

    this.leaveTimer = setTimeout(callback, 450);
  }
	componentWillUnmount() {
    clearTimeout(this.enterTimer);
    clearTimeout(this.leaveTimer);
  }
	render() {
		const {
			children,
			enterDelay,
			maxScale,
			minScale,
			style,
			className,
			...other,
		} = this.props;
		const mergeStyle = Object.assign({
			transition: transition.easeOut(['transform', 'opacity']),
		},style);
		return (
			<div
			{...other}
			style={mergeStyle}
			className={className}
			>
				{children}
			</div>
		)
	}
}

export default ScaleInChild;