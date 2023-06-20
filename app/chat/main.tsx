'use client'
import { FC } from 'react'
import { AppProps, LocaleProps } from '@/interface'
import Welcome from '@/components/welcome'
import Form from '@/components/form'
import XPowerBy, { XPowerByPrivacy } from '@/components/x-power-by'
import { t } from '@/i18n'

const Main: FC<AppProps & LocaleProps> = ({ user_input_form, locale }) => {
  const items = user_input_form.map((itm: any) => {
    const ik = Object.keys(itm)[0]
    const iv = Object.values(itm)[0] as any

    return {
      type: ik,
      label: iv.label,
      variable: iv.variable,
      required: iv.required,
      max_length: iv.max_length,
      default: iv.default,
      options: iv.options
    }
  })
  return (
    <div className='flex flex-col w-full pt-32 px-5 sm:px-8 md:px-72 '>
      <section className='mb-6'>
        <Welcome
          name={t('app.welcome_message', locale)}
          description={t('app.welcome_message_description', locale)}
        />
      </section>
      <section className='mb-4'>
        <Form hint={t('app.initial_prompt', locale)} items={items} />
      </section>

      <section className='flex flex-col sm:flex-row items-center justify-between gap-4'>
        <XPowerByPrivacy />
        <XPowerBy />
      </section>
    </div>
  )
}

export default Main
