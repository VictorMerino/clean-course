;(() => {
  interface Product {
    id: number
    name: string
  }

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductService {
    loadProduct(id: number) {
      // Realiza un proceso para obtener el producto y retornarlo
      console.log('Producto: ', { id, name: 'OLED Tv' })
    }

    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos
      console.log('Guardando en base de datos', product)
    }
  }

  class CartService {
    addToCart(productId: number) {
      // Agregar al carrito de compras
      console.log('Agregando al carrito ', productId)
    }
  }

  class ClientNotifier {
    // Example of e-mail config
    // private masterEmail: string = process.env.MASTER_EMAIL
    private masterEmail: string = 'DUMMY_EMAIL_FROM_ENV'
    notifyClients(masterEmail = this.masterEmail) {
      console.log(`Enviando correo a los clientes desde ${masterEmail}`)
    }
  }

  class ProductBlock {
    private productService: ProductService
    private clientNotifier: ClientNotifier
    private cartService: CartService
    constructor(
      productService: ProductService,
      clientNotifier: ClientNotifier,
      cartService: CartService
    ) {
      this.productService = productService
      this.clientNotifier = clientNotifier
      this.cartService = cartService
    }
    loadProduct(id: number) {
      // Realiza un proceso para obtener el producto y retornarlo
      this.productService.loadProduct(id)
    }

    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos
      this.productService.saveProduct(product)
    }

    notifyClients(masterEmail?: string) {
      this.clientNotifier.notifyClients(masterEmail)
    }
    addToCart(productId: number) {
      this.cartService.addToCart(productId)
    }
  }

  /* const productService = new ProductService()
  const cartService = new CartService()
  const clientNotifier = new ClientNotifier()

  productService.loadProduct(10)
  productService.saveProduct({ id: 10, name: 'OLED TV' })
  clientNotifier.notifyClients()
  cartService.addToCart(10) */
  const productBlock = new ProductBlock(
    new ProductService(),
    new ClientNotifier(),
    new CartService()
  )

  productBlock.loadProduct(10)
  productBlock.saveProduct({ id: 10, name: 'OLED TV' })
  productBlock.notifyClients()
  productBlock.addToCart(10)
})()
