import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { motion } from 'framer-motion'

type AnimatedLoaderProps = {
  children: React.ReactNode
}

const sliderContainerVariants = {
  initial: {
    display: 'block',
  },
  animate: {
    display: 'none',
    transition: {
      when: 'afterChildren',
    },
  },
}

const AnimatedLoader: React.FC<AnimatedLoaderProps> = ({ children }) => {
  return (
    <>
      <SliderContainer
        variants={sliderContainerVariants}
        initial='initial'
        animate='animate'
      >
        <div className='slider-box'>
          <motion.div
            key={1}
            variants={{
              initial: {
                y: window.innerHeight,
              },
              animate: {
                y: [window.innerHeight, 0, 0, -window.innerHeight],
                transition: {
                  duration: 3,
                },
              },
            }}
            className='load-slider left-slider'
          >
            <span>Loading</span>
          </motion.div>
          <motion.div
            key={2}
            variants={{
              initial: {
                y: -window.innerHeight,
              },
              animate: {
                y: [-window.innerHeight, 0, 0, window.innerHeight],
                transition: {
                  duration: 3,
                },
              },
            }}
            className='load-slider right-slider'
          >
            <span>Content</span>
          </motion.div>
        </div>
      </SliderContainer>

      {children}
    </>
  )
}

const SliderContainer = styled(motion.div).attrs(() => ({
  initial: 'initial',
  sliderContainerVariants,
}))`
  ${tw`
    absolute
    top-0
    left-0
    w-screen
    h-screen
    overflow-hidden
  `}

  .slider-box {
    ${tw`
        relative
        w-full
        h-full
    `}

    .load-slider {
      ${tw`
        absolute
        p-3
        w-1/2
        h-full
      `}

      span {
        ${tw`
            text-3xl
            font-bold
        `}
      }
    }

    .left-slider {
      ${tw`
        flex
        items-center
        justify-end
        top-0
        left-0
        bg-gray-700
      `}

      span {
        ${tw`
            text-gray-200
        `}
      }
    }

    .right-slider {
      ${tw`
        flex
        items-center
        justify-start
        bottom-0
        right-0
        bg-gray-200
      `}

      span {
        ${tw`
            text-gray-700
        `}
      }
    }
  }
`

export default AnimatedLoader
