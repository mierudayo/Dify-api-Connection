'use client'
import React, { FC } from 'react'
import cn from 'classnames'
import styles from './style.module.scss'
import ChatBubble from '@heroicons/react/24/solid/ChatBubbleOvalLeftEllipsisIcon'

interface MenuItemProps {
  active?: boolean
  text: string
  onClick: () => void
}

const MenuItem: FC<MenuItemProps> = ({ active = false, text }) => {
  return (
    <div className={cn(styles.item, active && styles.active)}>
      <ChatBubble className='w-4 h-4 inline-flex shrink-0' />
      <div className='truncate overflow-hidden w-32 sm:w-full'>{text}</div>
    </div>
  )
}

export default MenuItem
