const express = require('express')
const router = express.Router({ mergeParams: true })

const IncidentService = require('../services/incident.services')

router.post('/post-incident', IncidentService.postIncident)
router.get('/get-incidents', IncidentService.getIncidents)
router.get('/get-incidents/:incident_id', IncidentService.getIncidentByIncidentId)

module.exports = router