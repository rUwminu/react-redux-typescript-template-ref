import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

// Child components
import BoxOne from './1.Box/BoxOne'
import BoxTwo from './2.Box/BoxTwo'
import BoxThree from './3.Box/BoxThree'
import BoxFour from './4.box/BoxFour'
import BoxFive from './5.box/BoxFive'

const lessonOne = () => {
  return (
    <SectionContainer>
      <BoxOne />
      <BoxTwo />
      <BoxThree />
      <BoxFour />
      <BoxFive />
    </SectionContainer>
  )
}

const SectionContainer = styled.div`
  ${tw`
    flex
    flex-col
    mx-auto
    px-6
    w-full
    max-w-6xl
  `}
`

export default lessonOne
