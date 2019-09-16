import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import './index.css';
import "./twemoji-awesome.css"

import App from './App';
import Home from './components/home';
import DataAnalysis from './components/data-analysis';
import Motivation from './components/motivation';


const routing = (
	<Router>
		<div>
			<Route path="/data" component={DataAnalysis} />
			<Route path="/motivation" component={Motivation} />
			<Route exact path="/" component={Home} />
		</div>
		<App/>
	</Router>
)
ReactDOM.render(routing, document.getElementById('root'))
