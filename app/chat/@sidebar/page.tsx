import Main from './main'
import { getLocale, client } from '@/service'

async function getData() {}

const Sidebar = async () => {
  const conversations = await getData()
  return <Main locale={getLocale()} />
}

export default Sidebar
