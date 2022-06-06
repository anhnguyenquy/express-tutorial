const fs = require('fs')
const path = require('path')
const _ = require('lodash')

let assignments = _.cloneDeep(require('../../data/assignments.json'))

const modifyAssignment = (req, res, next) => {
  const assignmentID = req.params.assignmentID
  const idx = assignments.findIndex(assignment => assignment.id == assignmentID)
  _.assign(assignments[idx], req.body)
  fs.writeFileSync(path.join(__dirname, '../../data/assignments.json'), JSON.stringify(assignments), (err) => {})
  res.send(assignments[idx])
}

module.exports = modifyAssignment