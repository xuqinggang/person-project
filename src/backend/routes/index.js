import React from 'react';
// import { Router, Route, IndexRoute } from 'react-router';
import { Router, Route, Switch } from 'react-router'
import Home from 'views/Home/Home.js';
// import MdEditor from 'components/Article/MdEditor/MdEditor.js';
import WritingArticle from 'views/ArticleManage/WritingArticle/WritingArticle.js';
// import Detail from '../views/Article/Article.js';

const routes = browserHistory => {
    return (    
        <Router history={ browserHistory } >
            <Switch>
                {
                    <Route path="/" exact component={ WritingArticle } />
                        // <Route path="/detail/:id" component={ Detail } />
                        // <Route path="/category/test" component={ Test } />
                }
            </Switch>
        </Router> 
    )
};

export default routes;

