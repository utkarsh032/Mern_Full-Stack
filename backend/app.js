const express = require('express');
const placesRoutes = require('./routes/places-routes');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json())
app.use('/api/places', placesRoutes)

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error)
  }
  res.status(error.code || 404).json({ message: error.message || 'An unknown error occurred!' })
})

app.listen(5000)