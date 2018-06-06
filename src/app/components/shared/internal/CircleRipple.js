import React, {
	Component,
	PropTypes,
	createElement,
	cloneElement,
	isValidElement,
} from 'react';
import ReactDom from 'react-dom';
import classnames from 'classnames';
import BaseTheme from '../styles/muiTheme';
import shallowEqual from 'recompose/shallowEqual';

import CSSModules from 'react-css-modules';

import styles from './CircleRipple.scss';
import autoPrefix from '../utils/autoPrefix';

function getStyleName() {
	return {
		root: 'm-circleRipple',
	}
}

@CSSModules(styles, { allowMultiple: true })
class CircleRipple extends Component {
	static propTypes = {
		aborted: PropTypes.bool,
		backgroundColor:  PropTypes.string,
		style: PropTypes.object,
		bgColor: PropTypes.string,
		touchGenerated: PropTypes.bool,
	};

	static defaultProps = {
		opacity: 0.1,
		aborted: false,
	};

	constructor(props) {
		super(props);
	}
	
	shouldComponentUpdate(nextProps) {
		return !shallowEqual(this.props, nextProps);
	}

	initializeAnimation(callback) {
		const styleObj = ReactDom.findDOMNode(this).style;
		const opacityProp = this.props.opacity;
		if(opacityProp) {
			styleObj.opacity = opacityProp;
		}
		autoPrefix.set(styleObj, 'transform', 'scale(0)');
		this.enterTimer = setTimeout(callback, 0);
	}

	animate() {
		const styleObj = ReactDom.findDOMNode(this).style;
		autoPrefix.set(styleObj, 'transition', 'transform 1s cubic-bezier(0.23, 1, 0.32, 1) 0ms, opacity 2s cubic-bezier(0.23, 1, 0.32, 1) 0ms');
		autoPrefix.set(styleObj, 'transform', 'scale(1)');
	}

	componentWillAppear(callback) {
    this.initializeAnimation(callback);
  }
  
  componentDidAppear() {
    this.animate();
  }

  componentWillEnter(callback) {
  	this.initializeAnimation(callback);
  }

  componentDidEnter() {
  	this.animate();
  }
  componentDidMount() {
  }
  componentWillLeave(callback) {
  	const styleObj = ReactDom.findDOMNode(this).style;
  	styleObj.opacity = 0;
  	// If the animation is aborted, remove from the DOM immediately
  	const removeAfter = this.props.aborted ? 0 : 2000;
  	this.leaveTimer = setTimeout(callback, removeAfter);
  }

  componentWillUnmount() {
    clearTimeout(this.enterTimer);
    clearTimeout(this.leaveTimer);
  }

	render() {
		const {
			aborted,
			style,
			bgColor,
			...other,
		} = this.props;

		const styleNameClass = getStyleName();
		const mergeStyle = Object.assign({}, {
			backgroundColor: bgColor || BaseTheme.ripple.color,
		}, style);
		return (
			<div
				style={mergeStyle}
				styleName={styleNameClass.root}
				// style=
				{...other}
			>
				
			</div>
		)
	}
}

export default CircleRipple;
