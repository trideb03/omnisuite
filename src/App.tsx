import './App.css'
import DisplaySection from './components/DisplaySection/DisplaySection'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div className='container'>
      <Navbar />
      <DisplaySection />
      <Footer />
    </div>
  )
}

export default App
