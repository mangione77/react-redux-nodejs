import React, { Component } from 'react'
import timezones from '../data/timezones'
import classnames from 'classnames'
import validateInput from '../../server/utils/validateInput'
import PropTypes from 'prop-types'

import TextFieldGroup from './common/TextFieldGroup'

class SignUpFrom extends Component {
	constructor() {
		super()

		this.state = {
			username:'',
			password:'',
			passwordConfirm:'',
			email:'',
			location:'',
			errors:{},
			isLoading:false
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

	// Client side validation. Is !isValid, the POST request won't be made
	isValid() {
		const { errors, isValid } = validateInput(this.state)

		if (!isValid) {
			this.setState({ errors })
		}

		return isValid
	}

	submitHandler(event) {
		event.preventDefault()
		
		// If the user information is valid, then continue with the request
		if (this.isValid()) {

			// clear errors and set to loading

			this.setState({ errors:{}, isLoading: true })

			// Submit the form	

			this.props.signUpRequest(this.state)
				.then(response => {
					// TODO: Redirect to???
					console.log('RESPONSE ', response)
				})
				.catch(errors => {
					// If there are any errors, set it as a state prop so we can render them.
					this.setState({
						errors:errors.response.data,
						isLoading:false
					}, () => {
						console.log(this.state.errors)
					})
				})
		}

	}

	render() {
		return (
			<form onSubmit={this.submitHandler}>
				<h1>Join today!</h1>
				<div className="form-group">
				
					<TextFieldGroup
						error={this.state.errors.username}
						label="Username"
						onChange={this.usernameHandler}
						value={this.state.username}
						field="username"
					/>
					
					<TextFieldGroup
						error={this.state.errors.email}
						label="E-mail"
						onChange={this.emailHandler}
						value={this.state.email}
						field="email"
					/>					

					<TextFieldGroup
						error={this.state.errors.password}
						label="Password"
						onChange={this.passwordHandler}
						value={this.state.password}
						field="password"
					/>	

					<TextFieldGroup
						error={this.state.errors.passwordConfirm}
						label="Confirm your password"
						onChange={this.passwordConfirmHandler}
						value={this.state.passwordConfirm}
						field="passwordConfirm"
					/>

					<div className={classnames("form-group", { 'has-error': this.state.errors.location}) }>
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
					{this.state.errors.location && <span className="help-block">{this.state.errors.location}</span>}					
					</div>						

					<div disabled={this.state.isLoading} className="form-group">
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