const express = require('express')
const router = express.Router()

const incidentController = require('./incident.controller')

router.use('/incidents', incidentController)

module.exports = router