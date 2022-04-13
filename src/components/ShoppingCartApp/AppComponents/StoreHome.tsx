import React, { useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { gql, useLazyQuery, useMutation } from '@apollo/client'

import StoreProduct from './StoreProducts'
import StoreCart from './StoreCart'
import { log } from 'console'

interface Author {
  _id: string
  name: string
}

interface BookData {
  _id: string
  title: string
  isbn: boolean
  author: Author
}

interface BooksInventory {
  getAllBooks: Array<BookData>
}

const StoreHome: React.FC = () => {
  const [getAllBooksFc, { loading, data }] =
    useLazyQuery<BooksInventory>(GET_ALL_BOOK)

  const [loginUserFc, { data: userData }] = useLazyQuery(LOGIN_USER)

  const [getMyself, { data: myData }] = useLazyQuery(GET_MYSELF)

  const HandleGetBooks = () => {
    //getAllBooksFc()
    getMyself()
  }

  const HandleLoginUser = () => {
    loginUserFc({
      variables: {
        input: {
          email: 'john@email.com',
          password: '123',
        },
      },
    })
  }

  useEffect(() => {
    if (myData) {
      console.log(myData)
    }
  }, [myData])

  useEffect(() => {
    if (userData) {
      console.log(userData)
    }
  }, [userData])

  return (
    <MainSection>
      <StoreProduct />
      <StoreCart />
      <div onClick={() => HandleLoginUser()}>Try Login</div>
      <div onClick={() => HandleGetBooks()}>Myself</div>
    </MainSection>
  )
}

const GET_ALL_BOOK = gql`
  {
    getAllBooks {
      _id
      title
      isbn
      author {
        _id
        name
      }
    }
  }
`

const LOGIN_USER = gql`
  query loginUser($input: LoginInput!) {
    loginUser(input: $input) {
      _id
      name
      email
    }
  }
`

const GET_MYSELF = gql`
  {
    me {
      _id
      name
      email
    }
  }
`

const MainSection = styled.div`
  ${tw`
    flex
    items-start
    justify-between
    py-20
    w-full
    h-full
    max-w-6xl
  `}
`

export default StoreHome
