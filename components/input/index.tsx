'use client'
import React, { FC } from 'react'
import cn from 'classnames'

interface InputProps {
  value: string
  placeholder?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const Input: FC<InputProps> = ({ value, placeholder, onChange }) => {
  return <input className={cn('')} value={value} placeholder={placeholder} onChange={onChange} />
}

export default Input
