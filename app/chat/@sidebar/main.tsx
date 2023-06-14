'use client'
import Button from '@/components/button'
import PencilSquare from '@heroicons/react/24/solid/PencilSquareIcon'

const Main = () => {
  return (
    <div className='flex flex-col shrink-0 w-40 h-screen bg-gray-100'>
      <div className='flex items-center w-full h-16 p-4'>
        <span className='h-8 w-8 mr-3 inline-flex items-center justify-center bg-blue-100 rounded-lg shrink-0'>
          🤖️
        </span>
        <span className='text-gray-800 text-md font-semibold truncate'>
          Chatbotttttttttt
        </span>
      </div>
      <div className='flex w-full px-4'>
        <Button
          text=''
          type='transparent'
          onClick={() => {}}
          className='w-full'
        >
          <PencilSquare className='h-4 w-4 mr-2 text-blue-600' />
          <span className='text-blue-600'>New Chat</span>
        </Button>
      </div>
      <div></div>
    </div>
  )
}

export default Main
