'use client'
import React, { FC } from 'react'
import styles from './style.module.scss'

interface ChatInputProps {
  value: string
  onSubmit: () => void
  placeholder?: string
}

const ChatInput: FC<ChatInputProps> = ({}) => {
  return <div className={styles.chat}></div>
}

export default ChatInput
