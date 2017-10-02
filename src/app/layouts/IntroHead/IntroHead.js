// 头部介绍：包括导航和顶部图片
import React from 'react';
import ReactDom, { findDOMNode } from 'react-dom';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';
import Nav from 'layouts/Nav/Nav.js'
import styles from './style.scss'

@CSSModules(styles, {
    allowMultiple: true,
    handleNotFoundStyleName: 'ignore',
})
class IntroHead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // 是否达到滚动距离
            isToScroll: false,
        };
        // 利用tag来避免监听滚动过程中setState多次渲染
        this.tag = 0;
    }
    componentDidMount() {
        const navDomHeight = this.navDom.getBoundingClientRect().height;
        const introHeadDomHeight = findDOMNode(this).getBoundingClientRect().height; 
        // 滚动条滚动距离达到的目的值
        const toScrollHeight = introHeadDomHeight - navDomHeight;
        window.addEventListener('scroll', (e) => {
            if (window.pageYOffset >= toScrollHeight) {
                if (this.tag === 0) {
                    this.setState({
                        isToScroll: true,
                    });
                }
                this.tag = 1;
            } else {
                if (this.tag === 1) {
                    this.setState({
                        isToScroll: false,
                    });
                }
                this.tag = 0;
            }
        })
    }
	render() {
        const { className } = this.props;
        const { isToScroll } = this.state;
        const navClass = classnames('introHead-nav', {
            'introHead-nav-scroll': isToScroll,
        });
        return (
            <div className={ className } styleName='m-introHead'>
                <div styleName={ navClass } ref={ (node) => { this.navDom = node; } }>
                    <Nav>
                        <a to="/">主页</a>
                        <a to="/detail/123">前端</a>
                        <a to="/category/backend">后端</a>
                        <a to="/category/talk">杂谈</a>
                    </Nav>
                </div>
                <div styleName='m-intro'>
                    <div styleName='intro-bg'>
                        <div styleName="bg-img"></div>
                        <div styleName='bg-text'>
                            <h1 styleName='text-trickName'>许庆钢</h1>
                            <span styleName='text-motto'>
                                我很满意。我清醒的时候，知道此非梦境。尽管在做梦的时候，我以为那就是现实。
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
	}
}

export default IntroHead;
