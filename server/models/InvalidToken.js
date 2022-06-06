
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model

const schema = new Schema({
  token: String,
  iat: Number
})

const UserModel = model('invalid-token', schema, 'invalid-tokens') // model name, schema, collection name
module.exports = UserModel