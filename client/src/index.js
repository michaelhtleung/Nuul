import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import './index.css';
import "./twemoji-awesome.css"

import App from './App';
import HomePage from './components/home-page';
import AchievementsPage from './components/achievements-page';
import Account from './components/account-page';


const routing = (
	<Router>
		<div>
			<Route exact path="/account" component={Account} />
			<Route exact path="/achievements" component={AchievementsPage} />
			<Route exact path="/" component={HomePage} />
		</div>
		<App/>
	</Router>
)
ReactDOM.render(routing, document.getElementById('root'))
