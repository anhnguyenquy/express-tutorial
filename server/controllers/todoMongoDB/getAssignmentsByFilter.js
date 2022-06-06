const { assignmentsService } = require('../../services')

const getAssignmentsByFilter = async (req, res, next) => {
  const assignments = await assignmentsService.getByFilter(req.query)
  res.send(assignments) 
}

module.exports = getAssignmentsByFilter