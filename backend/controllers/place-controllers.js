const HttpError = require('../models/http-error')


const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    desciption: 'One of the most famous sky scrapers in the world!',
    location: {
      lat: 40.7484474,
      lng: -73.9871516
    },
    address: '20 W 34th St, New York, NY 10001',
    creator: 'u1'
  }
]

const getPlaceById = (req, res, next) => {
  const placeId = req.params.pid;
  const place = DUMMY_PLACES.find(p => { return p.id === placeId })

  if (!place) {
    throw HttpErrorError('No place found with this placeId.')
  }
  res.json({ place })
}

const getPlaceByUserId = (req, res, next) => {
  const userId = req.params.uid
  const place = DUMMY_PLACES.find(p => { return p.creator === userId })
  if (!place) {
    return next(new HttpError('No place found with this UserId.'))
  }
  res.json({ place });
}

exports.getPlaceById = getPlaceById
exports.getPlaceByUserId = getPlaceByUserId

