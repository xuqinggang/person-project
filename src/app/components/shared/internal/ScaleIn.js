import React, {
	Component,
	PropTypes,
	createElement,
	cloneElement,
	isValidElement,
} from 'react';
import ReactDom from 'react-dom';
import ReactTransitionGroup from 'react-addons-transition-group';

import CSSModules from 'react-css-modules';

import ScaleInChild from './ScaleInChild'
import styles from './ScaleIn.scss';

function getStyleNameClass() {
	return {
		root: 'm-scaleInTransition',
		scaleInChild: 'scaleInTransition-child',
	}
}

@CSSModules(styles, {allowMultiple: true})
class ScaleIn extends Component {
	 static propTypes = {
    children: PropTypes.node,
    enterDelay: PropTypes.number,
    maxScale: PropTypes.number,
    minScale: PropTypes.number,
    style: PropTypes.object,
  };
  static defaultProps = {
    enterDelay: 0,
  };
	constructor(props) {
		super(props);
	}
	render() {
		const {
			style,
			children,
			maxScale,
			minScale,
			enterDelay,
			...other,
		} = this.props;
		console.log(children)
		const styleNameClass = getStyleNameClass();
		const newChildren = React.Children.map(children, (child, index) => {
			return (
				<ScaleInChild
					key={index}
					enterDelay={enterDelay}
					maxScale={maxScale}
					minScale={minScale}
					styleName={styleNameClass.scaleInChild}
				>
					{child}
				</ScaleInChild>
			)
		})

		return (
			<ReactTransitionGroup
			{...other}
			style={style}
			styleName={styleNameClass.root}
			component="div"
			>
			{newChildren}
			</ReactTransitionGroup>
		)
	}
}

export default ScaleIn;