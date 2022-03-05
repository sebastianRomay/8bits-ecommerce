# 8 Bits Ecommerce

## Proyecto final del curso ReactJs.

Deploy: [https://bits-ecommerce.herokuapp.com/)

 Soy Sebastian Romay, realicé éste proyecto para el curso que realice de React.

Se usó firestore como base de datos, que es un servicio de Firebase, para persistir los productos que se muestran y sus datos, además de las ordenes de compra que se generan.

## Caracteristicas

- Botón de agregar al carrito para varios items con control según stock.
- Se descuenta del stock de cada producto en firestore solo los productos que fueron comprados, con el botón terminar compra.

### Instalación y puesta en marcha

Primero hay que clonar el repositorio:
* >git clone https://github.com/sebastianRomay/8bits-ecommerce
* Luego moverse a la carpeta 8bits-ecommerce
* >cd 8bits-ecommerce
* Después insertar el comando:
* >npm install
* Luego de ésto:
* >npm run start 

y la app estará corriendo en localhost.

## Dependencias instaladas :

  *  firebase
  *  react-router-dom
  *  swal

## Mejoras a agregar en proximas versiones

En el futuro, se harán las siguientes mejoras:

- Implementación de login de usuarios.
- Implementar pasarela de pagos.
- Implementar el uso de localstorage para que no se pierda el carrito cuando se recarga la página.
