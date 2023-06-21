import { getLocale, client } from '@/service'
import { ConversationsProps } from '@/interface'
import Main from './main'

async function getAppInfo() {
  const { status, data: appInfo } = await client.getApplicationParameters()
  if (status !== 200) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return appInfo
}

async function getConversations() {
  const { status, data } = await client.getConversations()
  if (status !== 200) {
    throw new Error('Failed to fetch data')
  }
  return data as ConversationsProps
}

const Home = async () => {
  const locale = await getLocale()
  const appInfo = await getAppInfo()
  const conversations = await getConversations()
  return (
    <main className={'flex w-full m-h-screen'}>
      <Main {...appInfo} conversations={conversations} locale={locale} />
    </main>
  )
}

export default Home
