let assignments = require('../../data/assignments.json')

const getAssignmentByID = (req, res, next) => {
  res.send(assignments.find(assignment => assignment.id == req.params.assignmentID))
}

module.exports = getAssignmentByID