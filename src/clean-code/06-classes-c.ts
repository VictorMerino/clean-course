;(() => {
  type Gender = 'M' | 'F'

  interface PersonProperties {
    name: string
    gender: Gender
    birthDate: Date
  }

  // Person class is already fine: no need to refactor
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

  interface UserProperties {
    email: string
    role: string
    lastAccess: Date
    checkCredentials?: Function
  }

  class User {
    public email: string
    public role: string
    public lastAccess: Date
    constructor({ email, role, lastAccess }: UserProperties) {
      this.email = email
      this.role = role
      this.lastAccess = lastAccess
    }
    checkCredentials() {
      return true
    }
  }

  const userProperties: UserProperties = {
    email: 'email@email.com',
    role: 'Boss',
    lastAccess: new Date(Date.now())
  }
  const newUser: UserProperties = new User(userProperties)
  console.log(newUser)

  interface SettingsProperties {
    workingDirectory: string
    lastOpenFolder: string
  }
  class Settings {
    public workingDirectory: string
    public lastOpenFolder: string

    constructor({ workingDirectory, lastOpenFolder }: SettingsProperties) {
      this.workingDirectory = workingDirectory
      this.lastOpenFolder = lastOpenFolder
    }
  }

  const settings: SettingsProperties = {
    workingDirectory: '/usr/home',
    lastOpenFolder: 'home'
  }

  console.log(settings)

  // Interface with composition
  interface UserSettingsProperties
    extends PersonProperties,
      UserProperties,
      SettingsProperties {}

  // Class with composition of the three previous classes
  class UserSettings {
    public person: Person
    public user: User
    public settings: Settings

    constructor({
      workingDirectory,
      lastOpenFolder,
      name,
      gender,
      birthDate,
      email,
      role,
      lastAccess
    }: UserSettingsProperties) {
      this.person = new Person({ name, gender, birthDate })
      this.user = new User({ email, role, lastAccess })
      this.settings = new Settings({ workingDirectory, lastOpenFolder })
    }
  }

  const userSettings = new UserSettings({
    workingDirectory: '/usr/home',
    lastOpenFolder: 'home',
    name: 'Victor',
    gender: 'M',
    birthDate: new Date(1990, 0, 20),
    email: 'email@email.com',
    role: 'Boss',
    lastAccess: new Date(Date.now())
  })

  console.log(userSettings)
  // Check credentials is a method of user:
  console.log(userSettings.user.checkCredentials())
})()
