'use client'
import React, { FC, useState } from 'react'
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
  onChange?: (e: any) => void
}

interface FormProps {
  hint: string
  hintDescription?: string
  items: FormItemProps[]
  onSubmit?: (e: FormItemProps[]) => void
  onCancel?: () => void
}
export const FormItem: FC<FormItemProps> = ({
  variable,
  type,
  label,
  options,
  default: defaultValue,
  onChange
}) => {
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
        <Input
          className='w-full'
          value={defaultValue}
          onChange={(e) => {
            onChange && onChange({ variable, value: e.target.value })
          }}
        />
      )}
      {type === 'select' && options && (
        <Select
          className='w-full'
          value={defaultValue}
          options={options.map((itm) => ({ label: itm, value: itm }))}
          onSelect={(e) => {
            onChange && onChange({ variable, value: e })
          }}
        />
      )}
    </div>
  )
}

const Form: FC<FormProps> = ({ items, hint, hintDescription, onSubmit }) => {
  const [formItems, setFormItems] = useState(items)
  return (
    <div className={styles.container}>
      <Hint hint={hint} hintDescription={hintDescription} />
      <div className={styles.form}>
        {formItems.map((item) => {
          return (
            <FormItem
              key={item.label}
              {...item}
              onChange={(e) => {
                setFormItems((itms) =>
                  itms.map((itm) => {
                    if (itm.variable === e.variable) {
                      return { ...itm, default: e.value }
                    }
                    return itm
                  })
                )
              }}
            />
          )
        })}
        <div
          className={cn('flex flex-col sm:flex-row gap-2')}
          onClick={() => {
            onSubmit && onSubmit(formItems)
          }}
        >
          <div className='flex w-32'></div>
          <Button text='' type='blue' className='w-32 h-9'>
            <ChatBubble className='h-4 w-4 text-white mr-2' />
            Start Chat
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Form
