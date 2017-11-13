import React, {
	Component,
	PropTypes,
	createElement,
	cloneElement,
	isValidElement,
} from 'react';
import ReactDom from 'react-dom';
import classnames from 'classnames';
import ReactTransitionGroup from 'react-addons-transition-group';
import shallowEqual from 'recompose/shallowEqual';
import CSSModules from 'react-css-modules';

import BaseTheme from 'components/shared/styles/muiTheme';
import CircleRipple from './CircleRipple'
import Test from './test'
import Dom from 'components/shared/utils/Dom';
import Utils from 'components/shared/utils/Utils';
import MathCal from 'components/shared/utils/MathCal';
import styles from './TouchRipple.scss'

function getStyleNameClass() {
	return {
		root: 'm-touchRipple',
		transitionGroup: 'touchRipple-transitionGroup'
	}
}

@CSSModules(styles, { allowMultiple: true })
class TouchRipple extends Component {
	static propTypes = {
		abortOnScroll: PropTypes.bool,
		children: PropTypes.node,
		hasRipples: PropTypes.bool,
		centerRipple: PropTypes.bool,
		bgColor: PropTypes.string,
		opacity: PropTypes.number,
		style: PropTypes.object,
	};
	static defaultProps = {
		// centerRipple: false, // whether Ripple is cetered
		hasRipples: true,
	};
	constructor(props) {
		super(props);
		// Touch start produces a mouse down event for compat reasons. To avoid
    // showing ripples twice we skip showing a ripple for the first mouse down
    // after a touch start. Note we don't store ignoreNextMouseDown in this.state
    // to avoid re-rendering when we change it.
		this.ignoreNextMouseDown = false;
		this.state = {
			// This prop allows us to only render the ReactTransitionGroup on the fist click of the component, making the inital render faster
			isRipples: false,
			ripples: [],
			nextKey: 0,
		};

	}
	// get circleRipple position and size
	getRippleStyle(event) {
		const el = ReactDom.findDOMNode(this);
		const elOffWidth = el.offsetWidth;
		const elOffHeight = el.offsetHeight;
		// ele relative to page 
		const offset = Dom.offset(el);
		const isTouchEvent = event.touches && event.touches.length;
		// pointer relative to page
		const pointerPageX = isTouchEvent ? event.touches[0].pageX : event.pageX;
		const pointerPageY = isTouchEvent ? event.touches[0].pageY : event.pageY;
		// pointerX|Y  pointer relative to ele
		const pointerEleX = pointerPageX - offset.left;
		const pointerEleY = pointerPageY - offset.top;
		const topRightDiag = MathCal.calDiag(elOffWidth - pointerEleX, pointerEleY);
		const topLeftDiag = MathCal.calDiag(pointerEleX, pointerEleY);
		const botRightDiag = MathCal.calDiag(elOffWidth - pointerEleX, elOffHeight - pointerEleY);
		const botLeftDiag = MathCal.calDiag(pointerEleX, elOffHeight - pointerEleY);
		
		const rippleRadius = Math.max(topLeftDiag, topRightDiag, botLeftDiag, botRightDiag);
		const rippleSize = rippleRadius * 2;
		
		const ptLeft = pointerEleX - rippleRadius;
		const ptTop = pointerEleY - rippleRadius;
		console.log( {
			position: 'absolute',
			top: ptTop,
			left: ptLeft,
			width: rippleSize,
			height: rippleSize,
		},'style CircleRipple')
		return {
			position: 'absolute',
			top: ptTop,
			left: ptLeft,
			width: rippleSize,
			height: rippleSize,
		}
	}
	start(event, isRippleTouchGenerated) {

		if(this.ignoreNextMouseDown && !isRippleTouchGenerated) {
			this.ignoreNextMouseDown = false;
			return ;
		}
		let ripples = this.state.ripples;
		ripples = [...ripples, (
			<CircleRipple 
			style={!this.props.centerRipple ? this.getRippleStyle(event) : {}}
			key={this.state.nextKey} 
			bgColor={this.props.bgColor || BaseTheme.ripple.color}
			/>
		)]

		this.ignoreNextMouseDown = isRippleTouchGenerated;
		this.setState({
			nextKey: this.state.nextKey + 1,
			isRipples: true,
			ripples: ripples,
		});
	}

	end() {
		const currentRipples = this.state.ripples;
		this.setState({
			ripples: Utils.shift(currentRipples),
		})
	}

	handleMouseDown = (event) => {
		console.log('touchRipple, mouseDown')
		// only listen to left clicks
		if(event.button === 0) {
			this.start(event, false)
		}
	};

	handleMouseUp = (event) => {
		this.end();
	};

	handleMouseLeave = (event) => {
		this.end();
	};

	handleTouchStart = (event) => {
		// alert(1)
		console.log('onTouchStart')
    event.stopPropagation();
    // If the user is swiping (not just tapping), save the position so we can
    // abort ripples if the user appears to be scrolling.
    // if (this.props.abortOnScroll && event.touches) {
    //   this.startListeningForScrollAbort(event);
    //   this.startTime = Date.now();
    // }
    this.start(event, true);
  };

	handleTouchEnd = () => {
    this.end();
  };
	shouldComponentUpdate(nextProps, nextState) {
		return (!shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState));
	}
	render() {
		let rippleGroup, renderTouchRipple;
		const {
			hasRipples,
			style,
			children,
		} = this.props;

		const styleNameClass = getStyleNameClass();

		if(hasRipples && this.state.isRipples) {
			// conso
			rippleGroup = (
				<ReactTransitionGroup styleName={styleNameClass.transitionGroup}>
					{this.state.ripples}
				</ReactTransitionGroup>
			)
		}
		
		return (
			<div
					styleName={styleNameClass.root}
					onMouseDown={this.handleMouseDown}
					onMouseUp={this.handleMouseUp}
					onMouseLeave={this.handleMouseLeave}
					onTouchStart={this.handleTouchStart}
					onTouchEnd={this.handleTouchEnd}
					style={style}
				>
				{rippleGroup}	
				{children}
			</div>
		)
	}
}

export default TouchRipple;