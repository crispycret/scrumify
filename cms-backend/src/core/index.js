/**
 * core/index.js
 * 
 * 
 */
const router = require('./router')


// Initialize the applications core blueprint
const core_blueprint = {
    name: 'core',
    path: "/",
    router,
}


// Create an array used to store the blueprints used in the application.
const blueprints = new Array()


/**
 * Add all blueprints here 
 * Add the core blueprint and any additional plugable components
 */

// Add the current (core) application to the list of blueprints.
blueprints.push(core_blueprint)

const users_blueprint = require('../users')
blueprints.push(users_blueprint)



module.exports = blueprints
