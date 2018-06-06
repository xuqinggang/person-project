import React, {
	Component,
	PropTypes,
} from 'react';
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

@immutableRenderDecorator
@CSSModules(styles, { allowMultiple: true })
class Paper extends Component {
	static propTypes = {
		children : PropTypes.oneOfType([
			PropTypes.arrayOf(PropTypes.node),
			PropTypes.node,
		]),
		zDepth: PropTypes.number,
		rounded: PropTypes.bool,
		className: PropTypes.string,
		style: PropTypes.object,
	};

	static defaultProps = {
		zDepth: 1,
		rounded: true,
	}
	constructor(props) {
		super(props);
	// 	this.zDepthShadows = [
 //        [1, 6, 0.12, 1, 4, 0.12],
 //        [3, 10, 0.16, 3, 10, 0.23],
 //        [10, 30, 0.19, 6, 10, 0.23],
 //        [14, 45, 0.25, 10, 18, 0.22],
 //        [19, 60, 0.30, 15, 20, 0.22],
	}

	render() {
		const {
			children,
			className,
			zDepth,
			rounded,
			style,
			...other,
		} = this.props;

		const paerContainerClass = 'm-paper';

		return (
			<div {...other} styleName={paerContainerClass} className={className} style={Object.assign({}, style)}>
				{children}
			</div>
		)
	}
}

Paper.displayName = 'Paper';

export default Paper;
