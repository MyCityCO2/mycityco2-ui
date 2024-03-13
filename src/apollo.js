import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client/core'
import { createUploadLink } from 'apollo-upload-client'

const getHeaders = () => {
  const headers = {}
  const token = null
  if (token) headers['Authorization'] = `Bearer ${token}`
  return headers
}

const createLink = () => {
  const httpLink = createUploadLink({
    uri: import.meta.env.VITE_API_URL,
    // TODO: Remove this for prod
    credentials: 'omit',
  })

  const authLink = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        ...getHeaders()
      }
    }))
    return forward(operation)
  })

  return ApolloLink.from([authLink, httpLink])
}

const apolloClient = new ApolloClient({
  link: createLink(),
  cache: new InMemoryCache()
})

export { apolloClient }
