import { type NextRequest } from 'next/server'
import { cookies } from 'next/headers'
import { client } from '@/service'

export async function POST(request: NextRequest) {
  const { inputs, query, conversation_id } = await request.json()
  const cookieStore = cookies()
  const user = cookieStore.get('user')?.value || 'anonymous'
  const { data } = await client.createChatMessage(
    inputs,
    query,
    user,
    true,
    conversation_id
  )
  return new Response(data)
}
