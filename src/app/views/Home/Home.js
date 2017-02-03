import React from 'react';
import { connect } from 'react-redux';
import PreviewList from 'components/Home/PreviewList';
import { actions } from './HomeRedux';
import { push } from 'react-router-redux';

import styl from  './Home.scss';
import {Tabs, Tab} from 'components/shared/Tabs'
@connect(state => {
  return {
    articleList: state.home.list.articleList,
  };
}, {
  push,
  ...actions,
})
class Home extends React.Component {
  render() {
    const { loadArticles, articleList, push } = this.props;

    return (
      <div>
      1234456551112354600111234124111231
        {
          // <h1>Home</h1>
          // <PreviewList {...this.props} />
        }
        <Tabs>
          <Tab label="123" order={0}>
          123
          </Tab>
          <Tab label="456" order={1}>
            456
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Home;
