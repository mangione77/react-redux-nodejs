import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'

const userController = {}

const validateInput = (data) => {
	let errors = {}
	
	if (Validator.isNull(data.email)) {
		errors.email = 'Field is required'
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

	if 
}

export default userController