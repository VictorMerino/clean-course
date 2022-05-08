;(() => {
  // Resolver sin la triple condicional dentro del if
  // includes? arrays?
  function isRedFruit(fruit: string): boolean {
    // Array not make as a a constant as they are only three values and in one line can be easily read
    return ['manzana', 'cereza', 'ciruela'].includes(fruit)
  }

  // Simplificar esta función
  // switch? Object literal? validar posibles colores
  function getFruitsByColor(color: string): string[] {
    const fruitsByColor = {
      red: ['manzana', 'fresa'],
      yellow: ['piña', 'banana'],
      purple: ['moras', 'uvas']
    }
    if (fruitsByColor[color]) return fruitsByColor[color]

    throw Error('the color must be: red, yellow, purple')
  }

  // Simplificar esta función
  let isFirstStepWorking = true
  let isSecondStepWorking = true
  let isThirdStepWorking = true
  let isFourthStepWorking = true

  enum StepsByNumber {
    First = 'First',
    Second = 'Second',
    Third = 'Third',
    Fourth = 'Fourth'
  }
  function workingSteps() {
    const endOfPhrase = 'step broken.'
    if (!isFirstStepWorking) return `${StepsByNumber.First} ${endOfPhrase}`
    if (!isSecondStepWorking) return `${StepsByNumber.Second} ${endOfPhrase}`
    if (!isThirdStepWorking) return `${StepsByNumber.Third} ${endOfPhrase}`
    if (!isFourthStepWorking) return `${StepsByNumber.Fourth} ${endOfPhrase}`

    return 'Working properly'
  }

  // isRedFruit
  console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }) // true
  console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }) // true

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor('red') }) // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor('yellow') }) // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor('purple') }) // ['moras', 'uvas']
  console.log({ pinkFruits: getFruitsByColor('pink') }) // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }) // Cambiar los valores de la línea 31 y esperar los resultados
})()
