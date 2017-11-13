import React, {PropTypes} from 'react';
import classnames from 'classnames';

import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import CSSModules from 'react-css-modules';

import styles from './styles.scss'

const TabTemplate = ({children, selected}) => {

	const templateStyle = {};
	if(!selected) {
		templateStyle.width = 0;
		templateStyle.height = 0;
		templateStyle.overflow = 'hidden';
	}

	const contentClassName = classnames({
		'tab-content': true,
		'tab-content-active': selected,
	});

	return (
		<div style={templateStyle} className={contentClassName}>
			{children}
		</div>
	)
}

TabTemplate.PropTypes = {
	children: PropTypes.node,
	selected: PropTypes.bool,
};

export default TabTemplate;