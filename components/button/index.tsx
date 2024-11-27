import React, { FC, ReactNode } from 'react';
import cn from 'classnames';
import styles from './style.module.css';

interface ButtonProps {
  text?: string;
  type?: 'blue' | 'gray' | 'red' | 'white' | 'transparent';
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  text,
  children,
  className,
  type = 'blue',
  onClick,
}: ButtonProps) => {
  const buttonClassNames = cn(
    styles.button,
    {
      [styles.blue]: type === 'blue',
      [styles.gray]: type === 'gray',
      [styles.red]: type === 'red',
      [styles.white]: type === 'white',
      [styles.transparent]: type === 'transparent',
    },
    className
  );

  return (
    <button onClick={onClick} className={buttonClassNames}>
      {children || text}
    </button>
  );
};

export default Button;