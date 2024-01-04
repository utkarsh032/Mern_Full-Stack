
import Input from '../../shared/components/FormElements/Input/Input'
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/utils/validators'
import Button from '../../shared/components/FormElements/Button/Button'
import { useForm } from '../../shared/hooks/form-hook'
import './PlaceForm.css'



const NewPlaces = () => {
  const [formState, inputHandler] = useForm(
    {
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
      }
    },
    false
  );


  const placeSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs); // send this to the backend!
  };

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