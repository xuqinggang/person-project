import React, {
    cloneElement,
} from 'react';
import {
    connect
} from 'react-redux';
import PreviewList from 'components/Home/PreviewList.js';
import {
    actions
} from './HomeRedux';
import {
    push
} from 'react-router-redux';
import {
    immutableRenderDecorator
} from 'react-immutable-render-mixin';
import CSSModules from 'react-css-modules';

import styles from './styles.scss';
import {
    Tabs,
    Tab
} from 'components/shared/Tabs';
import Card, {
    CardTitle,
    CardText,
    CardFooter,
    CardActions
} from 'components/shared/Card';
import Paper from 'components/shared/Paper';
import FontIcon from 'components/shared/Icon/FontIcon/FontIcon';
import EnHanceButton from 'components/shared/internal/EnhanceButton';
import IconButton from 'components/shared/Buttons/IconButton/IconButton';;
import TouchRipple from 'components/shared/internal/TouchRipple';
import FocusRipple from 'components/shared/internal/FocusRipple';
import Test from '../Test/Test'
import Test2 from '../Test/Test2';

import Club from '../Test/kzWeb/club/Club.js';
import Switch from '../Test/kzWeb/Switch/index.js';
import Select from '../Test/kzWeb/Select/Select.js';
import GridContainer from '../Test/kzWeb/Gird/GridContainer';
import GridRow from '../Test/kzWeb/Gird/GridRow';
import GridCol from '../Test/kzWeb/Gird/GridCol';
import List from '../Test/kzWeb/List/List';
import ListItem from '../Test/kzWeb/List/ListItem';
import Logo from '../Test/kzWeb/Logo';
import DragAndDrop from '../Test/kzWeb/DragAndDrop/index.js';
import Sortable from 'react-anything-sortable';
import SortableItem from '../Test/kzWeb/DragAndDrop/SortableItem.js';
import DemoHOCItem from '../Test/kzWeb/DragAndDrop/DemoHOCItem.js';
import DragSort from '../Test/kzWeb/DragSort/DragSort.js';
// import '../Test/kzWeb/DragAndDrop/style.scss';
@immutableRenderDecorator
@connect(state => {
    return {
        articleList: state.home.list.articleList,
    };
}, {
    push,
    ...actions,
})
@CSSModules(styles, {
    allowMultiple: true
})
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
        const {
            loadArticles,
            articleList,
            push
        } = this.props;
        const test = "test"
        return (
            <DragSort />
            
            // <div styleName={test}>
            //     <input type="text" onFocus={this.handleFocus} onClick={this.handleClick} onTouchTap={this.handleTouchTap}/>
            //     <FontIcon  color={'#f44336'}
            //         hoverColor={'#69f0ae'} className="fa fa-cc-diners-club" />
            //     <Card>
            //         <CardTitle title="Safari :active伪类失效问题" style={{'paddingBottom':'0px'}}/>
            //         <CardText style={{'padding':'0rem 1rem'}}>
            //             <p> :active伪类,参见CSS2.1 Selector Spec,如果在PC1端开发中会经常遇到,当然在某些初级或入门级的面试中也会问到A锚链接元素的几种状态,也许你可能会弄混,:link,:visited,:hover,:active, 常用缩写”LVHA“, 或者更好记忆为...  </p>
            //         </CardText>
            //         <CardFooter>
            //             <span>Published @12个月前 (27th July, 2013)</span>
            //         </CardFooter>
            //         <CardActions>
            //             <button styleName="ttt">123</button>
            //             <button>123</button>
            //         </CardActions>
            //     </Card>
            //     <EnHanceButton centerRipple={true}>xxx1</EnHanceButton>

            //     <IconButton className="tttxxxxx" centerRipple={true} iconClassName="fa fa-address-book-o" style={{fontSize:'23px',width: '50px', height: '50px'}}></IconButton>
            //     {
            //         // <h1>Home</h1>
            //         // <PreviewList {...this.props} />
            //     }
            //     <Tabs>
            //         <Tab label="123" order={0}>
            //             123
            //         </Tab>
            //         <Tab label="456" order={1}>
            //             124
            //         </Tab>
            //     </Tabs>
            //     <TouchRipple style={{width: '100px', height: '100px'}} bgColor="red">1231tab1</TouchRipple>

            //     <Test />
                // <Club />
            // <Switch on={true} onToggle={function(event, status) {
            //     console.log('123', event, status);
            // }}/>
            // <Select show={ true } value={1} onChange={ function(...param) {
            // } }>
            //     <ListItem value={ 1 } text="123123" />
            //     <ListItem value={ 2 } text="123124" />
            //     <ListItem value={ 3 } text="123125" />
            // </Select>
            // <input type="color" />            
            // <List>
            //     <ListItem value="1" text="123123" />
            //     <ListItem value="2" text="123124" />
            //     <ListItem value="3" text="123125" />
            // </List>
            // <GridContainer>
            //     <GridRow>
            //         <GridCol col={4} styleName="flex-justify-end"><label htmlFor="" styleName="label">社区图标</label></GridCol>
            //         <GridCol col={8}><Logo></Logo></GridCol>
            //     </GridRow>
            //     <GridRow>
            //         <GridCol col={4} styleName="flex-justify-end"><label htmlFor="" styleName="label">社区图标</label></GridCol>
            //         <GridCol col={8}>
            //             <Select show={ true } value={1} onChange={ function(...param) {
            //             } }>
            //             <ListItem value={ 1 } text="123123" />
            //             <ListItem value={ 2 } text="123124" />
            //             <ListItem value={ 3 } text="123125" />
            //         </Select>
            //     </GridCol>
            //     </GridRow>
            // </GridContainer>            
            // <Logo imgSrc={123}></Logo>
            // </div>
            // <Sortable>
            //     <SortableItem sortData="1" />
            //     <SortableItem sortData="2" />
            // </Sortable>
            // <Sortable  direction="vertical">
            //     <DemoHOCItem  sortData="react" key={1}>
            //         React
            //     </DemoHOCItem>
            //     <DemoHOCItem  sortData="angular" key={2}>
            //         Angular
            //     </DemoHOCItem>
            //     <DemoHOCItem  sortData="backbone" key={3}>
            //         Backbone
            //     </DemoHOCItem>
            // </Sortable>
        );
    }
}

export default Home;
