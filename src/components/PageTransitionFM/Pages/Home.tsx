import React, { useRef, useEffect, useState } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { motion } from 'framer-motion'

// Global Page Animated Loader
import AnimatedLoader from '../GlobalComponents/AnimatedLoader'

// Utils Components
import { DragDropFile } from '../../MultiUtilsComponents/index'

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
  const lineRef = useRef<any>()

  // const handleScrollLineEffect = () => {
  //   let path = lineRef.current
  //   let pathLength = path.getTotalLength()

  //   var scrollPercentage =
  //     (document.documentElement.scrollTop + document.body.scrollTop) /
  //     (document.body.scrollHeight - document.documentElement.clientHeight)

  //   var drawLength = pathLength * scrollPercentage

  //   path.style.strokeDasharray = pathLength - drawLength
  // }

  useEffect(() => {
    // if (lineRef) window.addEventListener('scroll', handleScrollLineEffect)
  }, [])

  useEffect(() => {
    console.log(lineRef)

    // if (lineRef) {
    //   let path = lineRef.current
    //   let pathLength = path.getTotalLength()

    //   path.style.strokeDasharray = pathLength + ' ' + pathLength

    //   path.style.strokeDashoffset = pathLength
    // }
  }, [lineRef])

  return (
    <AnimatedLoader>
      <MainContainer>
        <motion.div
          variants={pageVariants}
          initial='initial'
          animate='animate'
          exit='exit'
          className='inner-container'
        >
          <DragDropFile />
        </motion.div>
      </MainContainer>
      {/* <MainContainer>
        <div className='line-container'>
          <svg
            viewBox='0 0 239 1601'
            fill='none'
            preserveAspectRatio='xMidYMax meet'
          >
            <path
              ref={lineRef}
              d='M135 0.5V486C140 501.5 157 532.5 185 532.5C213 532.5 227.667 532.5 231.5 532.5C236.667 554.833 238.1 608.4 202.5 644L121 565C106.5 572 77.5 609 77.5 687.5M77.5 687.5H7L77.5 755.5V687.5ZM77.5 687.5C100 694 135 687.5 135 687.5C135 687.5 135 1157.17 135 1397.5C137.833 1389.5 148.5 1373.5 168.5 1373.5V1397.5H211C219.5 1402.33 236.5 1416.3 236.5 1433.5C236.5 1450.7 213.833 1458.33 202.5 1460V1564C204.5 1578.67 200.5 1605.7 168.5 1596.5C172.167 1579 167.3 1544 118.5 1544H67.5C65.3333 1551.17 61 1571.7 61 1596.5C33.5 1599 -13 1589.7 21 1532.5C38.1667 1520.5 62.2 1486.2 21 1445C36.1667 1453.67 68.7 1478.3 77.5 1507.5C80 1491.67 95 1460 135 1460V1418.5'
              stroke='#FF0000'
              stroke-width='5'
            />
          </svg>
        </div>

        <div className='section-container'>Section 1</div>
        <div className='section-container'>Section 2</div>
      </MainContainer> */}
    </AnimatedLoader>
  )
}

const MainContainer = styled.div`
  ${tw`
    h-auto
    w-full
    overflow-x-hidden
  `}

  .inner-container {
    ${tw`
      py-20
      mx-auto
      w-full
      max-w-6xl
    `}
  }

  .line-container {
    ${tw`
      fixed
      top-0
      left-0
      w-full
      h-full
      text-center
      overflow-hidden
      z-0
    `}

    svg {
      ${tw`
        inline-block
        h-full
      `}
    }
  }

  .section-container {
    ${tw`
      flex
      items-center
      justify-center
      w-full
      h-screen
      text-5xl
      font-semibold
      border-2
    `}
  }
`

export default Home
