'use client'
import { FC } from 'react'

export interface AppProps {
  opening_statement: string
  suggested_questions: any[]
  suggested_questions_after_answer: {
    enabled: boolean
  }
  more_like_this: {
    enabled: boolean
  }
  user_input_form: any[]
}
interface ExtraProps {
  locale: string
}

const Main: FC<AppProps & ExtraProps> = ({ locale }) => {
  return <div className='flex'>{locale}</div>
}

export default Main
