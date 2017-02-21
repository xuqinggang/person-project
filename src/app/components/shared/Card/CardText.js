import React, {
	Component,
	PropTypes,
} from 'react';
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import CSSModules from 'react-css-modules';

import styles from './styles.scss';

@immutableRenderDecorator
@CSSModules(styles, { allowMultiple: true })
class CardText extends Component {
	static propTypes = {
		children: PropTypes.node,
		style: PropTypes.object,
		className: PropTypes.string,

	}
	constructor(Props) {
		super(Props);
	}

	render() {
		const {
			children,
			style,
			className,
			...other
		} = this.props;

		const cardTextContainerClass = 'm-cardText'
		return (
			<div style={style} {...other} className={className} styleName={cardTextContainerClass}>
				{children}
			</div>
		)
	}

}

export default CardText;