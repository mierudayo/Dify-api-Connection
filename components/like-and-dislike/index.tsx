'use client'
import React from "react"
import styles from './style.module.css'
import cn from 'classnames'
interface LikeAndDislikeProps {
  status: 'like' | 'dislike' | 'none'
  onAction?: (action: 'like' | 'dislike' | 'none') => void
}

const LikeAndDislike: React.FC<LikeAndDislikeProps> = ({
  onAction,
  status = 'none',
}) => {
  return <div className={cn(
    styles.action_container,
  )}>
    {status === 'none' && <>
      <span
        onClick={() => onAction && onAction('like')}
        className={cn(
          styles.action,
          'hover:bg-blue-50 hover:outline-1 hover:outline-white',
        )}>
        <span className={styles.like} />
      </span>
      <span
        onClick={() => onAction && onAction('dislike')}
        className={cn(
          styles.action,
          'hover:bg-red-50 hover:outline-1 hover:outline-white',
        )}>
        <span className={styles.dislike} />
      </span>
    </>}
    {status === 'like' && <span
      onClick={() => onAction && onAction('none')}
      className={cn(
        styles.action,
        styles.action_like_active,
        'hover:bg-blue-50 hover:outline-1 hover:outline-white',
      )}>
      <span className={styles.like} />
    </span>}
    {status === 'dislike' && <span
      onClick={() => onAction && onAction('none')}
      className={cn(
        styles.action,
        styles.action_dislike_active,
        'hover:bg-red-50 hover:outline-1 hover:outline-white',
      )}>
      <span className={styles.dislike} />
    </span>}

  </div>
}

export default LikeAndDislike
