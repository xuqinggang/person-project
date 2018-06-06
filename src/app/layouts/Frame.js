import React, {
    PropTypes
} from 'react';
import CSSModules from 'react-css-modules';
import IntroHead from 'layouts/IntroHead/IntroHead.js';
import { Tags } from 'layouts/SiderBar';
import Footer from 'layouts/Footer';
import routes from 'routes/index';
import styles from './style.scss';

@CSSModules(styles, {
    allowMultiple: true,
    handleNotFoundStyleName: 'ignore',
})
class Frame extends React.Component {
    render() {
        const { children, history } = this.props;
        return (
                <div styleName="m-frame">
                    {
                        // <header>
                        //     <IntroHead styleName='frame-introHead'/>
                        // </header>
                    }
                    <div styleName="frame-body-container">
                        <div styleName="frame-body">
                            <div styleName="body-content">
                                {
                                    routes(history)
                                }
                            </div>
                            <div styleName="body-sidebar">
                                <article>
                                    <Tags />
                                </article>
                            </div>
                        </div>
                    </div>
                    {
                        // <footer>
                        //     <Footer styleName="frame-footer"/>
                        // </footer>
                    }
                    {
                        // <div className="container" style={{backgroundColor: '#fff',zIndex:10,position:'relative'}}>
                        //     {this.props.children}
                        // </div>
                    }
                </div>
        );
    }
}

export default Frame;
