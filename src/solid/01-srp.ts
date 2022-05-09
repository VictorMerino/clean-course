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
    notifyClients() {
      console.log('Enviando correo a los clientes')
    }
  }

  const productService = new ProductService()
  const cartService = new CartService()
  const clientNotifier = new ClientNotifier()

  productService.loadProduct(10)
  productService.saveProduct({ id: 10, name: 'OLED TV' })
  clientNotifier.notifyClients()
  cartService.addToCart(10)
})()
