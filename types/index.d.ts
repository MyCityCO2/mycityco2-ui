declare global {
  interface City {
    cityIdentifier?: number
    name?: string
    slug?: string
  }

  interface DashboardVariables {
    cityId: number
    year: number
  }

  interface CityData {
    city: {
      id: number
      cityIdentifier: number
      name: string
      minYear: number
      population: number
      zipCodes: number[]
      country: {
        code: string
        name: string
      }
      co2EmissionByCategory: {
        name: string
        sum: number
        journalIdName: string
      }[]
      co2EmissionsEvolution: number
      co2EmissionsEvolutionByJournal: {
        name: string
        sum: number
      }[]
      co2EmissionsEvolutionByJournalYearly: {
        name: string
        sum: number
        year: number
      }[]
      co2EmissionsPerHab: number
    }
  }
}

export { City, DashboardVariables, CityData }
