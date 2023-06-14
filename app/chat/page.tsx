const Home = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return <div className=''>Home</div>
}

export default Home
