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

export const MUTATION_CONTACT = gql`
  mutation contact($contactData: ContactInput!) {
    contact(contactData: $contactData)
  }
`
