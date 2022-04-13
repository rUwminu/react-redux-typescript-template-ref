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

const ListItem: React.FC<Props> = ({ movie }) => {
  return (
    <ListContainer
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>{movie.title}</h2>
      <span>{movie.type}</span>
    </ListContainer>
  )
}

const ListContainer = styled(motion.div)`
  ${tw`
    flex
    items-center
    justify-between
    py-2
    px-4
    mb-2
    ring-1
    ring-gray-400
    rounded-md
  `}
`

export default ListItem
