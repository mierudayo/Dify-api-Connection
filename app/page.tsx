export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return <main className='flex min-h-screen flex-col items-center justify-between p-24'>Hello</main>
}
