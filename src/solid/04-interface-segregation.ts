interface Bird {
  eat(): void
  run(): void
}

interface FlyingBird extends Bird {
  fly(): void
}

interface SwimmerBird extends Bird {
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

class Ostrich implements SwimmerBird {
  public eat() {}
  public run() {}
  public swim() {}
}

class Penguin implements SwimmerBird {
  public eat() {}
  public run() {}
  public swim() {}
}

class Duck implements SwimmerBird, FlyingBird {
  public fly() {}
  public eat() {}
  public run() {}
  public swim() {}
}
