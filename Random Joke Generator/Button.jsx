const Button = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 bg-purple-500 text-white rounded-xl font-semibold hover:bg-purple-600 transition"
    >
      Get a New Joke
    </button>
  )
}

export default Button
