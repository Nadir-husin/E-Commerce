// react 
import { useEffect } from 'react';
import {useForm} from 'react-hook-form'
import type {SubmitHandler} from 'react-hook-form'
import { signUpSchema } from '@validations/signUpSchema';
import type {SignUpType}from '@validations/signUpSchema';
import { useNavigate } from 'react-router-dom';
// zod
import { zodResolver } from '@hookform/resolvers/zod'

// hooks
import useCheckEmailAvailability from '@hooks/useCheckEmailAvailability';


//redux

import { useAppDispatch , useAppSelector } from '@store/hooks';
import { actAuthRegister } from '@store/auth/authSlice';
import { resetUI } from '@store/auth/authSlice';


const useRegister = () => {
      const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const {loading , error } = useAppSelector((state) => state.auth)
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

  const submitForm : SubmitHandler<SignUpType> =  async (data)=>{
    const {firstName , lastName , email , password} = data
    dispatch(actAuthRegister( {firstName , lastName , email , password})).unwrap().then(()=>{
      navigate("/login?message=accountCreated")
    })
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
 }

 
  useEffect(()=>{
      return ()=>{
        dispatch(resetUI())
      }
    },[dispatch])


  return { register, handleSubmit, formState: { errors }, loading, error, submitForm, emailOnBlurHandler , emailAvailabilityStatus }
}

export default useRegister
