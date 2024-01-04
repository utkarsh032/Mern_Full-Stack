import React from 'react'
import './Auth.css'
import Card from '../../../shared/components/UIElements/Card/Card'
import Input from '../../../shared/components/FormElements/Input/Input'
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../../shared/utils/validators'
import { useForm } from '../../../shared/hooks/form-hook'
import Button from '../../../shared/components/FormElements/Button/Button'



const Auth = () => {

  const [formState, inputHandler] = useForm({
    email: {
      value: '',
      isValid: false
    },
    password: {
      value: '',
      isValid: false
    }
  }, false)

  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs)
  }

  return (
    <Card className="authentication ">
      <h2 className=''>Login</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        <Input element='input' id="email" type="email" label="E-mail" validators={[VALIDATOR_EMAIL]} errorText="Please enter a valid email!" onInput={inputHandler} />

        <Input element='input' id="password" type="password" label="Password" validators={[VALIDATOR_MINLENGTH(5)]} errorText="Please enter a valid password! at least 5 Char." onInput={inputHandler} />

        <Button type="submit" disabled={!formState.isValid}>Login</Button>
      </form>
    </Card>
  )
}

export default Auth
