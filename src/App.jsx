import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Main from './Main'
import Product from './Product'
import Software from './Software'
import OperationSystem from './OperationSystem'
import About from './About'
import Contact from './Contact'
import Page404 from './Page404'
import Nav from './Nav'

function App() {
  return (
    <BrowserRouter>
     <div className="app">
      <Nav />
       <main className="page">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/software" element={<Software />} />
        <Route path="/product/os" element={<OperationSystem />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      </main>
      </div>
    </BrowserRouter>
  )
}

export default App

