const uuid = require('uuid').v4;
const { validationResult } = require('express-validator');
const HttpError = require('../models/http-error')
const getCoordsForAddress = require('../util/location');

let DUMMY_PLACES = [
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

  const place = DUMMY_PLACES.find(p => {
    return p.id === placeId;
  });

  if (!place) {
    throw new HttpError('Could not find a place for the provided id.', 404);
  }

  res.json({ place });
};


const getPlacesUserById = (req, res, next) => {
  const userId = req.params.uid;

  const place = DUMMY_PLACES.filter(p => {
    return p.creator === userId;
  });

  if (!place || place.length === 0) {
    return next(
      new HttpError('Could not find a place for the provided user id.', 404)
    );
  }
  res.json({ place });
};


const createPlace = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    next(new HttpError('Invalid inputs ', 422));
  }

  const { title, description, address, creator } = req.body;

  let coordinates;
  try {
    coordinates = await getCoordsForAddress(address);
  } catch (error) {
    return next(error);
  }

  const createdPlace = {
    id: uuid(),
    title,
    description,
    location: coordinates,
    address,
    creator
  };

  DUMMY_PLACES.push(createdPlace);

  res.status(201).json({ place: createdPlace });
};

const updatePlace = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    throw new HttpError('Invalid Inputs', 422)
  }

  const { title, description } = req.body;
  const placeId = req.params.pid;

  const updatedPlace = { ...DUMMY_PLACES.find(p => p.id === placeId) };
  const placeIndex = DUMMY_PLACES.findIndex(p => p.id === placeId);
  updatedPlace.title = title;
  updatedPlace.description = description;

  DUMMY_PLACES[placeIndex] = updatedPlace;

  res.status(200).json({ place: updatedPlace });
};

const deletePlace = (req, res, next) => {
  const placeId = req.params.pid;
  if (!DUMMY_PLACES.find(p => p.id === placeId)) {
    throw new HttpError('Could not find a place for that id.', 404)
  }
  DUMMY_PLACES = DUMMY_PLACES.filter(p => p.id !== placeId);
  res.status(200).json({ message: 'Deleted place.' });
}

exports.getPlaceById = getPlaceById
exports.getPlacesUserById = getPlacesUserById
exports.createPlace = createPlace
exports.updatePlace = updatePlace
exports.deletePlace = deletePlace
