export interface UserProperties {
  email: string
  role: string
  lastAccess: Date
  checkCredentials?: Function
}

export class User {
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
