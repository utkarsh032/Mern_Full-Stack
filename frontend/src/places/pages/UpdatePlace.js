import React from 'react'
import { useParams } from 'react-router-dom'
import Input from '../../shared/components/FormElements/Input/Input';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/utils/validators';
import Button from '../../shared/components/FormElements/Button/Button';
import './PlaceForm.css'


const DUMMY_PLACES = [
  {
    id: 'p1',
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl: "https://media.timeout.com/images/101705309/image.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: "Empire State Building 2",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl: "https://media.timeout.com/images/101705309/image.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u2'
  }
]


const UpdatePlace = () => {
  const placeId = useParams().placeId;
  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

  if (!identifiedPlace) {
    return <div className='center'><h2>Could NOt Find Place!</h2></div>
  }
  return (
    <form className='place-form'>
      <Input id="title" element="input" type="text" label="Title" validators={[VALIDATOR_REQUIRE()]} errorText="Please Enter a Valid Title" onInput={() => { }} value={identifiedPlace.title} valid={true} />

      <Input id="description" element="textarea" type="description" label="Description" validators={[VALIDATOR_MINLENGTH(5)]} errorText="Please Enter a Valid Description" onInput={() => { }} value={identifiedPlace.description} valid={true} />

      <Button>Update Place</Button>
    </form>
  )
}

export default UpdatePlace
