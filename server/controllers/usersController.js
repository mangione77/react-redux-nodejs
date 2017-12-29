import validateInput from '../utils/validateInput'

const userController = {}

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