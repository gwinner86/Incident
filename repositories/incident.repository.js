
const db = require('../models')

const Incident = db.incidents

module.exports = {

    POST_INCIDENT: async function (payload) {

        let status = true

        const { client_id, incident_desc, city, country, weather_report } = payload // destructuring
        
        const result = await Incident.create({ client_id, incident_desc, city, country, weather_report }).catch(err => {

            status = false

            return err.message
        })

        return [ true, "Incident Added Successfully", result ]
    },

    GET_INCIDENTS: async function (payload) {
        
        const result = await Incident.findAll()

        return [ true, result ]
    },

    GET_INCIDENT_BY_INCIDENT_ID: async function (payload) {
        
        const result = await Incident.findByPk(payload)

        return [ true, result ]
    }
}