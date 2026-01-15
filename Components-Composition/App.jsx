import Header from "./components/Header"
import Layout from "./components/Layout"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"
function App() {
  return (
    <Layout>
      <Header />
      
      <div className="flex flex-1">
        <Sidebar />
        
        <Main>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            This is the main page of Web
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            This content is passing by children
          </p>
        </Main>
      </div>
      
      <Footer />
    </Layout>
  )
}
export default App