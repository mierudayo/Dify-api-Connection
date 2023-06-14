import React, { FC, ReactNode } from 'react'
import cn from 'classnames'
import styles from './style.module.css'
interface ButtonProps {
  text: string
  type: 'blue' | 'gray' | 'red' | 'white' | 'transparent'
  className?: string
  onClick?: () => void
  children?: ReactNode
}

const Button: FC<ButtonProps> = ({
  text,
  children,
  className,
  type = 'blue',
  onClick
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        styles.button,
        type === 'blue' && styles.blue,
        type === 'gray' && styles.gray,
        type === 'red' && styles.red,
        type === 'white' && styles.white,
        type === 'transparent' && styles.transparent,
        className && className
      )}
    >
      {children || text}
    </button>
  )
}

export default Button
