'use strict'
import React, { FC } from 'react'
import styles from './style.module.scss'
import cn from 'classnames'
interface ChatBubbleProps {
  opening_statement?: string
  like_and_dislike?: 'like' | 'dislike' | 'none'
  content: string
  mine?: boolean
  time?: number
  tokens?: number
}

const ChatBubble: FC<ChatBubbleProps> = ({
  opening_statement,
  content,
  mine = false
}) => {
  return (
    <div className={cn(styles.bubble, !mine ? 'pl-2 pr-14' : 'pr-2 pl-14')}>
      <div className={cn(styles.content, mine ? styles.mine : styles.other)}>
        <div className={cn(styles.avatar, mine && styles.mine)}></div>
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
      {/* TODO copy to clipboard like_and_dislike */}
      <div className={cn(styles.actions)}></div>
    </div>
  )
}

export default ChatBubble
