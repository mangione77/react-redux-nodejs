import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, IndexRoute } from 'react-router-dom'

import App from './components/App'
import Greetings from './components/Greetings'

import SignupPage from './components/pages/SignupPage'
import LoginPage from './components/pages/LoginPage'

ReactDOM.render(
	<BrowserRouter>
	<main>
		<Route path="/" component={App} />
		<Route exact path="/" component={Greetings} />
		<Route path="/signup" component={SignupPage} />
		<Route path="/login" component={LoginPage} />
	</main>	
	</BrowserRouter>,
	document.getElementById('app')
)