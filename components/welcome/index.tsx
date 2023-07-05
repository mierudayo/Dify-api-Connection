import React, { FC } from 'react'
import cn from 'classnames'

interface WelcomeProps {
  name: string
  description: string
}

const Welcome: FC<WelcomeProps> = ({ name, description }) => {
  return (
    <div className={cn('flex flex-col')}>
      <div className={cn('font-semibold text-gray-800', 'text-xl sm:text-2xl')}>
        {name}
      </div>
      <div className='text-gray-500 text-sm'>{description}</div>
    </div>
  )
}

export default Welcome
