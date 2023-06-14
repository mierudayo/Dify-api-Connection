import { getLocale, client } from '@/service'
import Main from './main'

async function getData() {
  const { status, data: appInfo } = await client.getApplicationParameters()
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  // Recommendation: handle errors
  if (status !== 200) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return appInfo
}

const Home = async () => {
  const appInfo = await getData()
  return <Main {...appInfo} locale={getLocale()} />
}

export default Home
