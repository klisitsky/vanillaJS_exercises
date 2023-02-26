
type UserType = {
  [key:string]: {id: number, name: string}
}

const usersObj: UserType = {
  '32': {id: 32, name: 'Павел'},
  '112456': {id: 112456, name: 'Катя'},
  '43546': {id: 43546, name: 'Костя'},
  '1': {id: 1, name: 'Миша'},
}

const user1 = {id: 54, name: 'Вжух'}
users[user1.id] = user1

delete users[32]
users[1].name = "Михаил"

