import {courses} from "./04";

test('should take old men older then 90', () => {
  const ages = [18, 20, 13, 1, 100, 90, 32]

  const oldAges = ages.filter(age => age > 90)

  expect(oldAges.length).toBe(1)
  expect(oldAges[0]).toBe(100)
})

test('should take courses chipper 160', () => {


  const chipCourses = courses.filter(course => course.price < 160)

  expect(chipCourses.length).toBe(2)
  expect(chipCourses[0].title).toBe('CSS')
  expect(chipCourses[1].title).toBe('REACT')
})

test('get only completed tasks', () => {
  const tasks = [
    {id: 1, title: 'Buy bread', isDone: false},
    {id: 2, title: 'Buy bread', isDone: true},
    {id: 3, title: 'Buy bread', isDone: false},
    {id: 4, title: 'Buy bread', isDone: true}
  ]

  const completedTasks = tasks.filter(task => task.isDone)

  expect(completedTasks.length).toBe(2)
  expect(completedTasks[0].id).toBe(2)
  expect(completedTasks[1].id).toBe(4)

})