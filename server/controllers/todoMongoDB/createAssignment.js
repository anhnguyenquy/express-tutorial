const { assignmentsService } = require('../../services')
const yup = require('yup')

const createAssignment = async (req, res, next) => {
  const validationSchema = yup.object().shape({
    content: yup.string().required(),
    creationTime: yup.string().required(),
    finishTime: yup.string().required(),
    participants: yup.array().of(yup.string()).required(),
    finished: yup.boolean().required(),
  })
  try {
    const validatedData = await validationSchema.validate(req.body)
    const created = await assignmentsService.create(validatedData)
    res.send(created)
  }
  catch (error) {
    res.send(error)
  }
}

module.exports = createAssignment