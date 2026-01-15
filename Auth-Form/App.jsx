import SignUp from "./components/Signup.jsx"
import Login from "./components/Login.jsx"
import { useState } from "react"


function App() {
  const [isLogin, setLogin] = useState(true)

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {isLogin ? <Login /> : <SignUp />}
        
        <div className="text-center mt-6">
          <p className="text-gray-600 inline-block">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button 
              onClick={() => setLogin(!isLogin)}
              className="ml-2 text-purple-600 font-semibold hover:text-purple-700 transition duration-200 underline decoration-2 underline-offset-2"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}



export default App
