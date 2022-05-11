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

class Ostrich implements SwimmingBird {
  public eat() {}
  public run() {}
  public swim() {}
}

class Penguin implements SwimmingBird {
  public eat() {}
  public run() {}
  public swim() {}
}

class Duck implements SwimmingBird, FlyingBird {
  public fly() {}
  public eat() {}
  public run() {}
  public swim() {}
}
