import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Notfound from "./pages/404"
import Project from "./pages/Project"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"


function App() {


  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Projects" element={<Project />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </main>
        <Footer />
      </div>


    </Router>

  )
}

export default App
