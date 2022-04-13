import React from 'react'
import { motion } from 'framer-motion'

const cardElementVariants = {
  initial: {
    opacity: 0,
    x: -60,
    y: 20,
    rotate: 0,
  },
  animate: {
    opacity: [0, 1],
  },
}

type FancyCardElementProps = {
  x: number
  y: number
  rotate: number
  controls: any
  isYellow: boolean
}

const FancyCardElement: React.FC<FancyCardElementProps> = ({
  x,
  y,
  rotate,
  controls,
  isYellow,
}) => {
  return (
    <motion.div
      variants={{
        initial: { ...cardElementVariants.initial },
        animate: {
          ...cardElementVariants.animate,
          x,
          y,
          rotate,
        },
      }}
      className={`card-popup ${isYellow ? 'bg-yellow-500' : 'bg-purple-500'}`}
    />
  )
}

export default FancyCardElement
