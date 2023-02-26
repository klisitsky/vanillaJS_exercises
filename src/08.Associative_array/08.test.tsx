
let users: UserType

beforeEach(() => {
  users = {
    '32': {id: 32, name: 'Павел'},
    '112456': {id: 112456, name: 'Катя'},
    '43546': {id: 43546, name: 'Костя'},
    '1': {id: 1, name: 'Миша'},
  }
})

test('should update user name', () => {

  users[43546].name = 'Екатерина'

  expect(users[43546].name).toBe('Екатерина')
})

test('delete user', () => {

  delete users[43546]

  expect(users[43546]).toBeUndefined()
})