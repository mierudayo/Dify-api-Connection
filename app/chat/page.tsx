import { client } from '@/service'
import Main from './main'
import ErrorPage from '@/components/error'

const Home = async () => {
  try {
    const { data: appInfo } = await client.getApplicationParameters()
    return <Main {...appInfo} />
  } catch (_) {
    return <ErrorPage />
  }
}

export default Home
