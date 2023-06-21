

const mongoose = require('mongoose')
const schemas = require('./schemas')


const user = mongoose.model('User', schemas.user)

module.exports = { user }