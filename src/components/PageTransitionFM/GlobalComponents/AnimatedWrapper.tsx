import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Page Components
import HomePage from '../Pages/Home'
import AboutPage from '../Pages/About'

const AnimatedWrapper: React.FC = () => {
  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedWrapper
