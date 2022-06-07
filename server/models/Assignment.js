
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model

const schema = new Schema({
  content: String,
  creationTime: String,
  finishTime: String,
  participants: [
    {
      type: Schema.Types.ObjectId,
      ref: 'user'
    }
  ],
  finished: Boolean,
})

const UserModel = model('assignment', schema, 'assignments') // model name, schema, collection name
module.exports = UserModel