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

  interface UserProperties extends PersonProperties {
    email: string
    role: string
    lastAccess: Date
    checkCredentials?: Function
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

  interface UserSettingsProperties extends UserProperties {
    workingDirectory: string
    lastOpenFolder: string
  }
  class UserSettings extends User {
    public workingDirectory: string
    public lastOpenFolder: string

    constructor({ workingDirectory, lastOpenFolder }: UserSettingsProperties) {
      super(userProperties)
      this.workingDirectory = workingDirectory
      this.lastOpenFolder = lastOpenFolder
    }
  }

  const userSettings: UserSettingsProperties = {
    workingDirectory: '/usr/home',
    lastOpenFolder: 'home',
    name: 'Victor',
    gender: 'M',
    birthDate: new Date(1990, 0, 20),
    email: 'email@email.com',
    role: 'Boss',
    lastAccess: new Date(Date.now()),
    checkCredentials: () => {}
  }

  console.log({
    userSettings,
    areCredentialsValid: () => {}
  })
})()
