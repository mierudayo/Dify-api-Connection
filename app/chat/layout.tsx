import styles from './style.module.scss'
import { Suspense } from 'react'
import Loading from '../loading'
export default function Layout(props: {
  sidebar: React.ReactNode
  content: React.ReactNode
}) {
  return (
    <main className={styles.main}>
      <div className={styles.sidebar_wrapper}>
        <Suspense fallback={<Loading />}>{props.sidebar}</Suspense>
      </div>
      <div className={styles.content_wrapper}>
        <Suspense fallback={<Loading />}>{props.content}</Suspense>
      </div>
    </main>
  )
}
