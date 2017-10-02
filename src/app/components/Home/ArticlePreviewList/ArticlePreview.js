import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.scss';

@CSSModules(styles, {
    allowMultiple: true,
    handleNotFoundStyleName: 'ignore',
})
class ArticlePreview extends Component {
    static propTypes = {
        title: React.PropTypes.string,
        link: React.PropTypes.string,
        push: React.PropTypes.func,
    };

    handleTouchLink(id, e) {
        // 阻止原生链接跳转
        e.preventDefault();
        console.log('asdf123123');
        // 使用 react-router-redux 提供的方法跳转，以便更新对应的 store
        this.props.push(`/detail/${id}`);
    }

    render() {
        const { title, subTitle, date, description } = this.props;
        return (
            <article styleName="m-articlePreview">
                <h2 styleName="articlePreview-title"> 
                    <a styleName="title-text" 
                        href={`/detail/${this.props.id}`} 
                        onTouchTap={ this.handleTouchLink.bind(this, this.props.id) }
                    >
                        { title }
                    </a>
                </h2>
                {
                    subTitle ?
                        (
                            <h3 styleName="articlePreview-subTitle"> 
                                <a styleName="subTitle-text" href={`/detail/${this.props.id}`} 
                                    onTouchTap={this.handleTouchLink.bind(this, this.props.id)}>
                                    { subTitle }
                                </a>
                            </h3>
                        )
                        : null
                }
                <p styleName="articlePreview-desc">{ description }</p>
                <span styleName="articlePreview-pubLishDate">Publised @ { date }</span>
                <hr styleName="articlePreview-segmentLine"/>
            </article>
        );
    }
}

export default ArticlePreview;
