import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import routes from 'routes/index';
import styles from './style.scss';

@CSSModules(styles, {
    allowMultiple: true,
    handleNotFoundStyleName: 'ignore',
})
class Frame extends Component {
    render() {
        const { children, history } = this.props;
        return (
            <div styleName="m-frame" className="g-grid-row">
                <div styleName="frame-side" className="grid-col grid-col-basis200">
                </div>
                <div styleName="frame-body" className="grid-col">
                    <div styleName="body-head">
                    </div>
                    <div styleName="body-content">
                        {
                            routes(history)
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Frame;
