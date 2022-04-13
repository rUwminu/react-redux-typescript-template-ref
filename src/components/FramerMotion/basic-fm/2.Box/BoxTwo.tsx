import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const BoxTwo = () => {
  return (
    <ComponentContainer>
      <motion.div
        className="box"
        drag
        dragConstraints={{
          top: -20,
          bottom: 20,
          left: -20,
          right: 20,
        }}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
      />
    </ComponentContainer>
  )
}

const ComponentContainer = styled.div`
  ${tw`
    py-6
    w-full
  `}

  .box {
    ${tw`
      flex
      items-center
      justify-center
      w-[10rem]
      h-[10rem]
      bg-blue-400
    `}
  }
`

export default BoxTwo
