require('bootstrap/dist/css/bootstrap.css');
import React from 'react'
import ReactDOM from 'react-dom';
import {Router, Route,hashHistory,IndexRoute} from 'react-router';
import App from './components/App';
import Home from  './components/Home.js'
import User from  './components/User.js'
import Add from  './components/add.js'
import List from './components/List.js'
import Detail from  './components/detail'
import Profile from  './components/Profile.js'
/*
* Route  代表一个路由规则
* hashHistory
**/


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="home" component={Home}></Route>
            <Route path="user" component={User}>
                <IndexRoute component={List} />
                <Route path="add" component={Add}></Route>
                <Route path="list" component={List}></Route>
                <Route path="detail/:id" component={Detail}></Route>
            </Route>
            <Route path="profile" component={Profile}></Route>
        </Route>
    </Router>, document.getElementById('app')
);
