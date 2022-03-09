import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import { Header } from './components/index'

function App() {
  return (
    <MainContainer className="App">
      <Header />
    </MainContainer>
  )
}

const MainContainer = styled.div`
  ${tw`
    flex
    items-start
    justify-start
    w-screen
    h-screen
    bg-gray-700
  `}
`

export default App
