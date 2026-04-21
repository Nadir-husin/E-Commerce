
// components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import LottieHandler from '@components/UI/feedback/LottieHandler/LottieHandler';
import Heading from '@components/UI/common/Heading';
import Input from '@components/Form/Input';
import {  Spinner } from 'react-bootstrap';
//hooks 
import useRegister from '@hooks/useRegister';
function Register() {
  const { register, handleSubmit, formState: { errors }, loading, error, submitForm, emailOnBlurHandler, emailAvailabilityStatus } = useRegister()


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


      <Button variant="info" type="submit" className='mx-auto d-block text-white' disabled={emailAvailabilityStatus === "checking" ? true :  loading === "pending" ? true : false}>
        {loading === "pending" ?  <><Spinner animation="border" size='sm'></Spinner>  Loading...</>  : "Register"}
      </Button>
      {error && (<p className='mt-1 text-red-400'>{error}</p>)}
    </Form>
    </div>

    <LottieHandler type="Auth" />
    </div>

        </>
  )
}

export default Register
