import { ChatClient } from 'dify-client'
import { cookies } from 'next/headers'
import dotenv from 'dotenv'
dotenv.config()

export const getLocale = () => {
  const cookieStore = cookies()
  return cookieStore.get('locale')?.value
}
export const client = new ChatClient(process.env.API_SECRET)
