class User {
  constructor(name, site, dob) {
    this.name = name
    this.site = site
    this.dateOfBirth = dob
    this.counter = 0
  }
  get name() {
    console.log('Getter')
    return this.name
  }
  set name(value) {
    console.log('Setter')
    return this.name = value
  }

  hello() {
    this.counter++
    console.log(`I'm ${this.name} from ${this.site}`)
  }
}

const u1 = new User('Dimych', 'it-incubator.by', new Date(1988, 1, 2))
const u2 = new User('Kostya', 'it-incubator.by', new Date(1996, 5, 31))


u1.name = 'Igor'
console.log(u1.name)


class Coder extends User {
  constructor(name, site, dob, tech) {
    super(name, site, dob);
    this.tech = tech
  }

  hello() {
    super.hello()
    console.log('OMG')
  }

  code() {
    console.log(`I'm ${this.name} These is my ${this.tech} code: var fn1 = (a,b) => a + b`)
  }
}

const newCoder = new Coder('Petya', 'it-incubator.by', new Date(1990, 1, 1), 'JS')

console.log(newCoder)
newCoder.code()

let users = [u1, u2, newCoder]

users.forEach(u => u.hello())