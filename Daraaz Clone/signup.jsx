// const Signup = () => {
//   return (
//     <div className="flex justify-center items-center h-[80vh]">
//       <div className="bg-white p-6 rounded shadow w-80">
//         <h2 className="text-xl font-bold mb-4 text-center">Signup</h2>
//         <input type="text" placeholder="Name" className="w-full border p-2 mb-3" />
//         <input type="email" placeholder="Email" className="w-full border p-2 mb-3" />
//         <input type="password" placeholder="Password" className="w-full border p-2 mb-3" />
//         <button className="w-full bg-green-500 text-white py-2 rounded">Signup</button>
//       </div>
//     </div>
//   )
// }

// export default Signup


const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-orange-100 to-orange-200 p-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Account</h2>

        <form className="space-y-5">
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              placeholder=" "
              className="peer w-full border-b-2 border-gray-300 focus:border-orange-500 outline-none py-2 text-gray-800"
            />
            <label className="absolute left-0 -top-3.5 text-gray-500 text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all">
              Name
            </label>
          </div>

{/* email */}

          <div className="relative">
            <input
              type="email"
              placeholder=" "
              className="peer w-full border-b-2 border-gray-300 focus:border-orange-500 outline-none py-2 text-gray-800"
            />
            <label className="absolute left-0 -top-3.5 text-gray-500 text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all">
              Email
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              placeholder=" "
              className="peer w-full border-b-2 border-gray-300 focus:border-orange-500 outline-none py-2 text-gray-800"
            />
            <label className="absolute left-0 -top-3.5 text-gray-500 text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all">
              Password
            </label>
          </div>

          {/* Signup Button */}
          <button className="w-full bg-linear-to-r from-orange-500 to-orange-600 text-white py-2 rounded-xl shadow-lg hover:scale-105 transform transition">
            Sign Up
          </button>
        </form>

        {/* Extra Links */}
        <p className="text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-orange-500 font-semibold hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  )
}

export default Signup
