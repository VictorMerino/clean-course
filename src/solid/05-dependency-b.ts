import { LocalDataBaseService } from './05-dependency-c'

export interface Post {
  body: string
  id: number
  title: string
  userId: number
}

export class PostService {
  private posts: Post[] = []
  private localDatabase

  constructor(localDatabase: LocalDataBaseService) {
    this.localDatabase = localDatabase
  }

  async getPosts(): Promise<Post[]> {
    return await this.localDatabase.getFakePosts()
  }
}
