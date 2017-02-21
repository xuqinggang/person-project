import React, {
	Component,
	PropTypes,
	createElement,
	cloneElement,
	isValidElement,
} from 'react';
import ReactDom from 'react-dom';

import CSSModules from 'react-css-modules';

import BaseTheme from 'components/shared/styles/muiTheme';
import autoPrefix from 'components/shared/utils/autoPrefix';

import styles from './FocusRipple.scss';

const pulsateDuration = 750;

function getStyleNameClass() {
	return {
		root: 'm-focusRipple',
		ripple: 'focusRipple-transition',
	}
}

@CSSModules(styles, { allowMultiple: true })
class FocusRipple extends Component {
	static propTypes = {
		bgColor: PropTypes.string,
		opacity: PropTypes.number,
		style: PropTypes.object,
		show: PropTypes.bool,
		children: PropTypes.node,
	};

	static defaultProps = {
		show: true,
	};
	constructor(props) {
		super(props);
	}
	getRippleElement(props, styleNameClass) {
		const {
			bgColor,
			opacity,
		} = props;

		const innerStyle = {
			opacity: opacity ? opacity : 0.16,
			backgroundColor: bgColor || BaseTheme.ripple.color,
			transition: `transform ${pulsateDuration}ms linear 0ms`,
		}
		return <div ref="innerCircle" styleName={styleNameClass.ripple} style={innerStyle}></div>
	}
	pulsateTransition = () => {
		const startScale = 'scale(0.85)';
		const endScale = 'scale(1)';
		const currentScale = this.innerCircleDom.style.transform || endScale;
		const nextScale = currentScale === endScale ? startScale : endScale;
		autoPrefix.set(this.innerCircleDom.style, 'transform', nextScale);	
	}

	pulsate = () => {
		this.innerCircleDom = ReactDom.findDOMNode(this.refs.innerCircle);
		this.pulsateTransition()
		this.timeout = setTimeout(this.pulsateTransition, pulsateDuration);
	}

	componentDidMount() {
		if(this.props.show) {
			this.pulsate();
		}
	}
	componentWillUnmount() {
		clearTimeout(this.timeout);
	}
	
	render() {
		const {
			show,
			style,
			children,
		} = this.props;
		const styleNameClass = getStyleNameClass();

		const ripple = show ? this.getRippleElement(this.props, styleNameClass) : null;
		return (
				show ? (
					<div styleName={styleNameClass.root} style={style}>
						{ripple}
						{children}
					</div>
					) : null	
		)
	}
}

export default FocusRipple;