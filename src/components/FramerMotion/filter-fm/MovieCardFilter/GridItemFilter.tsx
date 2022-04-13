import React, { useState, useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

import MovieFilter from './MovieFilter/MovieFilter'
import MovieCard from './MovieCard/MovieCard'

type MovieInfo = {
  id: number
  title: string
  type: string
}

type MovieList = Array<MovieInfo>

const MovieData: MovieList = [
  { id: 1, title: 'Super Boy', type: 'comedy' },
  { id: 2, title: 'Bobo Ponny Tail', type: 'comedy' },
  { id: 3, title: 'Spider Cat', type: 'action' },
  { id: 4, title: 'Iron Gay', type: 'comedy' },
  { id: 5, title: 'Mr Taco & Miss Bell', type: 'action' },
  { id: 6, title: 'I am Joker', type: 'action' },
  { id: 7, title: 'Super Fast Snail', type: 'action' },
  { id: 8, title: 'John Wick The Not That Guy', type: 'comedy' },
  { id: 9, title: 'Super Boy 2', type: 'comedy' },
  { id: 10, title: 'Super Boy 3', type: 'comedy' },
  { id: 11, title: 'Wich Hunter', type: 'action' },
  { id: 12, title: 'Smach Taker', type: 'comedy' },
  { id: 13, title: 'Bommer John', type: 'comedy' },
  { id: 14, title: 'Hell Wonderer', type: 'action' },
]

const GridItemFilter = () => {
  const [filterType, setFilterType] = useState<string>('all')
  const [filteredList, setFilteredList] = useState<MovieList>([])

  const handleFilterMovieList = () => {
    if (filterType === 'all') {
      setFilteredList(MovieData)
      return
    } else {
      const tempArray: MovieList = MovieData.filter(
        (x) => x.type === filterType
      )
      setFilteredList(tempArray)
      return
    }
  }

  useEffect(() => {
    handleFilterMovieList()
  }, [filterType])

  return (
    <SectionContainer>
      <MovieFilter filterType={filterType} setFilterType={setFilterType} />
      <motion.div className="grid-container" layout>
        <AnimatePresence>
          {filteredList &&
            filteredList.map((x) => <MovieCard key={x.id} movie={x} />)}
        </AnimatePresence>
      </motion.div>
    </SectionContainer>
  )
}

const SectionContainer = styled.div`
  ${tw`
    flex
    flex-col
    mx-auto
    px-6
    h-full
    w-full
    max-w-6xl
  `}

  .grid-container {
    ${tw`
        w-full
        grid
        gap-4
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-5
    `}
  }
`

export default GridItemFilter
