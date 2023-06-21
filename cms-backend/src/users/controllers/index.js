
const { model } = require('mongoose')
const db = require('../../core/db')

const models = require('../models')




async function createUser(req, res) {
    console.log(`/users/create -> createUser() -> userData`)

    console.log(req)

    console.log(req.body)

    const newUser = await models.user.create({
        username: req.body.username,
        email: req.body.email,
        pass_hash: req.body.pass_hash
    })

    res.send(newUser)
}


async function getUsers(req, res) {
    console.log("/users/ -> users.getUsers()")

    // Authenticate user by checking auth token, exit on failure
    if (false) res.end()

    // get users database
    const users = await models.user.find({})

    res.send(users)
}

async function getUser(req, res) {
    console.log(`/users/user/:username -> getUser() -> username: ${req.params.username}`)
    const user = await models.user.find({ username:req.params.username })
    res.send(user || {})
}



function updateUser(req, res) {
    console.log(`/users/user/:username -> updateUser() -> id: ${req.bodyx.username} -> userData`)
    res.send('User object')
}

async function deleteUser(req, res) {
    console.log(`/users/user/:username -> deleteUser() -> id: ${req.params.username}`)
    const results = await models.user.deleteOne({ username:req.params.username })
    res.send(results)
}



module.exports = {
    getUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser
}