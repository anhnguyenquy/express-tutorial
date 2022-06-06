let assignments = require('../../data/assignments.json')

const getAssignmentsByFilter = (req, res, next) => {
  const { creationTime, finishTime, finished } = req.query
  if (creationTime != undefined && creationTime != null) {
    assignments = assignments.filter(assignment => assignment.creationTime == creationTime)
  }
  if (finishTime != undefined && finishTime != null) {
    assignments = assignments.filter(assignment => assignment.finishTime == finishTime)
  }
  if (finished != null && finished != undefined) {
    assignments = assignments.filter(assignment => assignment.finished == (finished === 'true'))
  }
  res.send(assignments)
}

module.exports = getAssignmentsByFilter