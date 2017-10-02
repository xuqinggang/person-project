import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import ArticlePreview from './ArticlePreview';
import styles from './style.scss';
@CSSModules(styles, {
    allowMultiple: true,
    handleNotFoundStyleName: 'ignore',
})
class ArticlePreviewList extends Component {
    static propTypes = {
        loading: React.PropTypes.bool,
        error: React.PropTypes.bool,
        articleList: React.PropTypes.arrayOf(React.PropTypes.object),
        loadArticles: React.PropTypes.func,
        push: React.PropTypes.func,
    };

    componentDidMount() {
        this.props.loadArticles();
    }

    render() {
        const { loading, error, articleList } = this.props;

        if (error) {
            return <p className="message">Oops, something is wrong.</p>;
        }

        if (loading) {
            return <p className="message">Loading...</p>;
        }
        return (
            <div styleName="m-articlePreview-list">
                <article>
                    {articleList.map(item => {
                        return <ArticlePreview {...item} key={item.id} push={this.props.push} />
                    })}
                </article>
            </div>
        );
    }
}

export default ArticlePreviewList;
