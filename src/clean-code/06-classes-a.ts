;(() => {
  type Gender = 'M' | 'F'

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthDate: Date
    ) {}
  }

  const newPerson = new Person('Victor', 'M', new Date(1990, 0, 20)) // 20 de Enero de 1990
  console.log(newPerson)

  class User extends Person {
    constructor(
      public email: string,
      public role: string,
      public lastAccess: Date,
      name: string,
      gender: Gender,
      birthDate: Date
    ) {
      super(name, gender, birthDate)
    }
  }

  const newUser = new User(
    'email@email.com',
    'Boss',
    new Date(Date.now()),
    'Victor',
    'M',
    new Date(1990, 0, 20)
  )
  console.log(newUser)
})()
