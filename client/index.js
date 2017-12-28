import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, IndexRoute } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

import App from './components/App'
import Greetings from './components/Greetings'

import SignupPage from './components/pages/SignupPage'
import LoginPage from './components/pages/LoginPage'

const store = createStore(
	(state = {}) => state,
	applyMiddleware(thunk)
)

const signUpRequest = (userData) => {
	return axios.post('/api/users', userData)
}

ReactDOM.render(
	<Provider store={store}>
	<BrowserRouter>
	<main>
		<Route path="/" component={App} />
		<Route exact path="/" component={Greetings} />
		<Route path="/signup" component={(props) => <SignupPage signUpRequest={signUpRequest} /> } />
		<Route path="/login" component={LoginPage} />
	</main>	
	</BrowserRouter>
	</Provider>,
	document.getElementById('app')
)