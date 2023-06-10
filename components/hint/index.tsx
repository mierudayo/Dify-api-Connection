import React, { FC } from 'react'
import cn from 'classnames'
import Sparkles from '@heroicons/react/24/solid/SparklesIcon'
import Pencil from '@heroicons/react/24/outline/PencilIcon'

interface HintProps {
  hint: string
  hintDescription?: string
  onAction?: () => void
}

const Hint: FC<HintProps> = ({ hint, hintDescription, onAction }) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-1  rounded-lg mim-h-16',
        'bg-indigo-50 text-indigo-600',
        'px-4 py-3 sm:px-6 sm:py-4'
      )}
    >
      <div className='flex text-xs items-center justify-between'>
        <span className='inline-flex'>
          <Sparkles className='h-4 w-4 text-indigo-500 mr-1' />
          {hint}
        </span>
        {onAction && (
          <span
            className={cn(
              'inline-flex cursor-pointer h-6 px-2 py-1.5 rounded-lg text-xs items-center justify-center gap-1',
              'hover:bg-white hover:shadown-xs hover:border hover:border-gray-200',
              'text-blue-600'
            )}
            onClick={onAction}
          >
            <Pencil className='h-3 w-3' />
            Edit
          </span>
        )}
      </div>
      {hintDescription && <div className='flex text-sm text-gray-700 items-center'>{hintDescription}</div>}
    </div>
  )
}

export default Hint
