import gql from 'graphql-tag'

export const QUERY_ME = gql`
  query getMe {
    authMe {
      id
      firstName
      lastName
      username
      email
    }
  }
`
