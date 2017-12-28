import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, IndexRoute } from 'react-router-dom'

import App from './components/App'
import Greetings from './components/Greetings'

ReactDOM.render(
	<BrowserRouter>
	<main>
		<Route path="/" component={App} />
		<Route exact path="/" component={Greetings} />
	</main>	
	</BrowserRouter>,
	document.getElementById('app')
)