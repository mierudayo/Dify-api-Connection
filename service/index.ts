import { ChatClient } from 'dify-client'
import dotenv from 'dotenv'
dotenv.config()

export const client = new ChatClient(process.env.API_SECRET)
