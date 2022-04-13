import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'

// Child components
import FancyCardElement from './FancyCardElement'

type FancyCardProps = {
  height: number
  isUnset: boolean
}

const cardVariants = {
  initial: {
    scale: 1,
    rotate: 0,
    backgroundColor: '#f8f8f8',
  },
  animate: {
    scale: 1.2,
    rotate: [-12, 12, -6, 6, -2, 2, 0],
    backgroundColor: 'rgba(0,0,0,1)',
    transition: {
      duration: 0.35,
    },
  },
}

const eleContainerVariants = {
  initial: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  animate: {
    transition: {
      delayChildren: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
}

const FancyCard: React.FC<FancyCardProps> = ({ height, isUnset }) => {
  const controls = useAnimation()

  const eleArr = [
    {
      id: 1,
      x: 100,
      y: 0,
      rotate: 20,
      isYellow: true,
    },
    {
      id: 2,
      x: 100,
      y: height * 7.9,
      rotate: -10,
      isYellow: false,
    },
    {
      id: 3,
      x: 60,
      y: height * 12.9,
      rotate: 20,
      isYellow: true,
    },
    {
      id: 4,
      x: -40,
      y: height * 15.9,
      rotate: -20,
      isYellow: false,
    },
    {
      id: 5,
      x: -170,
      y: height * 13.9,
      rotate: 20,
      isYellow: true,
    },
    {
      id: 6,
      x: -210,
      y: height * 9.9,
      rotate: -10,
      isYellow: false,
    },
  ]

  const handleProjectTitleHover = () => {
    controls.start('animate')
  }

  const handleProjectTitleHoverLeave = () => {
    controls.start('initial')
  }

  return (
    <CardContainer size={height} unSet={isUnset}>
      <CardBox
        variants={cardVariants}
        initial='initial'
        animate={controls}
        onMouseEnter={() => handleProjectTitleHover()}
        onMouseLeave={() => handleProjectTitleHoverLeave()}
      >
        <h1>Some Title</h1>
      </CardBox>
      <motion.div
        className='card-ele-container'
        variants={eleContainerVariants}
        initial='initial'
        animate={controls}
      >
        {eleArr.map((ele) => {
          const { id, x, y, rotate, isYellow } = ele

          return (
            <FancyCardElement
              key={id}
              x={x}
              y={y}
              rotate={rotate}
              controls={controls}
              isYellow={isYellow}
            />
          )
        })}
      </motion.div>
    </CardContainer>
  )
}

interface CardProps {
  size: number
  unSet: boolean
}

const CardContainer = styled.div<CardProps>`
  ${tw`
    relative
    w-48
  `}
  height: ${(props) => `${props.size}rem`};
  margin-top: ${(props) => (props.unSet ? '-50%' : '0%')};

  .card-popup {
    ${tw`
      absolute
      top-0
      left-1/2
      w-28
      h-20
      shadow-xl
      z-[-1]
    `}
  }

  &:hover {
    z-index: 10;
  }
`

const CardBox = styled(motion.div).attrs(() => ({
  initial: 'initial',
  cardVariants,
}))`
  ${tw`
    flex
    items-end
    justify-start
    px-4
    py-3
    h-full
    w-full
    bg-white
    border
    border-b-[4px]
    border-gray-400
    border-b-yellow-500
    shadow-xl
    cursor-pointer
  `}

  h1 {
    ${tw`
      text-lg
      font-semibold
    `}
  }

  &:hover {
    h1 {
      ${tw`
        text-gray-100
      `}
    }
  }
`

export default FancyCard
