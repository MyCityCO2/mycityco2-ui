import gql from 'graphql-tag'

export const QUERY_CITIES = gql`
  query getCities($search: String!) {
    cities(search: $search) {
      id
      name
      cityIdentifier
      zipCodes
    }
  }
`

export const QUERY_CITY_DASHBOARD = gql`
  query getCityDashboard($cityId: Int!, $year: Int!) {
    city(cityIdentifier: $cityId) {
      id
      cityIdentifier
      name
      minYear
      population
      zipCodes
      co2EmissionByCategory(year: $year) {
        name
        sum @roundFloat
      }
      co2EmissionsEvolution
      co2EmissionsEvolutionByJournal(year: $year) {
        name
        sum @roundFloat
      }
      co2EmissionsEvolutionByJournalYearly {
        name
        sum @roundFloat
        year
      }
      co2EmissionsPerHab(year: $year) @roundFloat
    }
  }
`
