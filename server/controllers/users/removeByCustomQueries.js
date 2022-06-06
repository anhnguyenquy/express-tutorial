const { usersService } = require('../../services')

const removeByCustomQueries = async (req, res, next) => {
  const deleted = await usersService.removeByCustomQueries(req.body)
  res.send(deleted)
}

module.exports = removeByCustomQueries