const users = [
  { id: '1', name: 'John', age: 20 },
  { id: '2', name: 'Jay', age: 21 },
  { id: '3', name: 'Jane', age: 22 }
]

const getUser = (req, res, next) => {
  // Using Params:
  // console.log(req.params)
  // const userIndex = users.findIndex(user => {
  //   return user.id == req.params.userID
  // })
  // res.send(users[userIndex])

  // Using Query:
  console.log(req.query)
  const userIndex = users.findIndex(user => {
    return user.id == req.query.id
  })
  res.send(users[userIndex])
}

module.exports = getUser