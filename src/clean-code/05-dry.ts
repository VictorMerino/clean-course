type Size = '' | 'S' | 'M' | 'L'
interface Product {
  name: string
  price: number
  size: Size
}
class Product {
  constructor(
    public name: string = '',
    public price: number = 0,
    public size: Size = ''
  ) {}

  isProductReady(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case 'string':
          if ((<string>(<unknown>this[key])).length <= 0)
            throw Error(`${key} is empty`)
          break
        case 'number':
          if (<number>(<unknown>this[key]) <= 0)
            throw Error(`${key} is zero or empty`)
          break
        default:
          throw Error(`${key} is not supported`)
      }
    }
    return true
  }

  toString() {
    // Still no DRY
    /* if (!this.name.length) throw new Error('name is empty')
    if (!this.size.length) throw new Error('size is empty') */
    if (!this.isProductReady()) return

    return `${this.name} tiene un precio de ${this.price} y una talla ${this.size}`
  }
}
;(() => {
  const bluePants = new Product('Name', 20, 'M')
  console.log(bluePants.toString())
})()
