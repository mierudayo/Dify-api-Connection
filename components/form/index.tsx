'use client'
import React, { FC } from 'react'
import styles from './style.module.scss'
import Input from '@/components/input'
import Select from '@/components/select'
import cn from 'classnames'
export interface FormItemProps {
  label: string
  type: string
  variable: string
  required?: boolean
  options?: string[]
  max_length?: number
  default: string
}

interface FormProps {
  items: FormItemProps[]
  onSubmit?: () => void
  onCancel?: () => void
}
export const FormItem: FC<FormItemProps> = ({ type, label, options }) => {
  return (
    <div className={cn('flex flex-row xs:flex-col items-center')}>
      <label className={cn('inline-flex items-center', 'text-gray-900 text-sm w-32 xs:w-full')}>{label}</label>
      {type === 'text-input' && <Input className='w-full' value='' onChange={() => {}} />}
      {type === 'select' && options && (
        <Select
          className='w-full'
          value={undefined}
          options={options.map((itm) => ({ label: itm, value: itm }))}
          onSelect={() => {}}
        />
      )}
    </div>
  )
}

const Form: FC<FormProps> = ({ items }) => {
  return (
    <form className={styles.form}>
      {items.map((item) => {
        return <FormItem key={item.label} {...item} />
      })}
    </form>
  )
}

export default Form
