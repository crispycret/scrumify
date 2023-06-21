
const express = require('express')
const { mongoose } = require('mongoose')

// function used to apply blueprints to the application.
function config (app, db, blueprints) {

    // Configure express aplication to use middleware that accepts JSON as body type   
    console.log('[!] Using JSON Middleware\n')
    app.use(express.json())

    // Loop through the list of blueprints adding each router to the express application
    blueprints.map((blueprint) => {
        console.log(`[+] Adding ${blueprint.name} routes to the router and schema to the database`)
        app.use(blueprint.path, blueprint.router)
    })
    
    // Catch all unknown routes and forward to an empty response
    app.use('/', (req, res) => {res.end()})
    

    console.log('\n')
}



module.exports = config