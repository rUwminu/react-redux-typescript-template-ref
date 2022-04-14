import React from 'react'
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

const About: React.FC = () => {
  return (
    <AnimatedLoader>
      <motion.div
        variants={pageVariants}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        About
      </motion.div>
    </AnimatedLoader>
  )
}

export default About
