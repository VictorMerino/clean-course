type Size = '' | 'S' | 'M' | 'L'
class Product {
  constructor(
    public name: string = '',
    public price: number = 0,
    public size: Size = ''
  ) {}

  toString() {
    // Still no DRY
    if (!this.name.length) throw new Error('name is empty')
    if (!this.size.length) throw new Error('size is empty')
    return `${this.name} tiene un precio de ${this.price} y una talla ${this.size}`
  }
}
;(() => {
  const bluePants = new Product('Churton', 0, '')
  console.log(bluePants.toString())
})()
