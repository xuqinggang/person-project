import React, {
  cloneElement,
} from 'react';
import { connect } from 'react-redux';
import PreviewList from 'components/Home/PreviewList';
import { actions } from './HomeRedux';
import { push } from 'react-router-redux';
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import CSSModules from 'react-css-modules';

import styles from  './styles.scss';
import { Tabs, Tab } from 'components/shared/Tabs';
import Card, {CardTitle, CardText, CardFooter, CardActions} from 'components/shared/Card';
import Paper from 'components/shared/Paper';
import FontIcon from 'components/shared/Icon/FontIcon/FontIcon';
// import IconButton from 'components/shared/Icon/FontIcon/FontIcon';
import TouchRipple from 'components/shared/internal/TouchRipple';
import FocusRipple from 'components/shared/internal/FocusRipple';
import EnHanceButton from 'components/shared/internal/EnHanceButton';
import Test from '../Test/Test'
import Test2 from '../Test/Test2';
@immutableRenderDecorator
@connect(state => {
  return {
    articleList: state.home.list.articleList,
  };
}, {
  push,
  ...actions,
})
@CSSModules(styles, { allowMultiple: true })
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  handleFocus = (event) => {
    console.log('focus');
  }
  handleClick = (event) => {
    console.log('click');
  }
  handleTouchTap = (event) => {
    console.log('tap')
  }
  render() {
    console.log('home')
    const { loadArticles, articleList, push } = this.props;
    const test = "test"
    return (
      <div styleName={test}>
      <input type="text" onFocus={this.handleFocus} onClick={this.handleClick} onTouchTap={this.handleTouchTap}/>
      <FontIcon  color={'#f44336'}
      hoverColor={'#69f0ae'} className="fa fa-cc-diners-club" />
      <i className="fa fa-cc-diners-club" aria-hidden="true"></i>
        <Card>
          <CardTitle title="Safari :active伪类失效问题" style={{'paddingBottom':'0px'}}/>
          <CardText style={{'padding':'0rem 1rem'}}>
            <p>
              :active伪类,参见CSS2.1 Selector Spec,如果在PC1端开发中会经常遇到,当然在某些初级或入门级的面试中也会问到A锚链接元素的几种状态,也许你可能会弄混,:link,:visited,:hover,:active, 常用缩写”LVHA“, 或者更好记忆为...
            </p>
          </CardText>
          <CardFooter>
            <span>Published @12个月前 (27th July, 2013)</span>
          </CardFooter>
          <CardActions>
            <button styleName="ttt">123</button>
            <button>123</button>
          </CardActions>
        </Card>
     
      1234456551112354600111234124111231<EnHanceButton centerRipple={true}>xxx1</EnHanceButton>
        {
          // <h1>Home</h1>
          // <PreviewList {...this.props} />
        }
        <Tabs>
          <Tab label="123" order={0}>
          123
          </Tab>
          <Tab label="456" order={1}>
           124
          </Tab>
        </Tabs>
      <TouchRipple style={{width: '100px', height: '100px'}} bgColor="red">1231tab1</TouchRipple>
      <FocusRipple style={{width: '100px', height: '100px'}}>qwe123</FocusRipple>
      
      </div>
    );
  }
}

export default Home;
