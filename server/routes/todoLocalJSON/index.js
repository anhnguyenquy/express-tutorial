const express = require('express')
const router = express.Router()
const { todoLocalJSON } = require('../../controllers')

const {
  createAssignment,
  deleteAssignment,
  getAssignmentByID,
  getAssignmentsByFilter,
  modifyAssignment
} = todoLocalJSON

router.post('/create', createAssignment)
  .get('/byFilter', getAssignmentsByFilter)
  .get('/id/:assignmentID', getAssignmentByID)
  .put('/modify/:assignmentID', modifyAssignment)
  .delete('/delete/:assignmentID', deleteAssignment)

module.exports = router