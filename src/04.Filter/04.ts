import {CityType, governmentBuildingsType} from "../02.Objects/02";

type CourseType = {
  title: string
  price: number
}

export const courses: Array<CourseType> = [
  {title: 'CSS', price: 110},
  {title: 'JS', price: 200},
  {title: 'REACT', price: 150},
]


export const demolishHousesOnTheStreet = (city: CityType, strName: string) => {
  city.houses = city.houses.filter(house => house.address.street.title === strName)
}

export const getBuildingsWithStaffCountGreaterThen = (buildings: Array<governmentBuildingsType>, staffCount: number) => {
  return buildings.filter(b => b.staffCount > staffCount)
}