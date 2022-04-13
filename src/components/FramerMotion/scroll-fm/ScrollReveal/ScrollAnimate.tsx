import React, { useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

const ScrollAnimate: React.FC = () => {
  return (
    <SectionContainer>
      <h1>Scroll Animate</h1>
      <SquareBox />
      <SquareBox />
      <SquareBox />
      <SquareBox />
    </SectionContainer>
  )
}

const SquareBox: React.FC = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    // This control view port enter element how many px before trigger isView to true
    rootMargin: '-200px 0px',
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView])

  const squareVariants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
    hidden: { opacity: 0 },
  }

  const elementVariants = {
    hidden: {
      y: -20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <motion.div
      ref={ref}
      className="square-item"
      variants={squareVariants}
      animate={controls}
      initial="hidden"
    >
      {[1, 2].map((x) => (
        <motion.div
          key={x}
          className="text-item"
          variants={elementVariants}
          transition={{
            type: 'spring',
            stiffness: 40,
            damping: 5,
          }}
        >
          This is Text Title
        </motion.div>
      ))}
    </motion.div>
  )
}

const SectionContainer = styled.div`
  ${tw`
    flex
    flex-col
    mx-auto
    px-6
    h-full
    w-full
    max-w-6xl
  `}

  .square-item {
    ${tw`
        flex
        items-center
        justify-center
        mb-6
        px-20
        w-full
        h-[80vh]
        bg-red-400
    `}

    .text-item {
      ${tw`
        w-full
        text-2xl
        font-semibold
      `}
    }
  }
`

export default ScrollAnimate
