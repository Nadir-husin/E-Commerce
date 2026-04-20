import Form from 'react-bootstrap/Form';

import {type  FieldValues, type Path, type UseFormRegister } from 'react-hook-form';

type TInputProps <TFieldValue extends FieldValues> ={
    label  : string , 
    name : Path<TFieldValue>,
    type?:string ,
    register : UseFormRegister<TFieldValue>,
    onBlur ? : (e:React.FocusEvent<HTMLInputElement>)=>void,
    error ?: string ,
    success ?: string ,
    formText ?: string,
    disabled ?: boolean
}
const Input = <TFieldValue extends FieldValues>({ label , name ,type = "text", register , error, onBlur ,success , formText , disabled} : TInputProps<TFieldValue>) => {

  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>)=>{
    if(onBlur){
      onBlur(e)
      register(name).onBlur(e)
    }else{
      register(name).onBlur(e)

    }
  }
  return (
    
        <Form.Group className="mb-2" >
        <Form.Label>{label}</Form.Label>
        <Form.Control type={type} {...register(name)} onBlur={onBlurHandler} isInvalid={error?   true  : false } isValid={success ? true : false} disabled={disabled}/>
          {formText && <Form.Text className="text-muted">{formText}</Form.Text>}
        <Form.Control.Feedback type="valid">{success}</Form.Control.Feedback>
        <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
        </Form.Group>

  )
}

export default Input
