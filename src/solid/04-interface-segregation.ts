interface Bird {
  eat(): void
}

interface FlyingBird extends Bird {
  fly(): void
}

interface RunnerBird extends Bird {
  run(): void
}

interface SwimmerBird extends Bird {
  swim(): void
}

class Tucan implements FlyingBird {
  public fly() {}
  public eat() {}
}

class Humminbird implements FlyingBird {
  public fly() {}
  public eat() {}
}

class Ostrich implements RunnerBird, SwimmerBird {
  public eat() {}
  public run() {}
  public swim() {}
}

class Penguin implements RunnerBird, SwimmerBird {
  public eat() {}
  public run() {}
  public swim() {}
}

class Duck implements SwimmerBird, RunnerBird, FlyingBird {
  public fly() {}
  public eat() {}
  public run() {}
  public swim() {}
}
