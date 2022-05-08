;(() => {
  type Gender = 'M' | 'F'

  interface PersonProperties {
    name: string
    gender: Gender
    birthDate: Date
  }

  class Person {
    public name: string
    public gender: Gender
    public birthDate: Date
    constructor({ name, gender, birthDate }: PersonProperties) {
      this.name = name
      this.gender = gender
      this.birthDate = birthDate
    }
  }

  const personProperties: PersonProperties = {
    name: 'Victor',
    gender: 'M',
    birthDate: new Date(1990, 0, 20)
  }
  const newPerson = new Person(personProperties) // 20 de Enero de 1990
  console.log(newPerson)

  interface UserProperties extends Person {
    email: string
    role: string
    lastAccess: Date
  }
  class User extends Person {
    public email: string
    public role: string
    public lastAccess: Date
    constructor({ email, role, lastAccess }: UserProperties) {
      super(personProperties)
      this.email = email
      this.role = role
      this.lastAccess = lastAccess
    }
    checkCredentials() {
      return true
    }
  }

  const userProperties: UserProperties = {
    name: 'Victor',
    gender: 'M',
    birthDate: new Date(1990, 0, 20),
    email: 'email@email.com',
    role: 'Boss',
    lastAccess: new Date(Date.now())
  }
  const newUser: UserProperties = new User(userProperties)
  console.log(newUser)

  /*class UserSettings extends User {
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
  })*/
})()
