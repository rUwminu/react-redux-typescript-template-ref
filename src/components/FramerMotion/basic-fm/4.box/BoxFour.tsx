import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const BoxFour = () => {
  const boxVariant = {
    from: {
      rotate: 0,
      scale: 1,
    },
    to: {
      scale: [1, 1.4, 1.4, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ['20%', '20%', '50%', '50%', '20%'],
    },
  }

  return (
    <ComponentContainer>
      <motion.div
        className="box"
        variants={boxVariant}
        animate="to"
        initial="from"
        transition={{
          duration: 2,
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

export default BoxFour
