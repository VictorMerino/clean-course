import { PersonProperties, Person } from './06-classes-c/Person'
import { SettingsProperties } from './06-classes-c/Settings'
import { UserProperties, User } from './06-classes-c/User'
import { UserSettings } from './06-classes-c/UserSettings'
;(() => {
  const personProperties: PersonProperties = {
    name: 'Victor',
    gender: 'M',
    birthDate: new Date(1990, 0, 20)
  }
  const newPerson = new Person(personProperties) // 20 de Enero de 1990
  console.log(newPerson)

  const userProperties: UserProperties = {
    email: 'email@email.com',
    role: 'Boss',
    lastAccess: new Date(Date.now())
  }
  const newUser: UserProperties = new User(userProperties)
  console.log(newUser)

  const settings: SettingsProperties = {
    workingDirectory: '/usr/home',
    lastOpenFolder: 'home'
  }

  console.log(settings)

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
