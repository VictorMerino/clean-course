type Gender = 'M' | 'F'

export interface PersonProperties {
  name: string
  gender: Gender
  birthDate: Date
}

// Person class is already fine: no need to refactor
export class Person {
  public name: string
  public gender: Gender
  public birthDate: Date

  constructor({ name, gender, birthDate }: PersonProperties) {
    this.name = name
    this.gender = gender
    this.birthDate = birthDate
  }
}
