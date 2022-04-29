import React, { useState, useRef } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import { ImageConfig } from '../config'

interface DropFileInputProps {
  onFileChange: Function
}

const DropFileInput: React.FC<DropFileInputProps> = ({ onFileChange }) => {
  const wrapperRef = useRef<HTMLInputElement | any>(null)

  const [fileList, setFileList] = useState<File[]>([])

  const onDragEnter = () => {
    wrapperRef.current.classList.add('dragover')
  }

  const onDragLeave = () => {
    wrapperRef.current.classList.remove('dragover')
  }

  const onDrop = () => {
    wrapperRef.current.classList.remove('dragover')
  }

  const onFileDrop = (e: {
    target: {
      files: FileList | null
    }
  }) => {
    const newFile = e.target.files ? e.target.files[0] : null

    if (newFile) {
      const updatedList = [...fileList, newFile]
      setFileList(updatedList)
    }
  }

  const fileRemove = (file: File) => {
    const updatedList = [...fileList]
    updatedList.splice(fileList.indexOf(file), 1)
    setFileList(updatedList)
    onFileChange(updatedList)
  }

  return (
    <MainContainer>
      <div
        className='drop-file-box'
        ref={wrapperRef}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className='drop-file-label'>
          <p>Drag & Drop your files here</p>
        </div>
        <input
          className='drop-file-input'
          type='file'
          value=''
          onChange={onFileDrop}
        />
      </div>
      {fileList.length > 0 && (
        <div className='drop-file-preview'>
          {fileList.map((file, idx) => (
            <div key={idx} className='drop-file-item'>
              <img
                src={
                  ImageConfig[
                    file.type.split('/')[1] as keyof typeof ImageConfig
                  ] || ImageConfig['default']
                }
                className='drop-file-item-img'
              />
              <div className='drop-file-item-info-box'>
                <p>{file.name}</p>
                <p>{file.size} B</p>
              </div>
              <span
                className='drop-file-item-remove'
                onClick={() => fileRemove(file)}
              >
                x
              </span>
            </div>
          ))}
        </div>
      )}
    </MainContainer>
  )
}

const MainContainer = styled.div`
  ${tw`
    flex
    flex-col
    items-start
    justify-start
    w-full
  `}

  .drop-file-box {
    ${tw`
        relative
        flex
        items-center
        justify-center
        w-full
        min-h-[35vh]
        border-2
        border-dashed
        border-gray-500
        rounded-lg

        transition
        duration-200
        ease-in-out
    `}

    &:hover,
    &.dragover {
      ${tw`
        opacity-30
        shadow-xl
    `}
    }
  }

  .drop-file-label {
    ${tw`
        text-lg
        md:text-2xl
        font-semibold
        text-gray-600
    `}
  }

  .drop-file-input {
    ${tw`
        absolute
        top-0
        left-0
        w-full
        h-full
        opacity-0
        cursor-pointer

        transition
        duration-200
        ease-in-out
    `}
  }

  .drop-file-preview {
    ${tw`
        flex
        flex-col
        py-4
        w-full
    `}

    .drop-file-item {
      ${tw`
        flex
        w-full
        mb-3
        p-4
        bg-gray-200
        rounded-lg
      `}

      .drop-file-item-img {
        ${tw`
            w-14
            h-14
        `}
      }

      .drop-file-item-info-box {
        ${tw`
            flex-grow
            px-4
        `}

        p {
          ${tw`
            font-semibold
            text-gray-900
          `}
        }
      }

      .drop-file-item-remove {
        ${tw`
            flex
            items-center
            justify-center
            w-6
            h-6
            text-xl
            font-semibold
            cursor-pointer
        `}
      }
    }
  }
`

export default DropFileInput
