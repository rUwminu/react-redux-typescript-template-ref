import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <NavContainer>
      <div className='inner-container'>
        <h1>Logo</h1>
        <div className='nav-links-container'>
          <Link to='/' className='nav-items'>
            Home
          </Link>
          <Link to='/about' className='nav-items'>
            About
          </Link>
        </div>
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.div`
  ${tw`
    fixed
    top-0
    left-0
    flex
    items-center
    justify-center
    w-full
  `}

  .inner-container {
    ${tw`
        flex
        items-center
        justify-between
        py-2
        w-full
        max-w-6xl
    `}

    h1 {
      ${tw`
        text-2xl
        font-semibold
      `}
    }

    .nav-links-container {
      ${tw`
        flex
        items-center
      `}

      .nav-items {
        ${tw`
            px-4
            font-semibold
            text-gray-700
        `}
      }
    }
  }
`

export default Header
