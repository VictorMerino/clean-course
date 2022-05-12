import { PostService } from './05-dependency-b'
import { LocalDataBaseService } from './05-dependency-c'

// Main
;(async () => {
  const postService = new PostService(new LocalDataBaseService())

  const posts = await postService.getPosts()

  console.log({ posts })
})()
