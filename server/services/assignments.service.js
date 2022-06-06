const { AssignmentModel } = require('../models')
const mongodb = require('mongodb')

const create = async (content) => {
  const created = await AssignmentModel.create(content)
  return created
}

const getByFilter = async (queries) => {
  const assignments = await AssignmentModel.find(queries)
  return assignments
}

const getByID = async (id) => {
  const assignment = await AssignmentModel.findById(id)
  return assignment
}

const modify = async (id, content) => {
  const modified = await AssignmentModel.findByIdAndUpdate(id, content, { new: true })
  return modified
}

const remove = async (id) => {
  const result = await AssignmentModel.deleteOne({ _id: mongodb.ObjectId(id) })
  return result
}

module.exports = {
  create,
  getByFilter,
  getByID,
  modify,
  remove
}