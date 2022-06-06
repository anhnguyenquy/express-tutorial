const { usersService } = require('../../services')
const yup = require('yup')

const create = async (req, res, next) => {
  const validationSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
    isActive: yup.boolean().required(),
    age: yup.number().required(),
  })
  try {
    const validatedData = await validationSchema.validate(req.body)
    const created = await usersService.create(validatedData)
    res.send(created)
  }
  catch (error) {
    res.send(error)
  }
}

module.exports = create