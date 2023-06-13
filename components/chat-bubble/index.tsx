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
      {opening_statement && <div>{opening_statement}</div>}
      <div className={cn(styles.content, mine ? styles.mine : styles.other)}>
        <span className={cn('inline-flex', styles.shape)}>{content}</span>
      </div>
      <div></div>
    </div>
  )
}

export default ChatBubble
