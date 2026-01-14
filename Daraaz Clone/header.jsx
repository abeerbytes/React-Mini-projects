import { Link } from "react-router-dom"
import { FaSearch, FaShoppingCart } from "react-icons/fa"

const Header = () => {
  return (
    <header className="bg-orange-500 text-white">
      <div className="flex items-center gap-4 px-4 py-3">

        <h1 className="text-2xl font-bold">Daraz</h1>

        <div className="flex flex-1 bg-white rounded">
          <input
            placeholder="Search in Daraz"
            className="flex-1 px-3 py-2 text-black outline-none"
          />
          <button className="bg-orange-600 px-4">
            <FaSearch />
          </button>
        </div>

        <div className="hidden md:flex gap-4 text-sm">
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/signup" className="hover:underline">Signup</Link>
        </div>

        <FaShoppingCart className="text-xl" />
      </div>
    </header>
  )
}

export default Header


// import { Search, ShoppingCart, Menu, X } from "lucide-react"
// import { useState } from "react"

// const Header = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   return (
//     <header className="bg-orange-500 text-white">
//       <div className="px-3 py-3 sm:px-4 lg:px-6">
//         {/* Main Header Row */}
//         <div className="flex items-center gap-2 sm:gap-4">
//           {/* Mobile Menu Toggle */}
//           <button 
//             className="md:hidden"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
//           </button>

//           {/* Logo */}
//           <a href="/" className="text-xl sm:text-2xl font-bold whitespace-nowrap">
//             Daraz
//           </a>

//           {/* Search Bar - Hidden on mobile, shown on tablet+ */}
//           <div className="hidden sm:flex flex-1 bg-white rounded overflow-hidden max-w-3xl">
//             <input
//               placeholder="Search in Daraz"
//               className="flex-1 px-3 py-2 text-sm lg:text-base text-black outline-none"
//             />
//             <button className="bg-orange-600 px-3 sm:px-4 hover:bg-orange-700 transition-colors">
//               <Search size={18} />
//             </button>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex gap-4 text-sm lg:text-base whitespace-nowrap">
//             <a href="/login" className="hover:underline">Login</a>
//             <a href="/signup" className="hover:underline">Signup</a>
//           </div>

//           {/* Cart Icon */}
//           <a href="/cart" className="hover:text-orange-200 transition-colors">
//             <ShoppingCart size={24} />
//           </a>
//         </div>

//         {/* Mobile Search Bar */}
//         <div className="sm:hidden mt-3 flex bg-white rounded overflow-hidden">
//           <input
//             placeholder="Search in Daraz"
//             className="flex-1 px-3 py-2 text-sm text-black outline-none"
//           />
//           <button className="bg-orange-600 px-3 hover:bg-orange-700 transition-colors">
//             <Search size={18} />
//           </button>
//         </div>

//         {/* Mobile Menu Dropdown */}
//         {mobileMenuOpen && (
//           <div className="md:hidden mt-3 pt-3 border-t border-orange-400 flex flex-col gap-3">
//             <a 
//               href="/login" 
//               className="hover:text-orange-200 transition-colors"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Login
//             </a>
//             <a 
//               href="/signup" 
//               className="hover:text-orange-200 transition-colors"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Signup
//             </a>
//           </div>
//         )}
//       </div>
//     </header>
//   )
// }

// export default Header