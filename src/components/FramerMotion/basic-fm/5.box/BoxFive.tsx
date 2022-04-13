import React, { useState } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'

const BoxFive = () => {
  const controller = useAnimation()

  return (
    <ComponentContainer>
      <div className="controller-btn-box">
        <button
          onClick={() => {
            controller.start({
              x: '200%',
              transition: {
                duration: 2,
              },
            })
          }}
        >
          To Right
        </button>
        <button
          onClick={() => {
            controller.start({
              x: 0,
              transition: {
                duration: 2,
              },
            })
          }}
        >
          To left
        </button>
        <button
          onClick={() => {
            controller.start({
              borderRadius: '50%',
              transition: {
                duration: 1,
              },
            })
          }}
        >
          Circle
        </button>
        <button
          onClick={() => {
            controller.start({
              borderRadius: '0%',
              transition: {
                duration: 1,
              },
            })
          }}
        >
          Square
        </button>
        <button
          onClick={() => {
            controller.stop()
          }}
        >
          Pause
        </button>
      </div>
      <motion.div className="box" animate={controller} />
    </ComponentContainer>
  )
}

const ComponentContainer = styled.div`
  ${tw`
    py-6
    w-full
  `}

  .controller-btn-box {
    ${tw`
      flex
      items-center
      mb-3
    `}

    button {
      ${tw`
        mr-3
        py-1
        px-3
        font-semibold
        bg-purple-400
        text-gray-700
      `}
    }
  }

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

export default BoxFive
