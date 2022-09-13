const INCIDENT_REPOSITORY = require('../repositories/incident.repository')
const axios = require('axios')
require('dotenv').config({})

module.exports = {

    postIncident: async (req, res) => {

        const { client_id = 0, incident_desc, city, country } = req.body

        if(client_id <= 0) {

            return res.json({ status: false, message: 'Client Id is required' })
        }

        if(!city) {

            return res.json({ status: false, message: 'City is required' })
        }

        if(!country) {

            return res.json({ status: false, message: 'Country is required' })
        }

        if(!incident_desc) {

            return res.json({ status: false, message: 'Incident Desc is required' })
        }

        const request = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.API_KEY}`)

        const [status, message, response] = await INCIDENT_REPOSITORY.POST_INCIDENT({ ...req.body, weather_report: request.data })
        
        return res.json({ status, message, payload: response })
    },

    getIncidents: async (req, res) => {

        const [status, response] = await INCIDENT_REPOSITORY.GET_INCIDENTS()
        
        return res.json({ status, payload: response })
    },

    getIncidentByIncidentId: async (req, res) => {

        const { incident_id } = req.params

        if(!incident_id) {

            return res.json({ status: false, message: 'incident_id is required'})
        }

        const [status, response] = await INCIDENT_REPOSITORY.GET_INCIDENT_BY_INCIDENT_ID(incident_id)
        
        return res.json({ status, payload: response })
    },
}