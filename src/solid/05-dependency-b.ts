import { JsonDataBaseService } from './05-dependency-c'

export interface Post {
  body: string
  id: number
  title: string
  userId: number
}

export class PostService {
  private posts: Post[] = []
  private localDatabase

  constructor(localDatabase: JsonDataBaseService) {
    this.localDatabase = localDatabase
  }

  async getPosts(): Promise<Post[]> {
    return await this.localDatabase.getPosts()
  }
}
