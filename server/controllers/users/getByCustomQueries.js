const { usersService } = require('../../services')
const yup = require('yup')

const getByCustomQueries = async (req, res, next) => {
  const results = await usersService.getByCustomQueries(req.body)
  res.send(results)
}

module.exports = getByCustomQueries