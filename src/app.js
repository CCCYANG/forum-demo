import React from 'react';

import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';

import './app.css';

const PrimaryLayout = () => (
  <div className="primary-layout">
    <header>
      Our React Router 4 App11112222
    </header>
    <main>
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/users" component={UsersPage} />
        </Switch>
    </main>
  </div>
)

const HomePage =() => <div>Home Page</div>
const UsersPage = () => <div>Users Page</div>

const App = () => (
  <BrowserRouter>
    <div>

        <PrimaryLayout />
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
            
        </ul>
    </div>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('app'))

