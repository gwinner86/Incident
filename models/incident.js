const { Model } = require('sequelize')
const uuid = require('uuid')

module.exports = (sequelize, DataTypes) => {

  class Incident extends Model {}

  Incident.init({
      incident_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      client_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      incident_desc: {
        type: DataTypes.STRING,
        allowNull: true
      },
      city: {
          type: DataTypes.STRING,
          allowNull: true
      },
      country: {
          type: DataTypes.STRING,
          allowNull: true
      },
      weather_report: {
          type: DataTypes.JSON,
          allowNull: true
      },
      date: {
          type: DataTypes.DATE,
          defaultValue: Date.now()
      }
    }, {
      sequelize,
      modelName: 'incident',
      timestamps: false
    })

    return Incident
}
