;(() => {
  type Gender = 'M' | 'F'

  class Person {
    public name: string
    public gender: Gender
    public birthDate: Date

    constructor(name: string, gender: Gender, birthDate: Date) {
      this.name = name
      this.gender = gender
      this.birthDate = birthDate
    }
  }

  const newPerson = new Person('Victor', 'M', new Date(1990, 0, 20)) // 20 de Enero de 1990
  console.log(newPerson)
})()
