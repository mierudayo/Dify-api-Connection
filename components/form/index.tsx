'use client'
import React, { FC } from 'react'
import styles from './style.module.scss'
import Button from '@/components/button'
import ChatBubble from '@heroicons/react/24/solid/ChatBubbleOvalLeftEllipsisIcon'
import Hint from '@/components/hint'
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
  hint: string
  hintDescription?: string
  items: FormItemProps[]
  onSubmit?: () => void
  onCancel?: () => void
}
export const FormItem: FC<FormItemProps> = ({ type, label, options }) => {
  return (
    <div className={cn('flex flex-col sm:flex-row gap-2')}>
      <label
        className={cn(
          'flex items-center',
          'text-gray-900 text-xs w-32 shrink-0'
        )}
      >
        {label}
      </label>
      {type === 'text-input' && (
        <Input className='w-full' value='' onChange={() => {}} />
      )}
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

const Form: FC<FormProps> = ({ items, hint, hintDescription }) => {
  return (
    <div className={styles.container}>
      <Hint hint={hint} hintDescription={hintDescription} />
      <form className={styles.form}>
        {items.map((item) => {
          return <FormItem key={item.label} {...item} />
        })}
        <div className={cn('flex flex-col sm:flex-row gap-2')}>
          <div className='flex w-32'></div>
          <Button text='' type='blue' className='w-32 h-9'>
            <ChatBubble className='h-4 w-4 text-white mr-2' />
            Start Chat
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Form
