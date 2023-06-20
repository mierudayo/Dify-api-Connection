'use client'
import React, { FC } from 'react'
import cn from 'classnames'

interface InputProps {
  value: string
  className?: string
  placeholder?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const Input: FC<InputProps> = ({ value, placeholder, className, onChange }) => {
  return (
    <input
      className={cn(
        'flex items-center',
        'h-9 px-3 py-2 rounded-lg bg-gray-100 hover:outline outline-gray-300',
        'hover:bg-gray-50 active:bg-gray-50 focus:bg-gray-50',
        'text-sm text-gray-900',
        className
      )}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default Input
