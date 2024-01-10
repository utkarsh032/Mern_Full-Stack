const express = require('express');
const placesRoutes = require('./routes/places-routes');
const bodyParser = require('body-parser');
const HttpError = require('./models/http-error')
const app = express();

app.use(bodyParser.json())
app.use('/api/places', placesRoutes)

app.use((req, res, next) => {
  const error = new HttpError('Couldn\'t find this routes.', 404)
  throw error
})

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error)
  }
  res.status(error.code || 404).json({ message: error.message || 'An unknown error occurred!' })
})

app.listen(5000)