interface Bird {
  fly(): void
  eat(): void
  run(): void
  swim(): void
}

class Tucan implements Bird {
  public fly() {}
  public eat() {}
  public run() {}
  public swim() {
    console.log('El que no nada, sahoga')
  }
}

class Humminbird implements Bird {
  public fly() {}
  public eat() {}
  public run() {}
  public swim() {
    console.log('El que no nada, sahoga')
  }
}

class Ostrich implements Bird {
  public fly() {
    throw new Error('Ave que no vuela, a la cazuela!')
  }
  public eat() {}
  public run() {}
  public swim() {}
}

class Penguin implements Bird {
  public fly() {
    throw new Error('Ave que no vuela, a la cazuela!')
  }
  public eat() {}
  public run() {}
  public swim() {}
}
