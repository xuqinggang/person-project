import React, {
	Component,
	PropTypes,
	cloneElement,
} from 'react';
import classnames from 'classnames';
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import CSSModules from 'react-css-modules';

import { BaseTheme } from 'components/shared/styles/muiTheme';
import styles from './styles.scss';
import Paper from 'components/shared/Paper';

function getStyleName() {
	// const rootClass = classnames({
	// 	'm-fontIcon': true,
	// 	'fontIcon-icon-hoverd': state.hovered,
	// });
	return {
		root: 'm-fontIcon',
	}
}

@immutableRenderDecorator
@CSSModules(styles, { allowMultiple: true })
class FontIcon extends Component {
	static propTypes = {
		color: PropTypes.string,
		hoverColor: PropTypes.string,
		className: PropTypes.string,
		style: PropTypes.object,
		onMouseLeave: PropTypes.func,
		onMouseEnter: PropTypes.func,
	};

	static defaultProps = {
		onMouseLeave : () => {},
		onMouseEnter : () => {},
	};
	constructor(props) {
		super(props);

		this.state = {
			hovered: false,
		}
	}
	
	handleMouseEnter = (event) => {
		if(this.props.hoverColor) {
			this.setState({
				hovered: true,
			})
		}
		if(this.props.onMouseEnter) {
			this.props.onMouseEnter(event);
		}
	}

	handleMouseLeave = (event) => {
		if(this.props.hoverColor) {
			this.setState({
				hovered: false,
			})
		}
		if(this.props.onMouseLeave) {
			this.props.onMouseLeave(event);
		}
	}

	render() {
		const {
			style,
			className,
			color,
			hoverColor,
			other,
		} = this.props;

		const styleNameClass = getStyleName();

		const offColor = color || BaseTheme.palette.textColor
		const onColor = hoverColor || offColor
		
		return (
			<span
				{...other}
				style={Object.assign({}, style, {color: this.state.hovered ? onColor : offColor})}
				styleName={styleNameClass.root}
				className={className}
				onMouseLeave={this.handleMouseLeave}
				onMouseEnter={this.handleMouseEnter}
			>
			</span>
		)
	}
}

export default FontIcon;