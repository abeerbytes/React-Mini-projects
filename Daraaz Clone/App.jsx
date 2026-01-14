
import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"

import Header from "./components/header.jsx"
import Product from "./components/product.jsx"
import Login from "./components/login.jsx"
import Signup from "./components/signup.jsx"

const App = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        setProducts(data)
      } catch (err) {
        setError(err.toString())
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (loading) return <h1 className="text-center mt-10">Loading...</h1>
  if (error) return <h1 className="text-center mt-10 text-red-500">{error}</h1>

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <Routes>
        <Route path="/" element={
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map(item => (
              <Product key={item.id} product={item} />
            ))}
          </div>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
