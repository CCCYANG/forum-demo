import React from 'react';

import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';

import 'antd-mobile/dist/antd-mobile.css';

import './app.css';

import HomePage from './components/home/home.js';
import NewsPage from './components/news/news.js';
import UserPage from './components/user/user.js';

const PrimaryLayout = () => (
  <div className="primary-layout">
    <main className="contentWrapper">
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/news" component={NewsPage} />
            <Route path="/user" component={UserPage} />
        </Switch>
    </main>
  </div>
)

const App = () => (
  <BrowserRouter>
    <div>
        <PrimaryLayout />
        <ul className="tabbar">
            <li className="flex-1 text-center">
              <NavLink className="navLink fs-10" activeClassName="tabbar-item-active" exact to="/">
                <div className="img"></div>论坛
              </NavLink>
            </li>
            <li className="flex-1 text-center">
              <NavLink className="navLink fs-10" activeClassName="tabbar-item-active" to="/news">
                <div className="img img-news"></div>消息
              </NavLink>
            </li>
            <li className="flex-1 text-center">
              <NavLink className="navLink fs-10" activeClassName="tabbar-item-active" to="/user">
                <div className="img img-user"></div>我的
              </NavLink>
            </li>
        </ul>
    </div>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('app'))

