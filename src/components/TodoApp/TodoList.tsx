import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

// Model
import { Todo } from './model'

// Components
import TodoItem from './TodoItem'

interface Props {
  todos: Todo[]
}

const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <LsContainer>
      {todos && todos.map((item) => <TodoItem key={item.id} item={item} />)}
    </LsContainer>
  )
}

const LsContainer = styled.div`
  ${tw`
    flex-grow
    flex
    flex-col
    w-full
    min-h-[20rem]
    max-h-[40rem]
  `}
`

const TaskCard = styled.div`
  ${tw``}
`

export default TodoList
