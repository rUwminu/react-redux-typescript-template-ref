import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import Parallex from './Parallex'

const ScrollParallex = () => {
  return (
    <PageContainer>
      <SectionContainer>
        <div className="box" />
        <div className="absolute-box">
          <Parallex>
            <div className="floating-box">Hello</div>
          </Parallex>
        </div>
      </SectionContainer>
      <SectionContainer>
        <div className="box" />
        <div className="absolute-box">
          <Parallex>
            <div className="floating-box">Hello</div>
          </Parallex>
        </div>
      </SectionContainer>
      <SectionContainer>
        <div className="box" />
        <div className="absolute-box">
          <Parallex>
            <div className="floating-box">Hello</div>
          </Parallex>
        </div>
      </SectionContainer>
    </PageContainer>
  )
}

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
  `}
`

const SectionContainer = styled.div`
  ${tw`
    relative
    flex
    items-center
    justify-center
    h-screen
    w-full
    overflow-hidden
  `}

  .box {
    ${tw`
      w-full
      max-w-6xl
      h-full
      max-h-[36rem]
      bg-purple-400
      rounded-md
    `}
  }

  .absolute-box {
    ${tw`
      absolute
      top-10
      left-[40%]
      flex
      items-center
      justify-center
      w-full
      max-w-6xl
      h-full
      max-h-[36rem]
      ring-1
    `}

    .floating-box {
      ${tw`
        w-full
        h-[90%]
        bg-red-400
      `}
    }
  }
`

export default ScrollParallex
