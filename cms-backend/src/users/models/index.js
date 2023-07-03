

const mongoose = require('mongoose')
const schemas = require('./schemas')



// Take all schmeas and create model objects from them
const user = mongoose.model('User', schemas.user)

module.exports = { user }