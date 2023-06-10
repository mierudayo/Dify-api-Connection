import React from 'react'
import Main from './main'

export const metadata = {
  title: 'Components',
  description: 'Components'
}

const Home = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return <Main />
}

export default Home
