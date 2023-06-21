const express = require('express')

// const handlers = require('./handlers')

const router = express.Router()

router.use((req, res, next) => {
    console.log("DefuaultRouter.use() method")
    next()
})

router.get('/', (req, res) => {
    console.log("/ -> handler")
    res.send("/ -> Test Route")
})


module.exports = router
