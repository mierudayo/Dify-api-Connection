import { Suspense } from 'react'
import Loading from '../components/loading'

export default function Layout(props: {
  sidebar: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <main className={'flex w-full m-h-screen'}>
      <Suspense fallback={<Loading />}>{props.sidebar}</Suspense>
      {props.children}
    </main>
  )
}
