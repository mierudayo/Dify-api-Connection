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

const Main: FC<AppProps> = ({}) => {
  return <div></div>
}

export default Main
