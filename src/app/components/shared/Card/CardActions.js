import React, {
	Component,
	PropTypes,
	Children,
	cloneElement,
	isValidElement,
} from 'react';
import classnames from 'classnames';
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import CSSModules from 'react-css-modules';

import styles from './styles.scss';

function getStyleName() {
	return {
		root: 'm-cardActions',
		action: 'cardActions-action',
	}
}

@immutableRenderDecorator
@CSSModules(styles, { allowMultiple: true })
class CardActions extends Component {
	static propTypes = {
		style: PropTypes.object,
		children: PropTypes.node,
		className: PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		const {
			style,
			children,
			className,
			...other,
		} = this.props;
		
		const styleNameClass = getStyleName();

		const actionChildren = Children.map(children, child => { 

			if(isValidElement(child)) {
				return cloneElement(child, {
					style: Object.assign({}, child.props.style),
					styleName: styleNameClass.action,
					className: child.props.className,
				});
			}
		})
		
		return (
			<div {...other} style={style} className={className} styleName={styleNameClass.root}>
				{actionChildren}
			</div>
		)
	}
}

export default CardActions;