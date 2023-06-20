'use client'
import React, { FC, useState } from 'react'
import cn from 'classnames'
import ChevronUp from '@heroicons/react/24/outline/ChevronUpIcon'
import ChevronDown from '@heroicons/react/24/outline/ChevronDownIcon'

interface SelectProps {
  value: string | number | undefined
  className?: string
  options: any[]
  onSelect: (item: any) => void
}

const Select: FC<SelectProps> = ({ value, options, className, onSelect }) => {
  const [open, setOpen] = useState(false)
  const selectedOption = options.find((item) => item.value === value)
  return (
    <div className='relative flex w-full'>
      <div
        className={cn(
          'flex items-center relative',
          'h-9 px-3 py-2 rounded-lg bg-gray-100 hover:outline outline-gray-300 cursor-pointer',
          'hover:bg-gray-50 active:bg-gray-50 focus:bg-gray-50',
          'text-sm text-gray-900',
          className ? className : 'w-1/2'
        )}
        onClick={() => {
          setOpen(!open)
        }}
      >
        <span>{selectedOption?.label || selectedOption?.name}</span>
        <span className='absolute mr-2 right-0'>
          {open ? (
            <ChevronUp className='h-4 w-4 text-gray-500' />
          ) : (
            <ChevronDown className='h-4 w-4 text-gray-500' />
          )}
        </span>
      </div>
      {open && (
        <div
          className={cn(
            'absolute top-12 left-0 py-1 px-2',
            'bg-white rounded-lg shadow-md',
            className ? className : 'w-1/2'
          )}
        >
          {options.map((item, index) => (
            <div
              key={`${item.value}-${index}`}
              className={cn(
                'flex items-center cursor-pointer w-full',
                'h-9 px-3 py-2',
                'text-sm text-gray-900',
                'hover:bg-gray-100 active:bg-gray-100 focus:bg-gray-100 ',
                'hover:rounded-lg active:rounded-lg focus:rounded-lg',
                selectedOption?.value === item.value
                  ? 'bg-gray-100'
                  : 'bg-white'
              )}
              onClick={() => {
                setOpen(false)
                onSelect(item.value)
              }}
            >
              {item.label || item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Select
