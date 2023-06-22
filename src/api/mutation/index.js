import gql from 'graphql-tag'

export const MUTATION_LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    authLogin(username: $username, password: $password) {
      ... on LoginSuccess {
        accessToken
        refreshToken
      }
      ... on LoginError {
        message
      }
    }
  }
`
