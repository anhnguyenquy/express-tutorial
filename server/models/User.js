const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model

/*
  Can use mongoose's built-in validators like the following, but use yup instead
  username: {
    type: String,
    require: true,
  }
*/

const schema = new Schema({
  username: String,
  password: String,
  isActive: Boolean,
  age: Number
})

const UserModel = model('user', schema, 'users') // model name, schema, collection name
module.exports = UserModel