import { PostService } from './05-dependency-b'
import { JsonDataBaseService, LocalDataBaseService } from './05-dependency-c'

// Main
;(async () => {
  const postService = new PostService(new JsonDataBaseService())

  const posts = await postService.getPosts()

  console.log({ posts })
})()
