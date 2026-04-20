//react
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { logInSchema } from '@validations/logInSchema';
import type { LogInType } from '@validations/logInSchema';
import { zodResolver } from '@hookform/resolvers/zod';

// components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import LottieHandler from '@components/UI/feedback/LottieHandler/LottieHandler';
import Heading from '@components/UI/common/Heading';
import Input from '@components/Form/Input';
function Login() {

  const {register , handleSubmit , formState:{errors},}=useForm<LogInType>({
    mode : "onBlur",
    resolver : zodResolver(logInSchema)

  })

  const submitForm : SubmitHandler<LogInType> = (data)=>{
    console.log(data)
  }
  return(
    <>
    <div className=' flex justify-evenly items-center h-screen'>
      <div className='shadow-lg px-20 py-10 rounded-2xl md:w-xl'>
    <Form onSubmit={handleSubmit(submitForm)}>
      <div className='text-center mb-5 '>
        <Heading title='User Login'  />
        </div>
        <Input label='Email' name='email' register={register} error={errors.email?.message} />
        <Input label='Password' name='password' type='password' register={register} error={errors.password?.message} />

      <Button variant="info" type="submit" className='mx-auto d-block text-white'>
        Sign In
      </Button>
    </Form>
    </div>

    <LottieHandler type="Auth" />
    </div>

        </>
  )
}

export default Login
