'use client'
import { FC, useReducer } from 'react'
import { AppProps, LocaleProps } from '@/interface'
import Welcome from '@/components/welcome'
import Form from '@/components/form'
import XPowerBy, { XPowerByPrivacy } from '@/components/x-power-by'
import I18N from '@/i18n'

interface IState {
  inputs: any[]
  query: string
  conversation_id: string | null
  user: string | null
}

interface IAction {
  type: string
  payload: any
}

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case 'SET_QUERY':
      return {
        ...state,
        query: action.payload
      }
    default: {
      return state
    }
  }
}

const Main: FC<AppProps & LocaleProps> = ({ user_input_form, locale }) => {
  const initialState: IState = {
    inputs: [],
    query: '',
    conversation_id: null,
    user: null
  }

  const [state, dispatch] = useReducer(reducer, initialState)

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
          name={I18N(locale)('app.welcome_message')}
          description={I18N(locale)('app.welcome_message_description')}
        />
      </section>
      <section className='mb-4'>
        <Form hint={I18N(locale)('app.initial_prompt')} items={items} />
      </section>

      <section className='flex flex-col sm:flex-row items-center justify-between gap-4'>
        <XPowerByPrivacy />
        <XPowerBy />
      </section>
    </div>
  )
}

export default Main
