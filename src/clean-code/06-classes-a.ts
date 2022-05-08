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
})()
