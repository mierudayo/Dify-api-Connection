const Content = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return <div className=''>Content</div>
}

export default Content
