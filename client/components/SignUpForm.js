import React, { Component } from 'react'
import timezones from '../data/timezones'

class SignUpFrom extends Component {
	constructor() {
		super()

		this.state = {
			username:'',
			password:'',
			passwordConfirm:'',
			email:'',
			location:''
		}

		this.usernameHandler = this.usernameHandler.bind(this)
		this.passwordHandler = this.passwordHandler.bind(this)
		this.passwordConfirmHandler = this.passwordConfirmHandler.bind(this)
		this.locationHandler = this.locationHandler.bind(this)
		this.emailHandler = this.emailHandler.bind(this)
		this.submitHandler = this.submitHandler.bind(this)
	}
	
	usernameHandler(event) {
		event.preventDefault()
		this.setState({
			username:event.target.value
		})
	}

	passwordHandler(event) {
		event.preventDefault()
		this.setState({
			password:event.target.value
		})
	}

	passwordConfirmHandler(event) {
		event.preventDefault()
		this.setState({
			passwordConfirm:event.target.value
		})
	}

	emailHandler(event) {
		event.preventDefault()
		this.setState({
			email:event.target.value
		})
	}

	locationHandler(event) {
		event.preventDefault()		
		this.setState({
			location:event.target.value
		})
	}

	submitHandler(event) {
		event.preventDefault()
		console.log(this.state)
	}

	render() {
		return (
			<form onSubmit={this.submitHandler}>
				<h1>Join today!</h1>
				<div className="form-group">
					<div className="form-group">
					<label className="control-label">Username</label>
					<input
						value={this.state.username}
						onChange={this.usernameHandler}
						type="text"
						name="username"
						className="form-control"
					/>
					</div>

					<div className="form-group">					
					<label className="control-label">E-mail</label>					
					<input
						onChange={this.emailHandler}
						type="text"
						name="email"
						className="form-control"
					/>
					</div>

					<div className="form-group">
					<label className="control-label">Country</label>					
					<select
						className="form-control"
						name="location"
						onChange={this.locationHandler}
					>
					<option value="" disabled>Choose Your Location</option>
						{
							timezones.map(location => {
								return <option value={location.name} key={location.code}>{location.name}</option>
							})
						}
					</select>

					</div>					

					<div className="form-group">					
					<label className="control-label">Password</label>					
					<input
						onChange={this.passwordHandler}
						type="password"
						name="password"
						className="form-control"
					/>
					</div>

					<div className="form-group">
					<label className="control-label">Confirm your password</label>					
					<input
						onChange={this.passwordConfirmHandler}
						type="password"
						name="passwordConfirm"
						className="form-control"
					/>
					</div>

					<div className="form-group">
						<button className="btn btn-primary btn-lg">
							Sign Up!
						</button>
					</div>
				</div>
			</form>
		)
	}
}

export default SignUpFrom