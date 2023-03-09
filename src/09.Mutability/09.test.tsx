
// @ts-ignore
function increaseAge(u:UserTypeTest) {
  u.age = u.age + 1;
}

type UserTypeTest = {
  name: string
  age: number
  address: {title: string}
}

test('reference type test', () => {

  const user15: UserTypeTest = {
    name: 'Kostya',
    age: 26,
    address: {title: 'Moscow'}
  }

  increaseAge(user15);

  expect(user15.age).toBe(27)

  const superman = user15

  superman.age = 1000;

  expect(superman.age).toBe(1000)

})

test('array reference test', () => {

  const users = [
    {
      name: 'Kostya',
      age: 26
    },
    {
      name: 'Artem',
      age: 30
    }
  ]

  let admins = users

  admins.push({name: 'Misha', age: 21})

  expect(users[2]).toEqual({name: 'Misha', age: 21})

})

test('value type test', () => {

  let usersCount = 100;

  let adminsCount = usersCount

  adminsCount = usersCount + 1
  adminsCount++

  expect(adminsCount).toBe(102)
})

test('reference type test2', () => {

  const address = {
    title: 'Moscow'
  }

  const user1: UserTypeTest = {
    name: 'Kostya',
    age: 26,
    address
  }

  let addr = user1.address

  const user2: UserTypeTest = {
    name: 'Artem',
    age: 30,
    address
  }

  address.title = 'Minsk'

  expect(user1.address).toBe(addr)
  expect(user2.address.title).toBe('Minsk')

})

test('reference type array test', () => {

  const address = {
    title: 'Moscow'
  }

  const user1: UserTypeTest = {
    name: 'Kostya',
    age: 26,
    address
  }

  const user2: UserTypeTest = {
    name: 'Artem',
    age: 30,
    address
  }

  const users = [user1, user2, {name: 'Sasha', age: 25, address}]

  const admins = [user1, user2]

  expect(users[0].name).toBe('Kostya')
  expect(user1.name).toBe('Kostya')
})

test('sort array test', () => {

  const letters = ['c','d','a','z','e']

  sortFn(letters)

  expect(letters).toEqual(['c','d','a','z','e'])
})

function sortFn(letters:Array<string>) {
  const copy = [...letters].sort()
}