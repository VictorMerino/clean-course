interface Bird {
  fly?(): void
  eat(): void
  run(): void
  swim?(): void
}

class Tucan implements Bird {
  public fly() {}
  public eat() {}
  public run() {}
}

class Humminbird implements Bird {
  public fly() {}
  public eat() {}
  public run() {}
}

class Ostrich implements Bird {
  public eat() {}
  public run() {}
  public swim() {}
}

class Penguin implements Bird {
  public eat() {}
  public run() {}
  public swim() {}
}
