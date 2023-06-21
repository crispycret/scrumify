require('dotenv').config();

const mongoose = require('mongoose')

const handlers = require('./handlers')

// Load Environment variables
const HOST = process.env.DATABASE_HOST
const PORT = process.env.DATABASE_PORT
const NAME = process.env.DATABASE_NAME
const USER = process.env.DATABASE_USER
const PASS =  process.env.DATABASE_PASS
const AUTH_MECH = 'DEFAULT'

// Connection endpoint to MongoDB. 
// Use encodeURIComponent to escape some special characters that may exist in username or password.
const URI =`mongodb://${USER}:${encodeURIComponent(PASS)}@${HOST}:${PORT}/${NAME}`;

// Make a connection to the database
mongoose.connect(URI, {useNewUrlParser: true})

const db = mongoose.connection

// Handle any errors and trigger an event handler on the first time the database is connected.
db.on('error', handlers.error)
db.once('open', handlers.open)

module.exports = db


