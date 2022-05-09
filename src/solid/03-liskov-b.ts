export class Tesla {
  constructor(private numberOfSeats: number) {}

  getNumberOfTeslaSeats() {
    return this.numberOfSeats
  }
}

export class Audi {
  constructor(private numberOfSeats: number) {}

  getNumberOfAudiSeats() {
    return this.numberOfSeats
  }
}

export class Toyota {
  constructor(private numberOfSeats: number) {}

  getNumberOfToyotaSeats() {
    return this.numberOfSeats
  }
}

export class Honda {
  constructor(private numberOfSeats: number) {}

  getNumberOfHondaSeats() {
    return this.numberOfSeats
  }
}

export enum Brand {
  Tesla = 'Tesla',
  Audi = 'Audi',
  Totota = 'Totota',
  Honda = 'Honda'
}

console.log(Brand)
// export type Brand = 'Tesla' | 'Audi' | 'Toyota' | 'Honda'

export class Car {
  constructor(private numberOfSeats: number, private brand: Brand) {}

  getNumberOfSeats() {
    return this.numberOfSeats
  }
}
