import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Global Components
import AnimatedWrapper from './GlobalComponents/AnimatedWrapper'
import Header from './GlobalComponents/Header'

const Main: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <AnimatedWrapper />
    </BrowserRouter>
  )
}

export default Main
