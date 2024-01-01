import React from 'react'
import './NewPlaces.css'
import Input from '../../../shared/components/FormElements/Input/Input'
const NewPlaces = () => {
  return (
    <form className='place-form'>
      <Input element="input" type="text" label="Title" validators={[]} errorText='Please Enter A Valid Title.' />
    </form>
  )
}
export default NewPlaces;