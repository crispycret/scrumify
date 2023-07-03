
const express = require('express')
const router = express.Router()

const controller = require('../controllers')


// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})


router.get('/', controller.getUsers)

router.post('/create', controller.createUser)

// router.get('/id/:id', controller.getUser)
router.get('/user/:username', controller.getUser)

// router.patch('/id/:id/update', controller.updateUser)
router.patch('/user/:username/update', controller.updateUser)

// router.delete('/id/:id/delete', controller.deleteUser)
router.delete('/user/:username/delete', controller.deleteUser)



// Reject all unknown route paths
// router.all('/:id/*', (req, res) => {res.end()})
router.all('/*', (req, res) => {res.end()})




module.exports = router


