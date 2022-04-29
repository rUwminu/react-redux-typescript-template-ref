import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

// Child Components
import DropFileInput from './ChildComponents/DropFile'

const DragDrop: React.FC = () => {
  const onFileChange = (files: File[]) => {
    console.log(files)
  }

  return (
    <MainContainer>
      <h2 className='box-header'>Upload Your File Here</h2>
      <DropFileInput onFileChange={(files: File[]) => onFileChange(files)} />
    </MainContainer>
  )
}

const MainContainer = styled.div`
  ${tw`
    w-full
    max-w-4xl
  `}
`

export default DragDrop
