const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const controllers = require('./controllers')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => res.json({status: true, working: 'YES', message: 'Connected to Incident API' }))
app.use('/api', controllers)

app.listen(process.env.PORT || 3000, () => console.log('Server started on port 3000'))