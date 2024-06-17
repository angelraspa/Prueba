# E-Commerce App - React 

Una aplicación web de comercio electrónico desarrollada con React que ofrece una experiencia de compra completa y fácil de usar.

## Funcionalidades Principales

### Pantalla de Productos

- Lista todos los productos en tarjetas con nombre y foto.
- Incluye un buscador para filtrar productos por nombre.
- Al hacer clic en un producto, se navega a la pantalla de detalles del producto.

### Pantalla de Detalles del Producto


- Proporciona una descripción detallada del producto.
- Muestra el precio y el stock disponible.
- Permite agregar el producto al carrito.

### Pantalla de Carrito

- Proporciona una descripción detallada de los producto.
- Muestra el precio y la cantidad por producto.
- Muestra Precio Total

<img src="./screenshot/video-app-react-coder.gif" width="300" >

### Navegación

```javascript
<BrowserRouter>
        <CartProvider>
          <Navbar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/item/:id' element={<ItemDetailContainer/>}/>
              <Route path='/checkout' element={<CheckoutContainer/>}/>
              <Route path='/category/:id' element={<ItemListContainer/>} />
              <Route path='/cart' element={<ItemCartContainer/>}/>
              <Route path='/orders' element={<OrderContainer/>}/>
            </Routes>
          </CartProvider>
  </BrowserRouter>
```

- **Link 1 - Productos:** Categorías y productos (stack principal).
- **Link 2 - Items:** Detalle del producto.
- **Link 3 - Órdenes:** Historial de órdenes realizadas.
- **Link 4 - Creación de Orden:** Carga de datos para quien será la orden realizada.
- **Link 5 - Carrito:** Detalles del carrito de compras con resumen y botón para finalizar la orden.

## Tecnologías Utilizadas

- **React Router DOM:** Gestiona la navegación entre pantallas.
- **React:** Framework para contruccion de interfaces
- **Firebase:** Realiza operaciones de lectura/escritura en la base de datos.

## Instalación

1. Clona el repositorio: `git clone https://github.com/tu-usuario/tu-aplicacion.git`
2. Instala las dependencias: `npm install`,`npm install react-router-dom`,`npm install firebase`,`npm install dotenv`,`npm install sweetalert2`
`npm i --save @fortawesome/fontawesome-svg-core`
`npm install --save @fortawesome/free-solid-svg-icons`
`npm install --save @fortawesome/react-fontawesome`
3. Ejecuta la aplicación: `npm run dev`
