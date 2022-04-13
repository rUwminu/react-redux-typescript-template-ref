import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

// Child components
import FancyCard from './FancyCard/FancyCard'

const FancyShakeCard: React.FC = () => {
  return (
    <SectionContainer>
      <GirdContainer>
        <FancyCard height={6} isUnset={false} />
        <FancyCard height={12} isUnset={true}  />
        <FancyCard height={12} isUnset={false}  />
        <FancyCard height={6} isUnset={false}  />
      </GirdContainer>
    </SectionContainer>
  )
}

const SectionContainer = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    w-full
    h-screen
  `}
`

const GirdContainer = styled.div`
  ${tw`
    mx-auto
    grid
    grid-cols-4
    gap-3
  `}
`

export default FancyShakeCard
