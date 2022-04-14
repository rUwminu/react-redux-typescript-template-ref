import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { motion } from 'framer-motion'

// Global Page Animated Loader
import AnimatedLoader from '../GlobalComponents/AnimatedLoader'

const pageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 3.5,
    },
  },
  exit: {
    opacity: 0,
  },
}

const Home: React.FC = () => {
  return (
    <AnimatedLoader>
      <motion.div
        variants={pageVariants}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        Home
      </motion.div>
    </AnimatedLoader>
  )
}

export default Home
