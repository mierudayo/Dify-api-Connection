import { FC } from 'react'
import Image from 'next/image'
import dayjs from 'dayjs'

const XPowerBy = () => {
  return (
    <a className='inline-flex items-center pr-3 space-x-3' href='https://dify.ai/' target='_blank'>
      <span className='uppercase text-xs text-gray-400'>power by</span>
      <Image src='/logo.png' alt='Dify.AI Logo' width={48} height={20} priority />
    </a>
  )
}
interface PowerByFooterProps {
  appName: string
}

export const XPowerByPrivacy = () => {
  return (
    <div className='flex items-center justify-center space-x-1 text-xs text-gray-400'>
      <span className='inline-flex shrink-0'>Please read the</span>
      <a href='https://dify.ai/privacy' target='_blank' className='underline inline-flex shrink-0'>
        privacy policy
      </a>
      <span className='inline-flex shrink-0'>provided by the app developer.</span>
    </div>
  )
}
export const XPowerByFooter: FC<PowerByFooterProps> = ({ appName }) => {
  return (
    <div className='flex items-center space-x-3'>
      <span className='uppercase text-xs text-gray-400'>
        © {appName} {dayjs().year()}
      </span>
    </div>
  )
}

export default XPowerBy
