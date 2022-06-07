const { assignmentsService } = require('../../services')

const getAll = async (req, res, next) => {
  const assignments = await assignmentsService.getAll()
  res.send(assignments)
}

module.exports = getAll