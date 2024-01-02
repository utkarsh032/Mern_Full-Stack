import React, { useCallback } from 'react'
import './NewPlaces.css'
import Input from '../../../shared/components/FormElements/Input/Input'
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../../shared/utils/validators'
const NewPlaces = () => {
  const titleInputHandler = useCallback((id, value, isValid) => {

  }, [])

  const descriptionInputHandler = useCallback((id, value, isValid) => {

  }, [])


  return (
    <form className='place-form'>
      <Input id="title" element="input" type="text" label="Title" validators={[VALIDATOR_REQUIRE()]} errorText='Please Enter A Valid Title.' onInput={titleInputHandler} />

      <Input id="description" element="description" label="Description" validators={[VALIDATOR_MINLENGTH(5)]} errorText='Please Enter A Valid Title.' onInput={descriptionInputHandler} />

    </form>
  )
}

export default NewPlaces