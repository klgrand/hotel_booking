import React from 'react'

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  label: string
  className?: string
  labelClassName?: string
}

const Button: React.FC<ButtonProps> = ({ type = 'button', onClick, label, className = '', labelClassName = '', ...props }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      {...props}
    >
      <span className={labelClassName || `text-[18px] leading-[16px] font-medium pl-[40px] pr-[31px] pt-[14px] pb-[12px] `}>{label}</span>
    </button>
  )
}

export default Button