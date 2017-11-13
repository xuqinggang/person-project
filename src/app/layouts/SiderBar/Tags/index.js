import React, {
    PropTypes,
    Component,
} from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.scss';
import Paper from 'shared/Paper';
@CSSModules(styles, {
    allowMultiple: true,
    handleNotFoundStyleName: 'ignore',
})
export default class Tags extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: ['css', 'javascript', 'react', 'redux', 'react-redux', '框架库', '译文', 'PWA', '生活', '随想录']
        }
    }
    renderTags() {
        return this.state.tags.map((tag, index) => {
            return (
                <a href="" styleName="tags-item" className="u-tags-round">
                    { tag }
                </a>
            )
        });
    }
    render() {
        return (
            <div styleName="m-tags">
                <Paper>
                    <h5 styleName="tags-title">TAGS</h5>
                    <hr styleName="tags-line" className="u-line-eee"/>
                    <div styleName="tags-item-container">
                        { this.renderTags() }
                    </div>
                </Paper>
            </div>
        )
    }
}
