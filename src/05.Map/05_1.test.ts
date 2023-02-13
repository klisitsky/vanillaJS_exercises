import {getGreetings, PeopleType} from "./05_01";

let people:Array<PeopleType>;

beforeEach(()=> {
  people = [
    {name: 'Andrew Ivanov', age: 34},
    {name: 'Alex Petrov', age: 26},
    {name: 'Pavel Sidorov', age: 18},
  ]
})

test('should get array of greeting message for every student',() => {
  const messages = getGreetings(people);

  expect(messages.length).toBe(3)
  expect(messages[0]).toBe('Hello Andrew. Welcome to IT-Inc!')
  expect(messages[1]).toBe('Hello Alex. Welcome to IT-Inc!')
  expect(messages[2]).toBe('Hello Pavel. Welcome to IT-Inc!')

})