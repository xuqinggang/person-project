import React, {
    Component,
    PropTypes,
    createElement,
    cloneElement,
    isValidElement,
} from 'react';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';
import EnhanceButton from '../internal/EnhanceButton';
import styles from './styles.scss';

function getStyleNameClass() {
    return {
        root: 'm-tag',
    }
}

@CSSModules(styles, {
    allowMultiple: true,
    handleNotFoundStyleName: 'ignore',
})
export default class Tag extends Component {
    static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
        style: PropTypes.object,
        disabled: PropTypes.bool,
    }

    static defaultProps = {
        onClick: () => {},
        disableTouchRipple: true,
    };
    
    constructor(props) {
        super(props);
        this.state = {
            isClicked: !!props.isClicked,
        }
    }

    handleClick = (...params) => {
        if (this.props.disabled) {
            return;
        }
        console.log('xxx');
        this.setState({
            isClicked: !this.state.isClicked,
        }, () => {
            if (this.props.onClick) {
                this.props.onClick(this.props.tag, ...params);
            }
        })
    }
    componentWillReceiveProps(nextProps) {

    }
    render() {
        const {
            disabled,
            className,
            style,
            children,
            disableTouchRipple,
        } = this.props;
        const { isClicked } = this.state;
        const tagStyleClass = classnames('m-tag', {
            'tag-clicked': isClicked,
        });
        return (
            <EnhanceButton
                styleName={ tagStyleClass }
                className={className}
                style={style}
                ref="button"
                centerRipple={true}
                disabled={disabled}
                disableTouchRipple={disableTouchRipple}
                onClick={this.handleClick}
            >
                { children }
            </EnhanceButton>
        )
    }
}
