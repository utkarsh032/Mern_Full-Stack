import React, { useContext, useState } from 'react'
import Card from '../../../shared/components/UIElements/Card/Card'
import './PlaceItem.css'
import Button from '../../../shared/components/FormElements/Button/Button'
import Modal from '../../../shared/components/UIElements/Modal/Modal'
import Map from '../../../shared/components/UIElements/Map/Map'
import { AuthContext } from '../../../shared/context/auth-context'

const PlaceItem = props => {
  const auth = useContext(AuthContext)

  const [showMap, setShowMap] = useState(false)
  const [showConfirmModal, setShowConfirmModal] = useState()

  const openMapHandler = () => setShowMap(true)

  const closeMapHandler = () => setShowMap(false)

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true)
  }

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false)
  }

  const confirmDeleteHandler = () => {
    setShowConfirmModal(false)
    console.log('Deleted')
  }

  return (
    <>
      <Modal show={showMap} onCancel={closeMapHandler} header={props.address} contentClass="place-item__modal-content" footerClass="place-item__modal-actions" footer={<Button onClick={closeMapHandler}>Close</Button>} >
        <div className='map-container'>
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      <Modal show={showConfirmModal} onCancel={cancelDeleteHandler} header="Are you sure?" className="place-item_modal-actions" footer={
        <>
          <Button inverse onClick={cancelDeleteHandler}>CANCEL</Button>
          <Button danger onClick={confirmDeleteHandler}>DELETE</Button>
        </>
      }>
        <p>Do you want to delete or processed this place?</p>
      </Modal>

      <li className='place-item'>
        <Card className="place-item__content">
          <div className='place-item__image'>
            <img src={props.image} alt={props.title} />
          </div>
          <div className='place-item__info'>
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className='place-item__actions'>
            <Button inverse onClick={openMapHandler}>View on map</Button>
            {auth.isLoggedIn && <Button to={`/places/${props.id}`}>Edit</Button>}
            {auth.isLoggedIn && <Button danger onClick={showDeleteWarningHandler}>Delete</Button>}


          </div>
        </Card>

      </li>
    </>

  )
}

export default PlaceItem
