import React, { useCallback, useReducer } from 'react'
import './PlaceForm.css'
import Input from '../../shared/components/FormElements/Input/Input'
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/utils/validators'
import Button from '../../shared/components/FormElements/Button/Button'

const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid
        }
      } return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid }
        },
        isValid: formIsValid
      }
    default:
      return state
  }
}

const NewPlaces = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      },
      address: {
        value: '',
        isValid: false
      },
    },
    isValid: false
  })

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({ type: 'INPUT_CHANGE', value: value, isValid: isValid, inputId: id })
  }, [])

  const placeSubmitHandler = event => {
    event.preventDefault()
  }

  return (
    <form className='place-form' onSubmit={placeSubmitHandler}>
      <Input id="title" element="input" type="text" label="Title" validators={[VALIDATOR_REQUIRE()]} errorText='Please Enter A Valid Title.' onInput={inputHandler} />

      <Input id="description" element="description" label="Description" validators={[VALIDATOR_MINLENGTH(5)]} errorText='Please Enter A Valid Description (at least 5 char).' onInput={inputHandler} />

      <Input id="address" element="address" label="Address" validators={[VALIDATOR_REQUIRE()]} errorText='Please Enter A Valid Address' onInput={inputHandler} />

      <Button type="submit" disabled={!formState.isValid} >Add Place</Button>
    </form>
  )
}

export default NewPlaces