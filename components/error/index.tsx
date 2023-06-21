'use client'
import React, { FC } from 'react'

interface ErrorPageProps {}

const ErrorPage: FC<ErrorPageProps> = ({}) => {
  return (
    <div className='flex w-full min-h-screen items-center justify-center text-xs text-red-600'>
      We are sorry, but something went wrong.
    </div>
  )
}

export default ErrorPage
