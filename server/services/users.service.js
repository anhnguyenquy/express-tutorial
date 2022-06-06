const { UserModel } = require('../models')

const getAll = async () => {
  const allUsers = await UserModel.find({
    $or: [{ isActive: true }, { isActive: false }]
  })
  return allUsers
}

const getByCustomQueries = async (query) => {
    // query shape: {
    //  age: { $gt: 13, $lt: 19 } //similar for $gte, $lte, $eq, $ne
    //  username: { $in: ['root', 'admin'] } //similar for $nin
    // }
  const users = await UserModel.find(query)
  return users
}

const create = async (userData) => {
  const newUser = await UserModel.create(userData)
  return newUser
}

const modify = async (id, payload) => {
  const updatedData = await UserModel.findByIdAndUpdate(id, payload, { new: true }) //3rd arg to receive updated data, else return old data
  return updatedData
}

const removeByCustomQueries = async (query) => {
  const deletedData = await UserModel.remove(query)
  return deletedData
}

module.exports = {
  getAll,
  getByCustomQueries,
  create,
  modify,
  removeByCustomQueries
}