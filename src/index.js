
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import './index.css';
import App from './App';

import Users from './components/users';
import Contact from './components/contact';
import Footer from './components/footer';

const routing = (
	<Router>
		<div>
			<Route path="/" component={App} />
			<Route path="/users" component={Users} />
			<Route path="/contact" component={Contact} />
		</div>
	<Footer/>
	</Router>
)
ReactDOM.render(routing, document.getElementById('root'))
