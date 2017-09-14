import React, {
	Component,
	PropTypes,
	cloneElement,
} from 'react';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import shallowEqual from 'recompose/shallowEqual';

import styles from './ToolTip.scss';

function getStyleNameClass() {
	return {
		root: 'm-tooltip',
	}
}

function getStyles(props) {
	return {

	}
}

@CSSModules(styles, { allowMultiple: true })
class ToolTip extends Component {
	static protoTypes = {

	};
	
	static defaultProps = {

	};
	
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		const tooltipEle = this.refs.tooltip;
		const tipOffsetWidth = tooltipEle.offsetWidth;
		const tipOffsetHeight = tooltipEle.offsetHeight;

		

	}
	shouldComponentUpdate(nextProps, nextState) {
		return (!shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState));
	}

	render() {
		const {
			children,

		} = this.props;

		const styleNameClass = getStyleNameClass();

		const innerStyle = getStyles(this.props);
		const mergeStyle = 
		<div
			ref="tooltip"
			styleName={styleNameClass.root}
		>
			{children}
		</div>
	}
}