import React, {
	Component,
	PropTypes,
	createElement,
	cloneElement,
	isValidElement,
} from 'react';
import classnames from 'classnames';
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import CSSModules from 'react-css-modules';

import TouchRipple from './TouchRipple.js';
import FocusRipple from './FocusRipple.js';
import Events from '../utils/events';
import keycode from '../utils/keycode';
import {createChildFragment} from '../utils/ChildUtils';

import styles from './EnhanceButton.scss';

function getStyleNameClass() {
	return {
		root: 'm-enhanceButton'
	}
}
// 是否在监听window上的keyDown事件
let listening = false;
// 是否按tab键
let tabPressed = false;
function handleKeyTabPress(event) {

	tabPressed = keycode(event) === 'tab';
}
// 监听window keyDown事件是否按tab键
function listenForTabPress() {
	if(!listening) {
		Events.on(window, 'keydown', handleKeyTabPress)
		listening = true;
	}
}

@CSSModules(styles, { allowMultiple: true })
class EnhanceButton extends Component {
	static propTypes = {
		containerElement: PropTypes.oneOfType([
				PropTypes.string,
				PropTypes.element,
			]),
		tabIndex: PropTypes.number,
		type: PropTypes.string,
		keyBoardFocus: PropTypes.bool,
		disabled: PropTypes.bool,
		disableKeyBoardFocus: PropTypes.bool,
		children: PropTypes.node,
		onBlur: PropTypes.func,
		onClick: PropTypes.func,
		onFocus: PropTypes.func,
		onKeyDown: PropTypes.func,
		onKeyUp: PropTypes.func,
		onKeyboardFocus: PropTypes.func,
		onMouseDown: PropTypes.func,
		onMouseEnter: PropTypes.func,
		onMouseLeave: PropTypes.func,
		onMouseUp: PropTypes.func,
		onTouchStart: PropTypes.func,
		onTouchEnd: PropTypes.func,
		onTouchTap: PropTypes.func,

	};

	static defaultProps = {
		containerElement: 'button',
		tabIndex: 0, // keyboard "tab" focus to button
		type: 'button',
		disabled: false,
		disableKeyBoardFocus: false, // 是否可以 keyboard focus
		keyBoardFocus: false, // 是否处于keboardFocus 状态
		onBlur: () => {},
	  onClick: () => {},
	  onFocus: () => {},
	  onKeyDown: () => {},
	  onKeyUp: () => {},
	  onKeyboardFocus: () => {},
	  onMouseDown: () => {},
	  onMouseEnter: () => {},
	  onMouseLeave: () => {},
	  onMouseUp: () => {},
	  onTouchEnd: () => {},
	  onTouchStart: () => {},
	  onTouchTap: () => {},
	};

	constructor(props) {
		super(props);
		this.state = {
			isKeyBoardFocused: false,
		};
	}
	isKeyBoardFocused() {
		return this.state.isKeyboardFocused;
	}
	setKeyBoardFocus(event) {
		if(!this.props.disableKeyBoardFocus) {
			this.setState({
				isKeyBoardFocused: true,
			});
			this.props.onKeyboardFocus(event, true);
			tabPressed = false;
		}
	}
	removeKeyBoardFocus(event) {
		if(this.state.isKeyBoardFocused) {
			this.setState({
				isKeyBoardFocused: false,
			});
			this.props.onKeyboardFocus(event, false);
		}
	}
	//
	cancelFocusTimeout() {
		if(this.focusTimeout) {
			clearTimeout(this.focusTimeout);
			this.focusTimeout = null;
		}
	}
	handleKeyDown = (event) => {
		const {
			disabled,
			disableKeyBoardFocus,
		} = this.props;
		if(!disabled && !disableKeyBoardFocus) {
			if(keycode(event) === 'enter' && this.state.isKeyBoardFocused) {
				this.handleTouchTap(event);
			} else if(keycode(event) === 'esc' && this.state.isKeyBoardFocused) {
				this.removeKeyBoardFocus(event);
			}
			this.props.onKeyDown(event);
		}
	};
	handleKeyUp = (event) => {
		const {
			disabled,
			disableKeyBoardFocus,
		} = this.props;
		if(!disabled && !disableKeyBoardFocus) {
			this.props.onKeyUp(event);
		}
	};
	// touch focus | keyboard 'tab' focus 
	handleFocus = (event) => {

		if(event) event.persist();
		if(!this.props.disabled && !this.props.disableKeyBoardFocus) {
			// setTimeout is needed because the focus event fires first
      // Wait so that we can capture if this was a keyboard focus
      // or touch focus
			// keyboard focus
			this.focusTimeout = setTimeout(() => {
				if(tabPressed) {
					this.setKeyBoardFocus(event);
					tabPressed = false;
				}
			}, 150);
		}
		if(!this.props.disabled) {
			this.props.onFocus(event);
		}
	};

	handleTouchTap = (event) => {
		tabPressed = false;
		if(!this.props.disabled) {
			this.cancelFocusTimeout();
			this.removeKeyBoardFocus(event);
			this.props.onTouchTap(event);
		}
	};

	handleClick = (event) => {
		tabPressed = false;
		if(!this.props.disabled) {
			this.cancelFocusTimeout();
			this.removeKeyBoardFocus(event);
			this.props.onClick(event);
		}
	};

	handleBlur = (event) => {
		if(!this.props.disabled) {
			this.cancelFocusTimeout();
			this.removeKeyBoardFocus(event);
			this.props.onBlur(event);
		}
	};

	componentWillMount() {
		const {
			disabled,
			disableKeyBoardFocus,
			keyBoardFocus,
		} = this.props;
		if(!disabled && keyBoardFocus && !disableKeyBoardFocus) {
			this.setState({
				isKeyBoardFocused: true,
			})
		}
	}
	componentDidMount() {
		listenForTabPress();
		if(this.state.isKeyBoardFocused) {
			this.refs.enhanceButton.focus();
			this.props.onKeyboardFocus(null, true);
		}
	}
	componentWillReceiveProps(nextProps) {
		const {
			disabled,
			disableKeyBoardFocus
		} = nextProps;
		// 禁用keyboardFocus 或者 父组件重新渲染且状态还是focus
		if((disabled || disableKeyBoardFocus) && this.state.isKeyboardFocused) {
			this.setState({
				isKeyBoardFocused: false,
			})
			if(nextProps.onKeyboardFocus) {
				// false为失焦
				nextProps.onKeyboardFocus(null, false)
			}
		}
	}
	// componentWillUnMount() {
	// 	if(this.listening) {
	// 		Events.off(window, 'keyDown', this.handleTabPress)
	// 	}
	// }
	createButtonChildren() {
		const {
			children,
			disabled,
			disableFocusRipple,
			disableTouchRipple,
			disableKeyBoardFocus,
			focusRippleColor,
			focusRippleOpacity,
			touchRippleColor,
			touchRippleOpacity,
			centerRipple,
		} = this.props;
		const {isKeyBoardFocused} = this.state;

		const focusRipple = isKeyBoardFocused && !disabled && !disableFocusRipple && !disableKeyBoardFocus ? (
			<FocusRipple
				bgColor={focusRippleColor}
				opacity={focusRippleOpacity}
				show={isKeyBoardFocused}
			/>
			) : null;
		const touchRipple = !disabled && !disableTouchRipple ? (
			<TouchRipple
				bgColor={touchRippleColor}
				centerRipple={centerRipple}
				opacity={touchRippleOpacity}
			>
			</TouchRipple>
			) : null;
		return createChildFragment(
			{
				focusRipple,
				touchRipple,
				children: children ,
			}
		)
	}
	render() {
		const {
			containerElement,
			href,
			tabIndex,
			type,
			disabled,
			style,
			className,
			onBlur, // eslint-disable-line no-unused-vars
      onClick, // eslint-disable-line no-unused-vars
      onFocus, // eslint-disable-line no-unused-vars
      onKeyUp, // eslint-disable-line no-unused-vars
      onKeyDown, // eslint-disable-line no-unused-vars
      onKeyboardFocus, // eslint-disable-line no-unused-vars
      onTouchTap, // eslint-disable-line no-unused-vars
      disableKeyBoardFocus,
      disableTouchRipple,
      keyBoardFocus,
      centerRipple,
      ...other,
		} = this.props;
		const styleNameClass = getStyleNameClass();
		const mergedStyles = Object.assign({
			cursor: disabled ? 'default' : 'pointer',
		}, style);
		// 如果有href属性 且 disabled=true
		if(disabled && href) {
			return (
				<span
				styleName={styleNameClass.root}
				style={mergedStyles}
				{...other}
				>
					{children}
				</span>
			);
		}
		const buttonProps = {
			styleName: styleNameClass.root,
			style: mergedStyles,
			ref: 'enhanceButton',
			disabled: disabled,
			tabIndex: tabIndex,
			type: type,
			href: href,
			onBlur: this.handleBlur,
			onClick: this.handleClick,
			onFocus: this.handleFocus,
			onKeyUp: this.handleKeyUp,
			onKeyDown: this.handleKeyDown,
			onTouchTap: this.handleTouchTap,
			...other,
		}

		const buttonChildren = this.createButtonChildren();

		if(isValidElement(containerElement)) {
			return cloneElement(containerElement, buttonProps, buttonChildren);
		}
		return createElement(href ? 'a' : containerElement, buttonProps, buttonChildren)	
	}
}

export default EnhanceButton;