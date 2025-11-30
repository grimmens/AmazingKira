import { Routes, Route, Link } from 'react-router-dom'
import AmazingKira from './AmazingKira.jsx'
import  Blog  from './Blog.jsx'
import './App.css'

// Example page components


function App() {
  return (
    <>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
      </nav>

      <Routes>
        <Route path="/" element={<AmazingKira />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  )
}

export default App