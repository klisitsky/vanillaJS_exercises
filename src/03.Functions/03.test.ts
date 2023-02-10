import {CityType} from "../02.Objects/02";
import {addMoneyBudget, repairHouse, toFireStaff, toHireStaff} from "./03";


let city: CityType

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

test('budget should be changed for HOSPITAL', ()=> {

  addMoneyBudget(city.governmentBuildings[0], 100000)

  expect(city.governmentBuildings[0].budget).toBe(300000)
})

test('budget should be changed for FIRE-STATION', ()=> {

  addMoneyBudget(city.governmentBuildings[1], -100000)

  expect(city.governmentBuildings[1].budget).toBe(400000)
})

test('Houses should be repaired', () => {
  repairHouse(city.houses[1])

  expect(city.houses[1]).toBeTruthy()
})

test('staff should be increased', () => {
  toFireStaff(city.governmentBuildings[0], 20)

  expect(city.governmentBuildings[0].staffCount).toBe(180)
})

test('staff should be repared', () => {
  toHireStaff(city.governmentBuildings[0], 20)

  expect(city.governmentBuildings[0].staffCount).toBe(220)
})