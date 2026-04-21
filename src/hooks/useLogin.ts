//react
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { logInSchema } from '@validations/logInSchema';
import type { LogInType } from '@validations/logInSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// redux 
import { useAppDispatch , useAppSelector } from '@store/hooks';
import { actAuthLogin, resetUI } from '@store/auth/authSlice';


const useLogin = () => {

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const {loading , error } = useAppSelector((state)=> state.auth)
  const [searchParams  , setSearchparams] = useSearchParams()
  const {register , handleSubmit , formState:{errors},}=useForm<LogInType>({
    mode : "onBlur",
    resolver : zodResolver(logInSchema)

  })

  const submitForm : SubmitHandler<LogInType> = async (data)=>{
    if(searchParams.get("message")){
      setSearchparams("")
    }
    dispatch(actAuthLogin(data)).unwrap().then(()=>{
      navigate("/")
    })
  }

  useEffect(()=>{
    return ()=>{
      dispatch(resetUI())
    }
  },[dispatch])

  return { register, handleSubmit, formState: { errors } , loading, error, searchParams ,submitForm }
}

export default useLogin
