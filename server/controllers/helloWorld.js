const path = require('path')
const helloWorld = {}

helloWorld.get = (req,res) => {
	res.sendFile(path.resolve('views/index.html'))
}

module.exports = helloWorld