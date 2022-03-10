const userData = require('../data/index')
const newUser = require('../data/sampleUser')

let listUsers = (req,res) => {
 res.json(userData)
}

let showUser = (req,res) => {
 if (!userData[req.params.id - 1]) {
  res.status(404).send('User not found')
 } else {res.json(userData[req.params.id - 1])}
}

let createUser = (req,res) => {
 let counter = userData.length
 newUser.id = counter + 1
 userData[counter] = newUser
 res.json(userData)
}

let updateUser = (req,res) => {
 if (!userData[req.params.id - 1]) {
  res.status(404).send('User not found')
 } else {
  userData[req.params.id - 1].username = 'noobMaster69'
  res.json(userData[req.params.id - 1])
 }
}

let deleteUser = (req,res) => {
 userData.splice(req.params.id - 1, 1);
 if (!userData[req.params.id - 1]) {
  res.status(404).send('User not found')
 } else {res.json(userData)}
}


module.exports = { listUsers, showUser, createUser, updateUser, deleteUser }