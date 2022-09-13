const  { Sequelize, Model, DataTypes } = require('sequelize')

const config = require('../config/config.json')

const dbConfig = config[process.env.NODE_ENV || 'development']

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
    logging: false
})

sequelize.authenticate().then(() => console.log("Connected to PSQL")).catch(err => console.log(err.message))

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.incidents = require('./incident.js')(sequelize, DataTypes)

db.sequelize.sync({ force: false }).then(() => console.log('synced'))

module.exports = db