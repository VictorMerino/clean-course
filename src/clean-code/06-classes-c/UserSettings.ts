import { PersonProperties, Person } from './Person'
import { SettingsProperties, Settings } from './Settings'
import { UserProperties, User } from './User'

// Interface with composition
export interface UserSettingsProperties
  extends PersonProperties,
    UserProperties,
    SettingsProperties {}

// Class with composition of the three previous classes
export class UserSettings {
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
