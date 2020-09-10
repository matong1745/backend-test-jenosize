const functions = require('firebase-functions')
const express = require('express')
const jenosizeController = require('./controllers/jenosize.controller')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())

app.listen(port, () => {
  console.log(`Listening at ${port}`)
})

app.post('/jenosize/game-24', jenosizeController.game24)
app.post('/jenosize/search-place', jenosizeController.searchPlace)

exports.app = functions.https.onRequest(app)