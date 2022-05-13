import { PostService } from './05-dependency-b'
import {
  JsonDataBaseService,
  LocalDataBaseService,
  WebApiService
} from './05-dependency-c'

// Main
;(async () => {
  const postService = new PostService(new WebApiService())

  const posts = await postService.getPosts()

  console.log({ posts })
})()
