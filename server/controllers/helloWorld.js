import path from 'path'
const helloWorld = {}

helloWorld.get = (req,res) => {
	res.sendFile(path.resolve('index.html'))
}

export default helloWorld