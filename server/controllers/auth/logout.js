const { InvalidTokenModel } = require('../../models')

const logout = async (req, res, next) => {
  try { 
    const token = req.headers.authorization.split(' ')[1]
    const loggedOutToken = await InvalidTokenModel.create({ token })
    res.send({
      message: 'Logged out!',
      invalidatedToken: { loggedOutToken }
    })
  }
  catch (err) {
    res.send('Logout failed!')
  }
}

module.exports = logout