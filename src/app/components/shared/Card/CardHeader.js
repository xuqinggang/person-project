import React, {
	Component,
	PropTypes,
} from 'react';
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import CSSModules from 'react-css-modules';

import styles from './styles.scss';

@immutableRenderDecorator
@CSSModules(styles, { allowMultiple: true })
class CardHeader extends Component {
	constructor(Props) {
		super(Props);
	}
}

export default CardHeader;