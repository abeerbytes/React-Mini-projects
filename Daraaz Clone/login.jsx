const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-orange-100 to-orange-200 p-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back
        </h2>

        <form className="space-y-5">
          {/* Email */}h
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

          {/* Login Button */}
          <button className="w-full bg-linear-to-r from-orange-500 to-orange-600 text-white py-2 rounded-xl shadow-lg hover:scale-105 transform transition">
            Login
          </button>
        </form>

        {/* Extra Links */}
        <p className="text-center text-gray-500 mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-orange-500 font-semibold hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
