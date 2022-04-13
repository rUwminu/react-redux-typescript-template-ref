import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { motion } from 'framer-motion'

type MovieInfo = {
  id: number
  title: string
  type: string
}

interface Props {
  movie: MovieInfo
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  return (
    <CardContainer
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>{movie.title}</h2>
    </CardContainer>
  )
}

const CardContainer = styled(motion.div)`
  ${tw`
    flex
    items-end
    p-3
    h-56
    bg-pink-300
    rounded-md
  `}

  h2 {
    ${tw`
        font-semibold
        text-gray-700
    `}
  }
`

export default MovieCard
