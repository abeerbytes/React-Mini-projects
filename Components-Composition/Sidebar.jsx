const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-100 border-r border-gray-200 p-6">
      <nav>
        <ul className="space-y-2">
          <li className="px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition-colors duration-200">
            About
          </li>
          <li className="px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition-colors duration-200">
            Home
          </li>
          <li className="px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition-colors duration-200">
            Contact
          </li>
        </ul>
      </nav>
    </aside>
  )
}
export default Sidebar