// components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import LottieHandler from '@components/UI/feedback/LottieHandler/LottieHandler';
import Heading from '@components/UI/common/Heading';
import Input from '@components/Form/Input';
import { Alert , Spinner } from 'react-bootstrap';
//hooks 

import useLogin from '@hooks/useLogin';
function Login() {
  const { register, handleSubmit, formState: { errors }, loading, error, searchParams, submitForm } = useLogin()
  return(
    
    <>
    <div className=' flex justify-evenly items-center h-screen'>
      <div className='shadow-lg px-20 py-10 rounded-2xl md:w-xl'>
    <Form onSubmit={handleSubmit(submitForm)}>
      <div className='text-center mb-5 '>
        <Heading title='User Login'  />
         {searchParams.get("message") === "loginRequired" && <Alert variant='warning'>Please login to access this page</Alert>}
        {searchParams.get("message") === "accountCreated" && <Alert variant='success'>Account created successfully. Please log in.</Alert>}
        </div>
        <Input label='Email' name='email' register={register} error={errors.email?.message} />
        <Input label='Password' name='password' type='password' register={register} error={errors.password?.message} />

      <Button variant="info" type="submit" className='mx-auto d-block text-white'>
          {loading === "pending" ?  <><Spinner animation="border" size='sm'></Spinner>  Loading...</>  : "Login"}
      </Button>
       {error && (<p className='mt-1 text-red-400'>{error}</p>)}
    </Form>
    </div>

    <LottieHandler type="Auth" />
    </div>

        </>
  )
}

export default Login
