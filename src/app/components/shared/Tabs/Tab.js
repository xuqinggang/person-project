import React, {Component,
  createElement,
  cloneElement,
  Children,
  isValidElement,
  PropTypes,
} from 'react';
import classnames from 'classnames';
import TabTemplate from './TabTemplate.js'
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import CSSModules from 'react-css-modules';

import styles from './styles.scss';

@immutableRenderDecorator
class Tab extends Component {
	static propTypes = {
		index: PropTypes.number,
		className: PropTypes.string,
		onTouchTab: PropTypes.func,
		selected: PropTypes.bool,
		width: PropTypes.string,
		label: PropTypes.node,
		tab: PropTypes.node,
	}
	constructor(props) {
		super(props);
	}

	handleTouchTap = (event) => {
		if(this.props.onTouchTab) {
			this.props.onTouchTab(this.props.index, event, this)
		}
	}

	render() {
		const {
			label,
			width,
		} = this.props;
		return(
			<li onTouchTap={this.handleTouchTap} style={{width:width}}>
				{label}
			</li>
		)
	}
}

export default Tab;
