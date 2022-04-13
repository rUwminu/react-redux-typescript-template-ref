import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

// Get the structure of combined reducer state
import { State } from './redux/reducers/index'

// Child components
import TodoInput from './TodoInput'
import TodoList from './TodoList'

const TodoApp: React.FC = () => {
  const todoInfo = useSelector((state: State) => state.todoInfo)
  const { todoList } = todoInfo

  return (
    <SectionContainer>
      <h1>TodoList</h1>
      <div className='box-container'>
        <TodoInput />
        <TodoList todos={todoList} />
      </div>
    </SectionContainer>
  )
}

const SectionContainer = styled.div`
  ${tw`
    w-full
    max-w-4xl
  `}

  h1 {
    ${tw`
        text-2xl
        md:text-3xl
        font-semibold
        text-gray-700
    `}
  }

  .box-container {
    ${tw`
        flex
        flex-col
        items-start
        justify-center
    `}
  }

  // Utils style
  .btn {
    ${tw`
        font-semibold
        cursor-pointer

        transition
        duration-200
        ease-out
    `}
  }
`

export default TodoApp
