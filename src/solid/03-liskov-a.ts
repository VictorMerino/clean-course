import { /* Tesla, Audi, Toyota, Honda, */ Car, Brands } from './03-liskov-b'
;(() => {
  const printCarSeats = (cars: Car[]) => {
    cars.forEach((car) => console.log(car.getNumberOfSeats()))
  }

  const cars = [
    new Car(7, Brands.Tesla),
    new Car(2, Brands.Audi),
    new Car(5, Brands.Toyota),
    new Car(3, Brands.Honda)
  ]

  /* Original not refactored one:
  const printCarSeats_OLD = (cars: (Tesla | Audi | Toyota | Honda)[]) => {
    for (const car of cars) {
      if (car instanceof Tesla) {
        console.log('Tesla', car.getNumberOfTeslaSeats())
        continue
      }
      if (car instanceof Audi) {
        console.log('Audi', car.getNumberOfAudiSeats())
        continue
      }
      if (car instanceof Toyota) {
        console.log('Toyota', car.getNumberOfToyotaSeats())
        continue
      }
      if (car instanceof Honda) {
        console.log('Honda', car.getNumberOfHondaSeats())
        continue
      }
    }
  }
  */

  // const cars = [new Tesla(7), new Audi(2), new Toyota(5), new Honda(5)]

  printCarSeats(cars)
})()
