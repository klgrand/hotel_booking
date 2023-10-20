import React, { InputHTMLAttributes, FC } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

const Input: FC<InputProps> = ({ name, ...props }) => {
  return (
    <input
      id={name}
      name={name}
      {...props}
    />
  )
}

export default Input