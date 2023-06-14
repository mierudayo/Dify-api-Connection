const Sidebar = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return <div>Sidebar</div>
}

export default Sidebar
