;(() => {
  // función para obtener información de una película por Id
  function getMovieInfoById(id: string) {
    console.log({ id })
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getMovieActorsInfoById(id: string) {
    console.log({ id })
  }

  // funcion para obtener el bio del actor por el id
  function getActorBioById(id: string) {
    console.log({ id })
  }

  interface MovieOptions {
    title: string
    description: string
    rating: number
    cast: string[]
  }
  // Crear una película
  function createMovie(options: MovieOptions) {
    console.log(options)
  }

  // Crea un nuevo actor
  function createActor(fullName: string, birthDate: Date): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === 'fernando') return false

    console.log('Crear actor')
    return true
  }
})()
