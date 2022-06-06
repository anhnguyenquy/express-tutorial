const { assignmentsService } = require('../../services')

const deleteAssignment = async (req, res, next) => {
  if (!req.params.id) {
    res.send('No id provided.')
  }
  else {
    const deleted = await assignmentsService.remove(req.params.id)
    res.send(deleted) 
  }
}

module.exports = deleteAssignment