import { Routes, Route, Link } from 'react-router-dom'
import AmazingKira from './AmazingKira.jsx'
import  DogSocial  from './DogSocial.jsx'
import './App.css'

// Example page components


function App() {
  return (
    <>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/dogsocial">Dog Social</Link>
      </nav>

      <Routes>
        <Route path="/" element={<AmazingKira />} />
        <Route path="/dogsocial" element={<DogSocial />} />
      </Routes>
    </>
  )
}

export default App