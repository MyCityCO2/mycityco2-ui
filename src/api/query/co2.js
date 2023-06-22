import gql from 'graphql-tag'

export const QUERY_CITIES = gql`
  query getCities($search: String!) {
    cities(search: $search) {
      id
      name
      zipCode
    }
  }
`

export const QUERY_CITY_DASHBOARD = gql`
  query getCityDashboard($cityId: Int!, $year: Int!) {
    city(cityId: $cityId) {
      co2EmissionByCategory {
        name
        sum
      }
      co2EmissionsEvolution
      co2EmissionsEvolutionByJournal(year: $year) {
        name
        sum
      }
      co2EmissionsEvolutionByJournalYearly {
        name
        sum
        year
      }
      co2EmissionsPerHab(year: $year)
      id
      name
      population
      zipCode
    }
  }
`
