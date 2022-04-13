import React, { useState } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const BoxOne = () => {
  const [playBox, setPlayBox] = useState<boolean>(false)

  return (
    <ComponentContainer>
      <motion.div
        className="box"
        animate={{
          x: playBox ? '200%' : 0,
          opacity: playBox ? 1 : 0.5,
          rotate: playBox ? 360 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 40,
          damping: 5,
        }}
        onClick={() => setPlayBox(!playBox)}
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

export default BoxOne
