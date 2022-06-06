const { usersService } = require('../../services')
const { faker } = require('@faker-js/faker')

const generate = async (req, res, next) => {
  for (let i = 0; i < 10; i++) {
    await usersService.create({
      username: faker.internet.userName(),
      password: faker.internet.password(),
      isActive: faker.datatype.boolean(),
      age: faker.datatype.number({ min: 12, max: 120 })
    })
  }
  res.send('Users generated!')
}

module.exports = generate