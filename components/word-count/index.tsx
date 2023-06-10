import { FC } from 'react'

interface WordCountProps {
  wordCount: number
}

const WordCount: FC<WordCountProps> = ({ wordCount }) => {
  return (
    <div className='inline-flex items-center bg-gray-200 rounded-md px-1'>
      <span className='text-sm text-gray-500'>{wordCount}</span>
    </div>
  )
}

export default WordCount
