import React, { Component } from 'react';
import Immutable, { Map } from 'immutable';
import CSSModules from 'react-css-modules';
import Tags from 'components/ArticleManage/WritingArticle/Tags/Tags';
import Paper from 'shared/Paper';
import styles from './styles.scss';
const tagsList = [
    {
        id: 'test',
        name: 'css',
    },
    {
        id: 'test1',
        name: 'js',
    },
]
type Props = {
  foo: number,
};

export default class WritingArticle extends Component<Props> {
    render() {
        console.log('props23', this.props.foo)
        return (
            <Tags tags={ tagsList }>
                <Paper>paper</Paper>
            </Tags>
        )
    }
}
WritingArticle.defaultProps = {
    foo: '33',
}
