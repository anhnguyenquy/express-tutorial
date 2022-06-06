const { usersService } = require('../../services')
const yup = require('yup')

const update = async (req, res, next) => {
  const validationSchema = yup.object().shape({
    username: yup.string(),
    password: yup.string(),
    isActive: yup.boolean(),
    age: yup.number()
  })
  if (!req.params.id) {
    res.send('No id provided.')
  }
  else {
    try {
      const validatedData = await validationSchema.validate(req.body)
      const updated = await usersService.modify(req.params.id, validatedData)
      res.send(updated)
    }
    catch (error) {
      res.send(error)
    }
  }
}

module.exports = update