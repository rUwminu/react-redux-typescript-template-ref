import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import {
  Header,
  LessonOne,
  GridItemFilter,
  ListItemFilter,
  ScrollReveal,
  ScrollParallex,
  FancyShakeCard,
} from './components/index'

function App() {
  return (
    <MainContainer className='App'>
      <FancyShakeCard />
    </MainContainer>
  )
}

const MainContainer = styled.div`
  ${tw`
    flex
    items-start
    justify-start
    overflow-x-hidden
    scrollbar-hide
  `}
`

export default App
