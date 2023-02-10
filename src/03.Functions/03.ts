import {governmentBuildingsType, HousesType} from "../02.Objects/02";


export const addMoneyBudget = (building: governmentBuildingsType, budget: number) => {
  building.budget += budget;
}

export const repairHouse = (house: HousesType) => {
  house.repaired = true;
}

export const toFireStaff = (building: governmentBuildingsType, firedCountStaff: number) => {
  building.staffCount -= firedCountStaff;
}

export const toHireStaff = (building: governmentBuildingsType, hiredCountStaff: number) => {
  building.staffCount += hiredCountStaff;
}