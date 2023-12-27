import React from 'react'

import Card from '../../../shared/components/UIElements/Card/Card';

import './PlaceList.css'
import PlaceItem from '../PlaceItem/PlaceItem';

const PlaceList = props => {
  if (props.items.length === 0) {
    return (
      <div className='place-list center'>
        <Card>
          <h2>No palces found. Maybe create one?</h2></Card>
        <button>Share Place</button>
      </div>
    )
  }

  return <ul className='place-list'>
    {props.items.map(place => (<PlaceItem key={place.id} id={place.id} image={place.imageUrl} title={place.title} description={place.description} address={place.address} creatorId={place.creator} coordinates={place.location} />))}
  </ul>
}

export default PlaceList
