export class HttpClient {
  async get(url: string) {
    const { json, status } = await fetch(url)
    console.log({ status })
    return { data: json, status }
  }
}
