import {
  addNewBooksForUser, CompaniesType,
  makeHairstyle,
  moveUser,
  removeUserBook,
  updBookForUser,
  updCompanyName,
  updCompanyName2,
  upgradeUserLaptop,
  UserType,
  UserWithbooks,
  UserWithCompanies,
  UserWithLaptopType
} from "./10";


test('changedUser', () => {
  const randomUser: UserType = {
    name: 'Kostya',
    hair: 50,
    address: {
      city: 'Nish'
    }
  }

  const updateUser = makeHairstyle(randomUser, 2)

  randomUser.address.city = 'Moscow'

  expect(randomUser.hair).toBe(50)
  expect(updateUser.hair).toBe(25)
  expect(updateUser).not.toBe(randomUser)
  expect(updateUser.address.city).toEqual(randomUser.address.city)
})


test('movedUser', () => {
  const user2: UserWithLaptopType = {
    name: 'Kostya',
    hair: 50,
    address: {
      city: 'Nish',
      house: 12
    },
    laptop: {
      title: 'Zenbook'
    }
  }

  const movedUser = moveUser(user2, 'Moscow')

  expect(user2.laptop).toEqual(movedUser.laptop)
  expect(user2.address).not.toEqual(movedUser.address)
  expect(movedUser.address.city).toBe('Moscow')
})


test('upgradeUserLaptop', () => {
  const user2: UserWithLaptopType = {
    name: 'Kostya',
    hair: 50,
    address: {
      city: 'Nish',
      house: 12
    },
    laptop: {
      title: 'Zenbook'
    }
  }

  const userWithUpgradedLaptop = upgradeUserLaptop(user2, 'Mac')

  expect(user2).not.toBe(userWithUpgradedLaptop)
  expect(user2.address).toEqual(userWithUpgradedLaptop.address)
  expect(user2.laptop).not.toEqual(userWithUpgradedLaptop.laptop)
  expect(userWithUpgradedLaptop.laptop.title).toBe('Mac')
  expect(user2.laptop.title).toBe('Zenbook')

})


test('user with new books', () => {
  const user2: UserWithbooks = {
    name: 'Kostya',
    hair: 50,
    address: {
      city: 'Nish',
      house: 12
    },
    laptop: {
      title: 'Zenbook'
    },
    books: ['js', 'redux','react','html']
  }

  const UserWithNewBooks = addNewBooksForUser(user2, ['ts', 'css'])

  expect(user2).not.toBe(UserWithNewBooks)
  expect(user2.address).toBe(UserWithNewBooks.address)
  expect(user2.laptop).toBe(UserWithNewBooks.laptop)
  expect(user2.books).not.toBe(UserWithNewBooks.books)
  expect(UserWithNewBooks.books[4]).toBe('ts')
  expect(UserWithNewBooks.books[5]).toBe('css')
  expect(UserWithNewBooks.books.length).toBe(6)
  expect(user2.books.length).toBe(4)

})


test('update some book', () => {
  const user2: UserWithbooks = {
    name: 'Kostya',
    hair: 50,
    address: {
      city: 'Nish',
      house: 12
    },
    laptop: {
      title: 'Zenbook'
    },
    books: ['js', 'redux','react','html']
  }

  const UserWithNewBook = updBookForUser(user2, 'js', 'ts')

  expect(user2).not.toBe(UserWithNewBook)
  expect(user2.address).toBe(UserWithNewBook.address)
  expect(user2.laptop).toBe(UserWithNewBook.laptop)
  expect(user2.books).not.toBe(UserWithNewBook.books)
  expect(user2.books[0]).toBe('js')
  expect(UserWithNewBook.books[0]).toBe('ts')
})


test('remove some book', () => {
  const user2: UserWithbooks = {
    name: 'Kostya',
    hair: 50,
    address: {
      city: 'Nish',
      house: 12
    },
    laptop: {
      title: 'Zenbook'
    },
    books: ['js', 'redux','react','html']
  }

  const UserWithoutBook = removeUserBook(user2, 'js')

  expect(user2).not.toBe(UserWithoutBook)
  expect(user2.address).toBe(UserWithoutBook.address)
  expect(user2.laptop).toBe(UserWithoutBook.laptop)
  expect(user2.books).not.toBe(UserWithoutBook.books)
  expect(UserWithoutBook.books[0]).toBe('redux')
  expect(UserWithoutBook.books.length).toBe(3)
})


test('change company name', () => {
  const user2: UserWithCompanies = {
    name: 'Kostya',
    hair: 50,
    address: {
      city: 'Nish',
      house: 12
    },
    laptop: {
      title: 'Zenbook'
    },
    technologies: [
      {id: 1, title: 'ЕПАМ'},
      {id: 2, title: 'it-incubator'}
    ]
  }

  const userWithCorrectCompany = updCompanyName(user2, 1, 'EPAM')

  expect(user2).not.toBe(userWithCorrectCompany)
  expect(user2.address).toBe(userWithCorrectCompany.address)
  expect(user2.laptop).toBe(userWithCorrectCompany.laptop)
  expect(user2.technologies).not.toBe(userWithCorrectCompany.technologies)
  expect(userWithCorrectCompany.technologies[0].title).toBe('EPAM')

})


test('change company name', () => {

  const companies: CompaniesType = {
    'Artyom': [{id: 1, title: 'Yandex'}, {id: 2, title: 'LinguaLeo'}],
    'Kostya': [{id: 1, title: 'Lefeb'}, {id: 2, title: '1C'}]
  }


  const changedCompanies = updCompanyName2(companies, 'Kostya', 1, 'EPAM')

  expect(companies['Kostya'][0].title).toBe('Lefeb')
  expect(changedCompanies['Kostya'][0].title).toBe('EPAM')
  expect(companies['Kostya']).not.toBe(changedCompanies['Kostya'])

})