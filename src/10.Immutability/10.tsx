export type UserType = {
  name: string
  hair: number
  address: {
    city: string
    house?: number
  }
}

export type LaptopType = {
  title: string
}

export type UserWithLaptopType = UserType & {
  laptop: LaptopType
}

export type UserWithbooks = UserWithLaptopType & {
  books: Array<string>
}

export type UserWithCompanies = UserWithLaptopType & {
  technologies: Array<{id: number, title: string }>
}

export type CompaniesType = {
  [key: string]: Array<{id: number, title: string}>
}

export const makeHairstyle = (u: UserType, power: number) => ({
    ...u,
    hair: u.hair / power
  })

export const moveUser = (u: UserWithLaptopType, city: string
) => ({
  ...u,
  address: {
    ...u.address,
    city
  }
})

export const upgradeUserLaptop = (u: UserWithLaptopType, model: string
) => ({
  ...u,
  laptop: {
    ...u.laptop,
    title: model
  }
})

export const addNewBooksForUser = (u: UserWithbooks, newBooks: Array<string>
) => ({
  ...u,
  books: [
    ...u.books,
    ...newBooks
  ]
})

export const updBookForUser = (u: UserWithbooks,
                               oldBook: string,
                               newBook: string
) => ({
  ...u,
  books: u.books.map(b => b === oldBook ? newBook : b)
})

export const removeUserBook = (u: UserWithbooks, book: string) => ({
  ...u,
  books: u.books.filter(b => b !== book)
})

export const updCompanyName = (u: UserWithCompanies,
                               companyId: number,
                               newTitle: string) => ({
  ...u,
  technologies: u.technologies.map(c => c.id === companyId ? {...c, title: newTitle} : c)
})


export const updCompanyName2 = (u: CompaniesType,
                               userName: string,
                               companyId: number,
                               newTitle: string) => ({
  ...u,
  [userName]:u[userName].map(c => c.id == companyId ? {...c, title: newTitle} : c)
})