import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
	render() {
		return (
			<nav className="navbar navbar-default">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <Link className="navbar-brand" to="/">React-Redux</Link>
			    </div>

			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			      <ul className="nav navbar-nav navbar-right">
			        <li><Link to="/signup">Sign Up</Link></li>
			        <li><Link to="/login">Login</Link></li>
			      </ul>
			    </div>
			  </div>
			</nav>
		)
	}
}

export default NavBar