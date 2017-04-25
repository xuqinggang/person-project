import React, {
	Component,
	PropTypes,
	cloneElement,
} from 'react';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';

import EnhanceButton from 'components/shared/internal/EnhanceButton';
import FontIcon from 'components/shared/Icon/FontIcon/FontIcon';
import styles from './IconButton.scss';
function getStyleNameClass() {
	return {
		root:'m-iconButton'
	}
}
@CSSModules(styles, { allowMultiple: true })
class IconButton extends Component {
	static propTypes = {
		children: PropTypes.node,
		className: PropTypes.string,
		style: PropTypes.object,
		hoveredStyle: PropTypes.object,
		iconClassName: PropTypes.string,
		iconStyle: PropTypes.object,
		href: PropTypes.string,
		disabled: PropTypes.bool,
		tooltip: PropTypes.node,
		// tooltipPosition: PropTypes.cornersAndCenter, //'bottom-center' The vertical and horizontal positions, respectively, of the element's tooltip. Possible values are: "bottom-center", "top-center", "bottom-right", "top-right", "bottom-left", and "top-left".
		touch: PropTypes.bool, //If true, increase the tooltip element's size. Useful for increasing tooltip readability on mobile devices.
		disableTouchRipple: PropTypes.bool,
	}
	constructor(props) {
		super(props);
	}
	showTooltip() {
		if(this.props.tooltip) {

		}
	}
	hideTooltip() {

	}

	handleBlur = (event) => {
		this.hideTooltip();
		if(this.props.handleBlur) {
			this.props.onBlur(event);
		}
	};
	handleFocus = (event) => {
    this.showTooltip();
    if (this.props.onFocus) this.props.onFocus(event);
  };
  handleKeyboardFocus = (event, isKeyboardFocused) => {
  	if(isKeyboardFocused && !this.props.disabled) {
  		this.showTooltip();
  		if (this.props.onFocus) this.props.onFocus(event);
  	} else {
  		this.hideTooltip();
  		if (this.props.onBlur) this.props.onBlur(event);
  	}
  	if(this.props.onKeyboardFocus) this.props.onKeyboardFocus(event, isKeyboardFocused)
  }
	handleMouseEnter = (event) => {
    this.showTooltip();
    if (this.props.onMouseEnter) this.props.onMouseEnter(event);
  };
  handleMouseLeave = (event) => {
    if (!this.refs.button.isKeyBoardFocused()) this.hideTooltip();
    if (this.props.onMouseLeave) this.props.onMouseLeave(event);
  };
	render() {
		const {
      disabled,
      disableTouchRipple,
      children,
      style,
      iconClassName,
      className,
      onKeyboardFocus, // eslint-disable-line no-unused-vars
      ...other
    } = this.props;

    const styleNameClass = getStyleNameClass();
    let fontIcon;
    if(iconClassName) {
    	fontIcon = (
    		<FontIcon
    			className={iconClassName}
    		>
    			{children}
    		</FontIcon>
    	)
    }
		return (
			<EnhanceButton
				{...other}
				styleName={styleNameClass.root}
				className={className}
				style={style}
				ref="button"
				centerRipple={true}
				disabled={disabled}
				disableTouchRipple={disableTouchRipple}
				onBlur={this.handleBlur}
        onFocus={this.handleFocus}
        onMouseLeave={this.handleMouseLeave}
        onMouseEnter={this.handleMouseEnter}
        onKeyboardFocus={this.handleKeyboardFocus}
			>
				{fontIcon}
			</EnhanceButton>
		)
	}
}

export default IconButton;