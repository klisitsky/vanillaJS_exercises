function User() {
  this.name = name
  this.site = site
  this.dateOfBirth = dob
}

User.prototype.hello = function () {
  console.log(`I'm ${this.name} from ${this.site}`)
}

const u1 = new User('Dimych', 'it-incubator.by', new Date(1988, 1, 2))
const u2 = new User('Kostya', 'it-incubator.by', new Date(1996, 5, 31))

u1.hello()
u2.hello()