/**
 * users/index.js
 * 
 * The users app of the cms-backend is an isolated application used to handle user logic.
 * 
 * Follows the Blueprint approach to modularizing a larger application by creating reusable chuncks as sub-modular applications.
 *
 *  Blueprint({
 *  name -> string,
 *  routes -> object that maps the key as routing path and value as handler of requests for that path. 
 * })
 */

const router = require('./router')
const models = require('./models')

const blueprint = {
    name: 'users',
    path: '/users',
    router,
    models
}



module.exports = blueprint