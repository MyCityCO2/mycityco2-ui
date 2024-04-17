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

  interface Dataset {
    label: string
    type: string
    backgroundColor?: string
    data: { x: number; y: number }[]
    borderWidth?: number
    fill?: boolean
    borderColor?: string
    borderDash?: number[]
    pointStyle?: boolean
    pointRadius?: number
    pointHitRadius?: number
  }

  interface ImportMetaEnv {
    VITE_BASE_URL: string
  }
}

export { City, DashboardVariables, CityData, ImportMetaEnv }
