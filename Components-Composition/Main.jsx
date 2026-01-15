const Main = ({ children }) => {
  return (
    <main className="flex-1 p-8 bg-white">
      <div className="max-w-4xl">
        {children}
      </div>
    </main>
  )
}
export default Main