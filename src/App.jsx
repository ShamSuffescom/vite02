import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import UseStateEx from './Components/UseStateEx';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import ImageDownload from './Pages/ImageDownload';
import useEffectEtc from './Pages/UseEffectEtc';

import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

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
        <div className="full-height">
          {/* <Container fluid> */}
            <Header />
          {/* </Container> */}
          <Container fluid>
            <Row className="mt-4">
              <Col md={2}>
                <div className="p-3 border bg-light">
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                  <Nav.Link as={Link} to="/usestate">useState</Nav.Link>
                  <Nav.Link as={Link} to="/image-download">Image Download</Nav.Link>
                  <Nav.Link as={Link} to="/useefect-usecallback-useref">useEfect useCallback & useRef</Nav.Link>
                </div>
              </Col>
              <Col md={10}>
                <div className="p-3 border bg-light">
                  <main>
                    <Routes>
                      <Route path='/' element={<Home />} />
                      <Route path='/usestate' element={<UseStateEx />} />
                      <Route path='/image-download' element={<ImageDownload />} />
                      <Route path='/useefect-usecallback-useref' element={<useEffectEtc />} />
                    </Routes>
                  </main>
                </div>
              </Col>
            </Row>
          </Container>

          
        </div>
          <Container fluid className='footer'>
            <Row className="mt-4">
              <Footer />
            </Row>
          </Container>
      </BrowserRouter>
      {/* <BrowserRouter>
        <Header />
        
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/usestate' element={<UseStateEx />} />
            <Route path='/image-download' element={<ImageDownload />} />
          </Routes>
        </main>
        
        <Footer />
      </BrowserRouter> */}
    </>
  )
}

export default App
