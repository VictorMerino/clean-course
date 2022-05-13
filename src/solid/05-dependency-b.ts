import { PostProvider } from './05-dependency-c'

export interface Post {
  body: string
  id: number
  title: string
  userId: number
}

export class PostService {
  private posts: Post[] = []
  private postProvider

  constructor(postProvider: PostProvider) {
    this.postProvider = postProvider
  }

  async getPosts(): Promise<Post[]> {
    return await this.postProvider.getPosts()
  }
}
