import React, { useState } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

// Model
import { Todo } from './model'

// Redux Action
import { addTodo } from './redux/actions-creators/todoActions'

const TodoInput: React.FC = () => {
  const dispatch = useDispatch()

  const [inputValue, setInputValue] = useState<string>('')

  const handleAddTask = () => {
    const newTask: Todo = {
      id: Date.now(),
      task: inputValue,
      isCompleted: false,
    }

    dispatch(addTodo(newTask))
  }

  return (
    <InputContainer>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Task Todo"
      />
      <div className="add-btn btn" onClick={handleAddTask}>
        Add
      </div>
    </InputContainer>
  )
}

const InputContainer = styled.div`
  ${tw`
    relative
    mb-2
    w-full
  `}

  input {
    ${tw`
        pl-3
        pr-12
        h-12
        w-full
        font-semibold
        text-gray-900
        rounded-3xl
        border-2
        border-gray-400
    `}

    &:focus {
      ${tw`
        outline-none
      `}
    }
  }

  .add-btn {
    ${tw`
        absolute
        right-1
        top-1/2
        flex
        items-center
        justify-center
        w-10
        h-10
        text-sm
        md:text-base
        text-gray-50
        bg-blue-500
        border-2
        border-gray-400
        rounded-3xl
    `}
    transform: translateY(-50%);

    &:hover {
      ${tw`
        bg-blue-600
        shadow-xl
      `}
    }
  }
`

export default TodoInput
