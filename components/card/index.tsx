'use client'
import React, { FC } from 'react'
import styles from './style.module.css'

interface CardProps {}

const Card: FC<CardProps> = ({}) => {
  return <div className={styles.card}></div>
}

export default Card
