import React, { type ComponentPropsWithRef } from 'react'
// Type buttons =  Button
interface ButtonProps extends ComponentPropsWithRef<'button'> {
  name: string;
  variant?: 'outline' | 'filled';
}
const Butttons = ({name,variant = 'filled',className,...rest}:ButtonProps) => {
  return (
    <button 
      className={`${variant == 'filled'?'bg-brand-green':'border-brand-green border border-solid'}  px-7 py-4 rounded-2xl w-fit ${className || ''}`} 
      {...rest} 
    >
      <span className={`body-small font-bold ${variant == 'filled'?'text-white':'text-brand-green'}`}>{name}</span>
    </button>
  )
}

export default Butttons