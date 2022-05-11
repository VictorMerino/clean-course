interface Bird {
  eat(): void
  run(): void
}

interface FlyingBird extends Bird {
  fly(): void
}

interface SwimmingBird extends Bird {
  swim(): void
}

class Tucan implements FlyingBird {
  public fly() {}
  public eat() {}
  public run() {}
}

class Humminbird implements FlyingBird {
  public fly() {}
  public eat() {}
  public run() {}
}

class Ostrich implements Bird {
  public eat() {}
  public run() {}
  public swim() {}
}

class Penguin implements SwimmingBird {
  public eat() {}
  public run() {}
  public swim() {}
}
