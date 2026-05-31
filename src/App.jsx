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
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import './App.css'

function App() {
  return (
    <Router>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: 'var(--bg-surface)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border-default)',
            borderRadius: '12px',
            fontFamily: 'var(--sans)',
            fontSize: '0.9rem',
            boxShadow: 'var(--shadow-md)',
          },
          success: {
            iconTheme: { primary: '#C6F135', secondary: '#0A0B0F' },
          },
        }}
      />
      <div className="app-shell">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tech-services" element={<TechServices />} />
            <Route path="/startup-support" element={<StartupSupport />} />
            <Route path="/sports-tech" element={<SportsTech />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  )
}

export default App
