import React, {
	Component,
	PropTypes,
} from 'react';
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import CSSModules from 'react-css-modules';

import styles from './styles.scss';

@immutableRenderDecorator
@CSSModules(styles, { allowMultiple: true })
class CardTitle extends Component {
	static propTypes = {
		style: PropTypes.object,
		title: PropTypes.string,
		subTitle: PropTypes.string,
		titleStyle: PropTypes.object,
		subTitleStyle: PropTypes.object,
		children: PropTypes.node,
	}
	constructor(Props) {
		super(Props);
	}

	render() {
		const {
			title,
			subTitle,
			style,
			titleStyle,
			subTitleStyle,
		} = this.props;

		const cardTitleContainerClass = "m-cardTitle";
		const cardTitleClass = 'cardTitle-title';
		const cardSubTitleClass = 'cardTitle-subTitle';

		let renderTitle = title ? (<h1 styleName={cardTitleClass} style={titleStyle}>{title}</h1>): null;
		let renderSubTitle = subTitle ? (<h2 styleName={cardSubTitleClass} style={subTitleStyle}>{subTitle}</h2>) : null;

		return (
			<div style={style} styleName={cardTitleContainerClass}>
				{renderTitle}
				{renderSubTitle}
			</div>
		)
	}
}

export default CardTitle;