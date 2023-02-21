
type ManPropsType = {
  name: string
  age: number
  lessons: Array<LessonType>
  address: AddressType
}
type LessonType = {
  title: number
}
type AddressType = {
  street: StreetType
}
type StreetType = {
  title: string
}

let props: ManPropsType

beforeEach(() => {
  props = {
    name: 'Petr',
    age: 34,
    lessons: [{title: 1}, {title: 2}, {title: 3}],
    address: {
      street: {
        title: "Wow str"
      }
    }
  }
})

test('', () => {
  const {age, lessons} = props
  const {title} = props.address.street

  const a = props.age
  const l = props.lessons

  expect(age).toBe(34)
  expect(lessons.length).toBe(3)

  expect(a).toBe(34)
  expect(l.length).toBe(3)
  expect(title).toBe('Wow str')
})

test('', () => {

  const l1 = props.lessons[0]
  const l2 = props.lessons[1]

  // const [ls1, ls2] = props.lessons
  const [ls1, ...rest] = props.lessons

  expect(l1.title).toBe(1)
  expect(l2.title).toBe(2)

  expect(ls1.title).toBe(1)
  expect(rest.length).toBe(2)

})