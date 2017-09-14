import React, {
    PropTypes
} from 'react';
import Nav from './Nav';
import IntroHead from 'layouts/IntroHead/IntroHead.js';
class Frame extends React.Component {
    render() {
        return (
            <div className="frame">
                {
                    // <IntroHead />
                }
                <div className="container" style={{backgroundColor: '#fff',zIndex:10,position:'relative'}}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Frame;
