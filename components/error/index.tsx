'use client'
import React, { FC } from 'react'
import styles from './style.module.scss'

interface ErrorPageProps {}

const ErrorPage: FC<ErrorPageProps> = ({}) => {
  return <div className={styles.errors}>Error</div>
}

export default ErrorPage
