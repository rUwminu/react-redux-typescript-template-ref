import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { Provider as ReduxProvider } from 'react-redux'
import store from './components/ShoppingCartApp/redux/store'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  split,
  HttpLink,
} from '@apollo/client'
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities'

// Compoents
import { TodoApp, StoreHome } from './components/index'

const App: React.FC = () => {
  const httpLink = new HttpLink({
    //uri: 'https://unshift-scheduler-api.herokuapp.com/graphql',
    uri: `http://localhost:4000/graphql`,
  })

  const wsLink = new WebSocketLink({
    //uri: 'wss://unshift-scheduler-api.herokuapp.com/graphql',
    uri: `ws://localhost:4000/graphql`,
    options: {
      reconnect: true,
      connectionParams: {
        headers: {
          Authorization: `Bearer token`,
        },
      },
    },
  })

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query)
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      )
    },
    wsLink,
    httpLink
  )

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: splitLink,
    credentials: 'include',
  })

  return (
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>
        <MainContainer className='App'>
          <StoreHome />
        </MainContainer>
      </ReduxProvider>
    </ApolloProvider>
  )
}

const MainContainer = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    px-6
    lg:px-0
    w-screen
    h-screen
  `}
`

export default App
