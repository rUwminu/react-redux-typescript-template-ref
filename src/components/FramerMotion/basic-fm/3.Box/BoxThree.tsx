import React, { useState } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { motion } from 'framer-motion'

type ListDot = {
  id: number
}

const BoxThree = () => {
  const [listDot, setListDot] = useState<Array<ListDot>>([
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ])

  const boxVariant = {
    from: {
      x: '-60%',
      opacity: 0,
    },
    to: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  }

  const dotVariant = {
    from: {
      y: -10,
      opacity: 0,
    },
    to: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <ComponentContainer>
      <motion.div
        className="box"
        variants={boxVariant}
        animate="to"
        initial="from"
      >
        {listDot &&
          listDot.map((x) => (
            <motion.div key={x.id} className="dot" variants={dotVariant} />
          ))}
      </motion.div>
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
      flex-col
      items-center
      justify-around
      p-4
      w-[10rem]
      h-[10rem]
      bg-blue-400
    `}

    .dot {
      ${tw`
        w-8
        h-8
        bg-gray-200/75
        rounded-full
      `}
    }
  }
`

export default BoxThree
