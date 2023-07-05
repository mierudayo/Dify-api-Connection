'use client'
import { FC, useReducer } from 'react'
import { AppProps, ConversationsProps, LocaleProps } from '@/interface'
import Button from '@/components/button'
import PencilSquare from '@heroicons/react/24/solid/PencilSquareIcon'
import MenuItem from '@/components/menu-item'
import Welcome from '@/components/welcome'
import Form from '@/components/form'
import XPowerBy, { XPowerByPrivacy } from '@/components/x-power-by'
import I18N from '@/i18n'

enum Status {
  INIT = 'init',
  READY = 'ready',
  TYPING = 'typing',
  SENDING = 'sending',
  ERROR = 'error',
  SUCCESS = 'success'
}

interface ExtraPropss {
  user: string
  conversations: ConversationsProps[]
}
interface IState {
  status: Status
  conversations: ConversationsProps[]
  inputs: any
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
    case 'NEW_CONVERSATION':
      return action.payload
    case 'SET_QUERY':
      return {
        ...state,
        query: action.payload
      }
    case 'SET_INPUT':
      const h = {} as any
      action.payload.forEach((itm: any) => {
        h[itm.variable] = itm.default
      })
      return {
        ...state,
        status: Status.READY,
        inputs: h
      }
    case 'SET_CONVERSATION_ID':
      return {
        ...state,
        conversation_id: action.payload
      }
    default: {
      return state
    }
  }
}
const Chat: FC<LocaleProps> = ({}) => {
  return <>Chat</>
}

const Main: FC<AppProps & LocaleProps & ExtraPropss> = ({
  user,
  user_input_form,
  locale,
  conversations
}) => {
  const initialState: IState = {
    status: Status.INIT,
    conversations,
    inputs: [],
    query: '',
    conversation_id: null,
    user
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
    <>
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
            onClick={() =>
              dispatch({ type: 'NEW_CONVERSATION', payload: initialState })
            }
            className='w-full'
          >
            <PencilSquare className='h-4 w-4 mr-2 text-blue-600' />
            <span className='text-blue-600'>
              {I18N(locale)('app.new_chat')}
            </span>
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
      <div className='flex flex-col w-full pt-32 px-5 sm:px-8 md:px-72 '>
        {state.status == Status.INIT ? (
          <>
            <section className='mb-6'>
              <Welcome
                name={I18N(locale)('app.welcome_message')}
                description={I18N(locale)('app.welcome_message_description')}
              />
            </section>
            <section className='mb-4'>
              <Form
                hint={I18N(locale)('app.initial_prompt')}
                items={items}
                onSubmit={(items) => {
                  dispatch({
                    type: 'SET_INPUT',
                    payload: items
                  })
                }}
              />
            </section>

            <section className='flex flex-col sm:flex-row items-center justify-between gap-4'>
              <XPowerByPrivacy />
              <XPowerBy />
            </section>
          </>
        ) : (
          <Chat locale={locale} />
        )}
      </div>
    </>
  )
}

export default Main
