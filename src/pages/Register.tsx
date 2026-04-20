// react 
import {useForm} from 'react-hook-form'
import type {SubmitHandler} from 'react-hook-form'
import { signUpSchema } from '@validations/signUpSchema';
import type {SignUpType}from '@validations/signUpSchema';
// zod
import { zodResolver } from '@hookform/resolvers/zod'
// components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import LottieHandler from '@components/UI/feedback/LottieHandler/LottieHandler';
import Heading from '@components/UI/common/Heading';
import Input from '@components/Form/Input';

// hooks
import useCheckEmailAvailability from '@hooks/useCheckEmailAvailability';


function Register() {
  const {register , handleSubmit , formState:{errors},getFieldState , trigger} = useForm<SignUpType>(
    {
      mode : "onBlur",
      resolver : zodResolver(signUpSchema)
    }
  )
  const {
    emailAvailabilityStatus,
    enteredEmail,
    checkEmailAvailability,
    resetCheckEmailAvailability,} = useCheckEmailAvailability()

  const submitForm : SubmitHandler<SignUpType> =  (data)=>{
    console.log(data)
  }

 const emailOnBlurHandler = async (e: React.FocusEvent<HTMLInputElement>)=>{
  await trigger("email")
  const value = e.target.value
  const {isDirty , invalid} = getFieldState("email")
  if (isDirty && !invalid && enteredEmail !== value){
    //cheking
    checkEmailAvailability(value)
  }

  if(isDirty && invalid && enteredEmail ){
    resetCheckEmailAvailability()
  }


  console.log(e)
 }
  return(
    <>
    <div className='  flex justify-evenly items-center h-screen '>
      <div className='shadow-lg px-20 py-10 rounded-2xl md:w-xl'>
    <Form onSubmit={handleSubmit(submitForm)}>
      <div className='text-center mb-2 '>
        <Heading title='User Registration'  />
        </div>

        <Input label='First Name' name='firstName' register={register} error={errors.firstName?.message} />
        <Input label='Last Name' name='lastName' register={register} error={errors.lastName?.message} />
        <Input label='Email' name='email' register={register}  onBlur={emailOnBlurHandler}   error={
                errors.email?.message
                  ? errors.email?.message
                  : emailAvailabilityStatus === "notAvailable"
                  ? "This email is already in use."
                  : emailAvailabilityStatus === "failed"
                  ? "Error from the server."
                  : ""
              }
              formText={
                emailAvailabilityStatus === "checking"
                  ? "We're currently checking the availability of this email address. Please wait a moment."
                  : ""
              }
              success={
                emailAvailabilityStatus === "available"
                  ? "This email is available for use."
                  : ""
              }
              disabled={emailAvailabilityStatus === "checking" ? true : false}  />
        <Input label='Password' name='password' type='password' register={register} error={errors.password?.message} />
        <Input label='Confirm Password' name='confirmPassword' type='password' register={register} error={errors.confirmPassword?.message} />


      <Button variant="info" type="submit" className='mx-auto d-block text-white' disabled={emailAvailabilityStatus === "checking" ? true : false}>
        Sign Up
      </Button>
    </Form>
    </div>

    <LottieHandler type="Auth" />
    </div>

        </>
  )
}

export default Register
