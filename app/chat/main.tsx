'use client'
import { FC } from 'react'
import { AppProps, LocaleProps } from '@/interface'
import Welcome from '@/components/welcome'
import Form from '@/components/form'
import XPowerBy, { XPowerByPrivacy } from '@/components/x-power-by'

const Main: FC<AppProps & LocaleProps> = ({}) => {
  const items = [
    {
      type: 'text-input',
      label: '昵称',
      variable: 'name',
      required: false,
      max_length: 48,
      default: ''
    },
    {
      type: 'select',
      label: '类型',
      variable: 'type',
      required: false,
      options: ['单板', '双板'],
      default: ''
    }
  ]

  return (
    <div className='flex flex-col w-full pt-32 px-5 sm:px-8 md:px-72 '>
      <section className='mb-6'>
        <Welcome
          name='Welcome to Chat'
          description='Chat is a simple chat application.'
        />
      </section>
      <section className='mb-4'>
        <Form hint='Init Prompt' items={items} />
      </section>

      <section className='flex items-center justify-between'>
        <XPowerByPrivacy />
        <XPowerBy />
      </section>
    </div>
  )
}

export default Main
