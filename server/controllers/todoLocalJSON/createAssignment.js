const fs = require('fs')
const path = require('path')
const randomstring = require('randomstring')
const _ = require('lodash')

let assignments = _.cloneDeep(require('../../data/assignments.json'))

const createAssignment = (req, res, next) => {
  let content = _.cloneDeep(req.body)
  content.id = randomstring.generate(24)
  assignments.push(content)
  fs.writeFileSync(path.join(__dirname, '../../data/assignments.json'), JSON.stringify(assignments), (err) => {})
  res.send('Assignment created!')
}

module.exports = createAssignment