const { assignmentsService } = require('../../services')

const getAssignmentByID = async (req, res, next) => {
  if (!req.params.id) { 
    res.send('No id provided.')
  }
  else {
    const assignment = await assignmentsService.getByID(req.params.id)
    res.send(assignment)
  }
}

module.exports = getAssignmentByID