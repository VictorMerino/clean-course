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
      this.lastAccess = new Date()
    }
    checkCredentials() {
      return true
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

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      lastAccess: Date,
      name: string,
      gender: Gender,
      birthDate: Date
    ) {
      super(email, role, lastAccess, name, gender, birthDate)
    }
  }

  const userSettings = new UserSettings(
    '/usr/home',
    'home',
    'email@email.com',
    'admin',
    new Date(),
    'Victor',
    'M',
    new Date(1990, 0, 20)
  )

  console.log({
    userSettings,
    areCredentialsValid: userSettings.checkCredentials()
  })
})()
