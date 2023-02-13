
export type PeopleType = {
  name: string
  age: number
}


export const getGreetings = (students:Array<PeopleType>) => {
  return students.map(st => `Hello ${st.name.split(' ')[0]}. Welcome to IT-Inc!`)
}