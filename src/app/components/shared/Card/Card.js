import React, {
	Component,
	PropTypes,
	cloneElement,
} from 'react';
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import CSSModules from 'react-css-modules';

import styles from './styles.scss';
import Paper from 'components/shared/Paper';

@immutableRenderDecorator
@CSSModules(styles, { allowMultiple: true })
class Card extends Component {
	static propTypes = {
		children : PropTypes.oneOfType([
			PropTypes.arrayOf(PropTypes.node),
			PropTypes.node,
		]),
		className: PropTypes.string,
		style: PropTypes.object,
	}

	constructor(props) {
		super(props);
	}

	render() {
		const {
			style,
			className,
			children,
		} = this.props;
		
		const cardStyle = {
			zIndex: 1,
		};
		const cardContainerClass = 'm-card'
		return (
			<Paper style={Object.assign({}, cardStyle, style)} className={className} styleName={cardContainerClass}>
				<div>
					{children}
				</div>
			</Paper>
		)
	}

}

export default Card;