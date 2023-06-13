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

const ChatBubble: FC<ChatBubbleProps> = ({ content, mine = false }) => {
  return (
    <div className={cn(styles.bubble, mine ? styles.bubble_mine : styles.bubble_other)}>
      <div></div>
      <div>{content}</div>
      <div></div>
    </div>
  )
}

export default ChatBubble
