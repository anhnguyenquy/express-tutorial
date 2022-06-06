const { usersService } = require('../../services')

const getAll = async (req, res, next) => {
  const results = await usersService.getAll()
  res.send(results)
}

module.exports = getAll