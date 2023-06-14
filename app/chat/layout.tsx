import { Suspense } from 'react'
import Loading from '../components/loading'
import styles from './style.module.scss'
export default function Layout(props: {
  sidebar: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <main className={styles.main}>
      <div className={styles.sidebar_wrapper}>
        <Suspense fallback={<Loading />}>{props.sidebar}</Suspense>
      </div>
      <div className={styles.content_wrapper}>{props.children}</div>
    </main>
  )
}
