'use client'
import React, { FC } from 'react'
import cn from 'classnames'
import styles from './style.module.scss'
import ChatBubble from '@heroicons/react/24/solid/ChatBubbleOvalLeftEllipsisIcon'
import Dots from '@heroicons/react/24/solid/EllipsisHorizontalIcon'

interface ActionProps {
  label: string
  value: string
}
interface MenuItemProps {
  active?: boolean
  text: string
  onClick: () => void
  actions?: ActionProps[]
  onActionClick?: (value: string) => void
}

const MenuItem: FC<MenuItemProps> = ({
  active = false,
  text,
  actions,
  onActionClick
}) => {
  const [showActions, setShowActions] = React.useState(false)

  // TODO make showActions false when click outside and not on action button

  return (
    <div className={cn(styles.item, active && styles.active)}>
      <ChatBubble className='w-4 h-4 inline-flex shrink-0 ml-4' />
      <div className='truncate overflow-hidden w-32 sm:w-full grow'>{text}</div>
      {actions && actions.length > 0 && (
        <div
          onClick={() => {
            setShowActions((s) => !s)
          }}
          className={cn(
            styles.action,
            'inline-flex relative w-6 h-6 mr-1.5',
            'rounded-md cursor-pointer items-center justify-center',
            'bg-gray-100 hover:bg-gray-300 text-gray-700 shrink-0'
            // 'transition-colors duration-200 '
          )}
        >
          <Dots className='w-4 h-4 inline-flex shrink-0' />
          {showActions && (
            <div
              className={cn(
                styles.actionMenu,
                'absolute top-0 right-0 mt-7',
                'w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'
              )}
            >
              <div className='py-1'>
                {actions?.map((action, index) => (
                  <div
                    key={index}
                    onClick={(evt) => {
                      evt.stopPropagation()
                      setShowActions(false)
                      onActionClick && onActionClick(action.value)
                    }}
                    className={cn(
                      'block px-4 py-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900',
                      'cursor-pointer'
                    )}
                  >
                    {action.label}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default MenuItem
