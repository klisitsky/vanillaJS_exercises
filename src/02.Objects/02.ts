
export type CityType = {
  title: string
  houses: Array<HousesType>
  governmentBuildings: Array<governmentBuildingsType>
  citizensNumber: number
}

export type HousesType = {
  id?: number
  builtAt: number
  repaired: boolean
  address: AddressType
}

export type AddressType = {
  number?: number
  street: StreetTitleType
}

export type StreetTitleType = {
  title: string
}

export type governmentBuildingsType = {
  type: string
  budget: number
  staffCount: number
  address: AddressType
}
