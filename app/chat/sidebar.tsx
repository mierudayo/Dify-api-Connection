'use client'
import { FC } from 'react'
import { LocaleProps, ConversationsProps } from '@/interface'
import Button from '@/components/button'
import PencilSquare from '@heroicons/react/24/solid/PencilSquareIcon'
import MenuItem from '@/components/menu-item'

import I18N from '@/i18n'

const Sidebar: FC<ConversationsProps & LocaleProps> = ({ locale }) => {
  return (
    <div className='flex flex-col shrink-0 w-60 h-screen bg-white hidden sm:block'>
      <div className='flex items-center w-full h-16 p-4'>
        <span className='h-8 w-8 mr-3 inline-flex items-center justify-center bg-blue-100 rounded-lg shrink-0'>
          🤖️
        </span>
        <span className='text-gray-800 text-md font-semibold truncate'>
          {I18N(locale)('app.name')}
        </span>
      </div>
      <div className='flex  mx-4'>
        <Button
          text=''
          type='transparent'
          onClick={() => {}}
          className='w-full'
        >
          <PencilSquare className='h-4 w-4 mr-2 text-blue-600' />
          <span className='text-blue-600'>{I18N(locale)('app.new_chat')}</span>
        </Button>
      </div>
      <div className='mt-6 mx-4'>
        <div className='ml-4 text-gray-500 text-xs mb-1'>
          {I18N(locale)('app.chats')}
        </div>
        <div className='flex flex-col'>
          <MenuItem text='Menu Item' onClick={() => {}} />
          <MenuItem text='Menu Item' onClick={() => {}} />
          <MenuItem text='Menu Item' onClick={() => {}} />
          <MenuItem text='Menu Item' onClick={() => {}} />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
