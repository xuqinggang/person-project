import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Mditor from 'editor-md';
import styles from './styles.scss';

@CSSModules(styles, {
    allowMultiple: true,
    handleNotFoundStyleName: 'ignore',
})
class MdEditor extends Component {
    componentDidMount() {
        const { onChange } = this.props;
        this.mditorIns = Mditor.fromTextarea(this.textareaDom);
        this.mditorIns.on('ready', () => {
            this.mditorIns.on('changed', () => {
                if (onChange) {
                    onChange(this.mditorIns.value);
                }
            });
        });
    }

    render() {
        return (
            <div styleName="m-mdeditor">
                <textarea 
                    ref={ (textareaDom) => { this.textareaDom = textareaDom; } }
                    id="mdeditor" 
                >
                </textarea>
            </div>
        )
    }
}

export default MdEditor;
