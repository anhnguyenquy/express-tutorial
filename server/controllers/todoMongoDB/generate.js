const { usersService, assignmentsService } = require('../../services')
const { faker } = require('@faker-js/faker')

const generate = async (req, res, next) => {
  const users = await usersService.getAll()
  const ids = users.map(user => user._id)
  for (let i = 0; i < 10; i++) {
    await assignmentsService.create({
      content: faker.lorem.sentence(),
      creationTime: (new Date()).toString(),
      finishTime: (new Date()).toString(),
      participants: faker.helpers.arrayElements(ids),
      finished: faker.datatype.boolean()
    })
  }
  res.send('Assignments generated!')
}

module.exports = generate