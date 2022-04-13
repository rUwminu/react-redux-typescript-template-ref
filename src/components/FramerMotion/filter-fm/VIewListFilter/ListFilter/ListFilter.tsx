import React, { Dispatch, SetStateAction } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

interface Props {
  filterType: string
  setFilterType: Dispatch<SetStateAction<string>>
}

const ListFilter: React.FC<Props> = ({ filterType, setFilterType }) => {
  const handleTypeFilter = (type: string) => {
    setFilterType(type)
  }

  return (
    <FilterContainer>
      <div
        className={`btn ${filterType === 'all' && 'active'}`}
        onClick={() => handleTypeFilter('all')}
      >
        All
      </div>
      <div
        className={`btn ${filterType === 'comedy' && 'active'}`}
        onClick={() => handleTypeFilter('comedy')}
      >
        Comedy
      </div>
      <div
        className={`btn ${filterType === 'action' && 'active'}`}
        onClick={() => handleTypeFilter('action')}
      >
        Action
      </div>
    </FilterContainer>
  )
}

const FilterContainer = styled.div`
  ${tw`
    flex
    items-center
    justify-start
    py-2
  `}

  .btn {
    ${tw`
        flex
        items-center
        justify-center
        mr-3
        py-1
        px-4
        font-semibold
        ring-1
        ring-gray-700
        cursor-pointer
        rounded-2xl

        transition
        duration-200
        ease-in-out
    `}

    &.active {
      ${tw`
        bg-blue-700
        text-gray-100
        ring-blue-700
      `}
    }
  }
`

export default ListFilter
