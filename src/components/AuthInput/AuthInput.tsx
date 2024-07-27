import React from 'react'
import s from "./AuthInput.module.scss"
interface AuthInputProps {
    placeholder:string, 
    setState: (value:string)=>void, 
    state:string, 
    type: string
}

export function AuthInput({placeholder, setState, state, type}:AuthInputProps){
  return (
    <input className={s.input} placeholder={placeholder} type={type} onChange={(e)=>setState(e.target.value)} value={state} />
  )
}
