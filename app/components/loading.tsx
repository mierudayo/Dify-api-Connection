import LoadingIcon from '@/components/loading'

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className='flex w-full min-h-screen'>
      <LoadingIcon />
    </div>
  )
}
