const createAssignment = require('./createAssignment')
const deleteAssignment = require('./deleteAssignment')
const getAssignmentByID = require('./getAssignmentByID')
const getAssignmentsByFilter = require('./getAssignmentsByFilter')
const modifyAssignment = require('./modifyAssignment')

module.exports = {
  createAssignment,
  deleteAssignment,
  getAssignmentByID,
  getAssignmentsByFilter,
  modifyAssignment
}