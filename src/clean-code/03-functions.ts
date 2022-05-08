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

  interface Movie {
    cast: string[]
    description: string
    rating: number
    title: string
  }
  // Crear una película
  function createMovie(options: Movie) {
    console.log(options)
  }

  interface Actor {
    fullName: string
    birthDate: Date
  }
  // Crea un nuevo actor
  function createActor(personalData: Actor): Actor | boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (personalData.fullName === 'fernando') return false

    console.log('Crear actor')
    return personalData
  }

  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false
  }): number => {
    if (isDead) return 1500

    if (isSeparated) return 2500

    if (isRetired) return 3000

    return 4000
  }
})()
