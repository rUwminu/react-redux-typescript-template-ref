import React, { useState, useRef, useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import { useDispatch } from 'react-redux'

// Redux Action
import {
  editTodo,
  deleteTodo,
  doneTodo,
} from './redux/actions-creators/todoActions'

import { Todo } from './model'

type Props = {
  item: Todo
}

const TodoItem: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch()
  const inputRef = useRef<HTMLInputElement>(null)

  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')

  const handleEdit = (e: React.FormEvent, itemId: number) => {
    e.preventDefault()
    dispatch(editTodo(itemId, inputValue))

    setIsEdit(false)
    setInputValue('')
  }

  const handleDelete = (itemId: number) => {
    dispatch(deleteTodo(itemId))
  }

  const handleDone = (itemId: number) => {
    dispatch(doneTodo(itemId))
  }

  useEffect(() => {
    if (isEdit) inputRef.current?.focus()
  }, [isEdit])

  return (
    <CardContainer onSubmit={(e) => handleEdit(e, item.id)}>
      {item.isCompleted ? (
        <s className="title">{item.task}</s>
      ) : isEdit ? (
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          className={`title`}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Edit to..."
          required
        />
      ) : (
        <span className="title">{item.task}</span>
      )}
      <div className="control-btn-box">
        <span className="btn" onClick={() => setIsEdit(!isEdit)}>
          E
        </span>
        <span className="btn" onClick={() => handleDelete(item.id)}>
          D
        </span>
        <span className="btn" onClick={() => handleDone(item.id)}>
          C
        </span>
      </div>
    </CardContainer>
  )
}

const CardContainer = styled.form`
  ${tw`
    flex
    items-center
    justify-between
    mb-1
    p-2
    border-2
    border-gray-400
    rounded-md
  `}

  .title {
    ${tw`
        font-semibold
        text-gray-700
        outline-none
    `}
  }

  .control-btn-box {
    ${tw`
        flex
        items-center
        justify-center
    `}

    .btn {
      ${tw`
        flex
        items-center
        justify-center
        ml-1
        p-1
        w-8
        h-8
        text-sm
        font-semibold
        bg-blue-500
        text-gray-50
        cursor-pointer
        rounded-full

        transition
        duration-200
        ease-in-out
      `}

      &:hover {
        ${tw`
            bg-blue-600
        `}
      }
    }
  }
`

export default TodoItem
