import {CityType} from '../02.Objects/02'
import {getStreetNameEveryBuilding, getStreetNameEveryHouse} from "./05_2";

let city: CityType;

beforeEach(() => {
  city = {
    title: "New York",
    houses: [
      {
        builtAt: 2012,
        repaired: false,
        address: {
          number: 100,
          street : {title: "White street"}
        }
      },
      {
        builtAt: 2008,
        repaired: false,
        address: {
          number: 100,
          street : {title: "Happy street"}
        }
      },
      {
        builtAt: 2020,
        repaired: false,
        address: {
          number: 101,
          street : {title: "White street"}
        }
      },
    ],
    governmentBuildings: [
      {
        type: 'Hospital',
        budget: 200000,
        staffCount: 200,
        address: {
          street: {title: "Central street"}
        }
      },
      {
        type: 'Fire-Station',
        budget: 500000,
        staffCount: 1000,
        address: {
          street: {title: "South street"}
        }
      }
    ],
    citizensNumber: 100000,
  }
})

test('should get street names every buildings', () => {

  const streetNames = getStreetNameEveryBuilding(city.governmentBuildings)

  expect(streetNames.length).toBe(2);
  expect(streetNames[0]).toBe('Central')
  expect(streetNames[1]).toBe('South')
})

test('should get street names every house', () => {

  const streetNames = getStreetNameEveryHouse(city.houses)

  expect(streetNames.length).toBe(3);
  expect(streetNames[0]).toBe('White')
  expect(streetNames[1]).toBe('Happy')
  expect(streetNames[2]).toBe('White')
})