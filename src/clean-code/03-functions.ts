;(() => {
  // función para obtener información de una película por Id
  function getMovieInfo(movieId: string) {
    console.log({ movieId })
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getMovieActorsInfo(movieId: string) {
    console.log({ movieId })
  }

  // funcion para obtener el bio del actor por el id
  function getActorBio(id: string) {
    console.log({ id })
  }

  // Crear una película
  function createMovie(
    title: string,
    description: string,
    rating: number,
    cast: string[]
  ) {
    console.log({ title, description, rating, cast })
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
