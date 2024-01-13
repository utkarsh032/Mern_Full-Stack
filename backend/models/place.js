const mongoose = require('mongoose');

const schema = mongoose.schema

const placeSchema = new schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  address: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  creator: { type: String, required: true }
})

module.exports = mongoose.model('Place', placeSchema)