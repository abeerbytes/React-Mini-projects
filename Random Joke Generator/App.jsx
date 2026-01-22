import { useEffect, useState } from 'react'
import Button from './Componenets/Button.jsx'
import JokeBox from './Componenets/Joke.jsx'
import FetchJoke from './Services/JokeApi.jsx'

function App() {
  const [joke, setJoke] = useState("")
  const [loading, setLoading] = useState(false)

  const getJoke = async () => {
    setLoading(true)
    try {
      const data = await FetchJoke()
      setJoke(`${data.setup} 😂 ${data.punchline}`)
    } catch {
      setJoke("Failed to load joke...")
    }
    setLoading(false)
  }

  useEffect(() => {
    getJoke()
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center linear-to-r from-purple-200 to-pink-200 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-purple-700 mb-6">😂 Joke Generator</h1>

        <JokeBox joke={joke} loading={loading} />

        <Button onClick={getJoke} />
      </div>
    </div>
  )
}

export default App
