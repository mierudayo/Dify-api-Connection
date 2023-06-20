import Main from './main'
import { getLocale, client } from '@/service'
import { ConversationsProps } from '@/interface'

async function getData() {
  const { status, data } = await client.getConversations()
  if (status !== 200) {
    throw new Error('Failed to fetch data')
  }
  return data as ConversationsProps
}

const Sidebar = async () => {
  const conversations = await getData()
  return <Main locale={getLocale()} {...conversations} />
}

export default Sidebar
