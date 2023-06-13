'use strict'
'use client'
import React, { FC } from 'react'
import styles from './style.module.scss'
import cn from 'classnames'
interface ChatBubbleProps {
  opening_statement?: string
  like_and_dislike?: 'like' | 'dislike' | 'none'
  content: string
  mine?: boolean
}

const ChatBubble: FC<ChatBubbleProps> = ({
  opening_statement,
  content,
  mine = false
}) => {
  return (
    <div className={cn(styles.bubble, mine ? 'pr-2' : 'pl-2')}>
      <div className={cn(styles.content, mine ? styles.mine : styles.other)}>
        <div className={cn('inline-flex flex-col', styles.shape)}>
          {opening_statement && (
            <div className={cn('text-gray-500 text-xs', 'flex items-center')}>
              <span className={styles.icon}></span>
              {opening_statement}
            </div>
          )}
          {content}
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default ChatBubble
