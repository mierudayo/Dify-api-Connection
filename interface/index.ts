export interface LocaleProps {
  locale: string
}

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

export interface ConversationProps {
  id: string
  inputs: any
  introduction: string
  name: string
  status: string
}

export interface ConversationsProps {
  data: ConversationProps[]
  has_more: boolean
  limit: number
}
