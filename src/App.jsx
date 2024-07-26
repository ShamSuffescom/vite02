import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import UseStateEx from './Components/UseStateEx';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import ImageDownload from './Pages/ImageDownload'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>*/}

      <BrowserRouter>
        <Header />
        
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/usestate' element={<UseStateEx />} />
            <Route path='/image-download' element={<ImageDownload />} />
          </Routes>
        </main>
        
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
