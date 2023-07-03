
const { model } = require('mongoose')
const db = require('../../core/db')

const models = require('../models')


function verify_username(username) {
    if (username.length < 3) {
        return false
    } else if (!username.match(/^[0-9a-z]+$/i)) {
        return false
    }
    return true
}


async function createUser(req, res) {
    console.log(`/users/create -> createUser() -> userData`)

    // Verify and sanitize user input
    const username = req.body.username
    const email = req.body.email
    const pass_hash = req.body.pass_hash
    
    // Verify username (Needs to check uniqueness)
    if (!verify_username(username)) {
        console.log("[+] Username Validation: Failed!")
        res.end()
        return
    }
    console.log("[+] Username Validation: Passed!")

    // Verify email
    
    // verify and hash password

    try {
        const newUser = await models.user.create({
            username,
            email,
            pass_hash
        })
        res.send(newUser)
    } catch (e) {
        console.log(e.errors)
        // console.log(e.errors.username.properties.message)
        // console.log(e.errors.email.properties.message)

        // How to loop through
        // const errorMessages = []
        // e.errors.map((error) => {
        //     console.log(error.properties.message)
        // })

        
        res.send("User creation Failed!")
    }

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