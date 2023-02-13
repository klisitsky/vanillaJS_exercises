import {governmentBuildingsType, HousesType} from "../02.Objects/02";

export const getStreetNameEveryBuilding = (buildings: Array<governmentBuildingsType>) => {
  return buildings.map(b => b.address.street.title.split(' ')[0])
}

export const getStreetNameEveryHouse = (houses: Array<HousesType>) => {
  return houses.map(h => h.address.street.title.split(' ')[0])
}