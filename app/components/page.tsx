'use client'
import styles from './style.module.css'
import PowerBy, { PowerByFooter } from '@/components/power-by'
import Button from '@/components/button'
import AcademicCap from '@heroicons/react/24/solid/AcademicCapIcon'
import LikeAndDislike from '@/components/like-and-dislike'
import Loading from '@/components/loading'
const Home = () => {
  return <main className={styles.container}>
    <h1>Components</h1>
    <div>
      <h2>Power By</h2>
      <PowerBy />
      <PowerByFooter appName='Dify.AI' />
    </div>

    <div>
      <h2>Button</h2>
      <Button text="Blue" type='blue' className='mr-2' />
      <Button text="Red" type='red' className='mr-2' />
      <Button text="Transparent" type='transparent' className='mr-2' />
      <Button text="Blue" type='blue' className='mr-2'>
        <AcademicCap className="h-4 w-4 text-white mr-2" />
        Hello Cap
      </Button>
    </div>

    <div>
      <h2>Input</h2>
    </div>

    <div>
      <h2>Chat Bubble</h2>
    </div>

    <div>
      <h2>Select</h2>
    </div>

    <div>
      <h2>Loading</h2>
      <Loading />
    </div>

    <div className='flex flex-col'>
      <h2>Like And Dislike</h2>
      <div className='flex gap-2'>
        <div className='flex gap-2'>
          <LikeAndDislike status='like' onAction={(action) => {
            console.log(action)
          }}/>
          <LikeAndDislike status='dislike' onAction={(action) => {
            console.log(action)
          }}/>
          <LikeAndDislike status='none' onAction={(action) => {
            console.log(action)
          }}/>
        </div>
      </div>
    </div>
  </main>
}

export default Home
