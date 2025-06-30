import About from './components/About'
import Navbar from './components/Navbar'
import Featured from './components/Featured'
import Products from './components/Products'
import Pricing from './components/Pricing'
import Blog from './components/Blog'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <About />
      <Featured />
      <Products />
      <Pricing />
      <Blog />
      <Footer />
    </div>
  )
}

export default App