import React, { Component } from 'react';
import Immutable, { Map } from 'immutable';
import CSSModules from 'react-css-modules';
import Tag from 'shared/Tag/Tag';
import styles from './styles.scss';

@CSSModules(styles, {
    allowMultiple: true,
    handleNotFoundStyleName: 'ignore',
})
export default class Tags extends Component {
    constructor(props) {
        super(props);
        this.state = {
            $$addedTags: Map(),
        }
    }
    handleTagClick = (tagItem) => {
        console.log(tagItem, 'tagItem')
        if (tagItem) {
            let $$addedTags = this.state.$$addedTags;
            if (!$$addedTags.has(tagItem.id)) {
                $$addedTags = $$addedTags.set(tagItem.id, tagItem.name);
            } else {
                $$addedTags = $$addedTags.delete(tagItem.id);
            }
            this.setState({
                $$addedTags,
            });
        }
    }
    // 渲染已添加的tag列表
    renderAddedTags() {
        const $$addedTags = this.state.$$addedTags;
        let addTags = [];
        $$addedTags.forEach((name, id) => {
            console.log('id', id)
            addTags.push(
                <Tag
                    key={ id }
                    disabled={ true }
                    isClicked={ true }
                >
                    { name }
                </Tag>
            )
        });
        return addTags;
    }
    renderTagsList() {
        const {
            tags,
        } = this.props;
        return tags && tags.map((tagItem, index) => {
            return (
                <Tag tag={ tagItem } key={ index } onClick={ this.handleTagClick }>
                    { tagItem.name }
                </Tag>
            )
        });
    }
    render() {
        return (
            <div styleName="m-tags">
                <div>
                    {
                        this.renderAddedTags()
                    }
                </div>
                <div styleName="tags-list-wrap">
                    {
                        this.renderTagsList()
                    }
                </div>
            </div>
        )
    }
}
