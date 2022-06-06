const jwt = require('jsonwebtoken')
const { UserModel } = require('../../models')

const login = async (req, res, next) => {
  try {
    // req.headers.authorization looks something like this: 'Basic YWRtaW46MTIzNDU=', where the the base64 
    // encoded string represents username:password'
    const creds = Buffer.from(req.headers.authorization.split(' ')[1], 'base64').toString().split(':')
    const username = creds[0]
    const password = creds[1]
    const user = await UserModel.findOne({ username, password })
    if (user) {
      const token = jwt.sign({ username, password }, process.env.JWT_PRIVATE_KEY, {
        expiresIn: '10h' // supported units include d, h, and ms (ms is default)
      })
      res.send(token)
    }
    else {
      res.send('Invalid credentials!')
    }
  }
  catch (err) {
    res.send('Login failed!')
  }
}

module.exports = login