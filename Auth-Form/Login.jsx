const Login=()=>{


  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Welcome Back</h1>
        
        <div className="space-y-4">
          <input 
            type="email" 
            placeholder="Email Address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition duration-200"
          />
          
          <input 
            type="password" 
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition duration-200"
          />
        </div>
        
        <button 
         
          className="w-full bg-linear-to-r from-purple-500 to-purple-600 text-white font-semibold py-3 rounded-lg hover:from-purple-600 hover:to-purple-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default Login