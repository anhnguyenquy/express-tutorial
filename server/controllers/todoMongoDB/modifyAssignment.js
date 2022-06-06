const { assignmentsService } = require('../../services')
const yup = require('yup')

const modifyAssignment = async (req, res, next) => {
  const validationSchema = yup.object().shape({ 
    content: yup.string(),
    creationTime: yup.string(),
    finishTime: yup.string(),
    participants: yup.array().of(yup.string()),
    finished: yup.boolean()
  })
  if (!req.params.id) {
    res.send('No id provided.')
  }
  else {
    try {
      const validatedData = await validationSchema.validate(req.body)
      const modified = await assignmentsService.modify(req.params.id, validatedData)
      res.send(modified)
    }
    catch (error) {
      res.send(error)
    }
  }
}

module.exports = modifyAssignment