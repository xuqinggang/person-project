// 头部导航
import React, { PropTypes, Children, cloneElement, } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './style.scss'
import 'styles/grid.scss'

@CSSModules(styles, {
    allowMultiple: true,
    handleNotFoundStyleName: 'ignore',
})
class Nav extends React.Component {
    static contextTypes = {
        router: PropTypes.object
    };
    static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
    };
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
        }
    }
    getLinks(props = this.props) {
        const links = [];
        Children.forEach(props.children, (link) => {
            links.push(link);
        });
        return links;
    }

    handleTouchLink = (selectedIndex, link) => {
        if(this.state.selectedIndex !== selectedIndex) {
            console.log('console', this.context)
            // router push
            this.context.router.history.push(link.props.to);
            this.setState({
                selectedIndex
            });
        }
    }

    renderNav() {
        const links = this.getLinks();

        // const width = parseFloat(100 / links.length, 10);
        // const linkStyle = {
        //     width: `${width}%`,
        // };
        const nav = links.map((link, index) => {
            const navLinkClass = classnames({
                'link-active': this.state.selectedIndex === index,
                'link': true,
            });

            let tmp = cloneElement(link, {
                key: link.props.order || index,
            });
            return <li 
                className={ 'grid-col' }
                styleName={ navLinkClass }
                key={ link.props.order || index } 
                onTouchTap={ this.handleTouchLink.bind(this, index, link) }>
                { tmp }
            </li>
        });
        return nav;
    }

    render() {
        const { className } = this.props;
        const ulClass = classnames('g-grid-row', className);
        return (
            <nav>
                <ul className={ ulClass } styleName={ 'm-nav' }>
                    { this.renderNav() }
                </ul>
            </nav>
        );
    }
}

export default Nav;
