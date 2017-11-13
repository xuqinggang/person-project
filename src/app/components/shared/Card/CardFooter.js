import React, {
	Component,
	PropTypes,
} from 'react';
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import CSSModules from 'react-css-modules';

import styles from './styles.scss';

@immutableRenderDecorator
@CSSModules(styles, { allowMultiple: true })
class CardFooter extends Component {
	constructor(Props) {
		super(Props);
	}

	render() {
		const {
			children,
			style,
			className
		} = this.props;

		const cardFooterContainerClass = 'm-cardFooter';
		return (
			<footer>
				<div style={style} className={className} styleName={cardFooterContainerClass}>
					{children}
				</div>
			</footer>
		)
	}
}

export default CardFooter;