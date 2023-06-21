// Load environment variables
require('dotenv').config()

// required imports
const express = require("express")
const config = require('./config')
const blueprints = require('./core')
const db = require('./core/db')


// Introduction printing
console.log("\n\n[NOTE]:\nThis project should be crunched down into a framework to allow applications to be easily generated such as this one.\n\n")
console.log("Project: Scrumify\n")

// Create express app
console.log("Creating Express Applicationn\n")
app = express()


// Configure the app, by adding each feature as a blueprint
console.log("[!] Configuring Express Application")
config(app, db, blueprints)

// Determine the port number to run on
const PORT = process.env.PORT || 3000

// Start the application
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}\n`);
});

