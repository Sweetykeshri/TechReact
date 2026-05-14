import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import TechServices from './pages/TechServices'
import StartupSupport from './pages/StartupSupport'
import SportsTech from './pages/SportsTech'
import Projects from './pages/Projects'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import { Toaster } from 'react-hot-toast'
import './App.css'

function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tech-services" element={<TechServices />} />
        <Route path="/startup-support" element={<StartupSupport />} />
        <Route path="/sports-tech" element={<SportsTech />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
