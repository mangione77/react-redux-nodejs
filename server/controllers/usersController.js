import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'

const userController = {}

const validateInput = (data) => {

	let errors = {}
	
	if (Validator.isEmpty(data.username)) {
		errors.username = 'Field is required'
	}
	if (Validator.isEmpty(data.password)) {
		errors.password = 'Field is required'
	}
	if (Validator.isEmpty(data.passwordConfirm)) {
		errors.passwordConfirm = 'Field is required'
	}
	if (!Validator.equals(data.password, data.passwordConfirm)) {
		errors.passwordConfirm = "Passwords don't match"
	}
	if (Validator.isEmpty(data.email)) {
		errors.email = 'Field is required'
	}
	if (Validator.isEmpty(data.location)) {
		errors.location = 'Field is required'
	}		
	return {
		errors,
		isValid:isEmpty(errors)
	}
}

userController.newUser = (req,res) => {
	// TODO: Save to DB
	const { errors, isValid } = validateInput(req.body)

	if (!isValid) {
		res.status(400).json(errors)
	}
	else {
		res.status(200).json({'data':'REGISTERED'})
	}	
	
}

export default userController