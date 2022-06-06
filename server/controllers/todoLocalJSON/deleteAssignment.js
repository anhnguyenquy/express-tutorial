const fs = require('fs')
const path = require('path')
const _ = require('lodash')

let assignments = _.cloneDeep(require('../../data/assignments.json'))

const deleteAssignment = (req, res, next) => {
  const assignmentID = req.params.assignmentID
  assignments = assignments.filter(assignment => assignment.id != assignmentID)
  fs.writeFileSync(path.join(__dirname, '../../data/assignments.json'), JSON.stringify(assignments), (err) => {})
  res.send('Assignment deleted!')
}

module.exports = deleteAssignment