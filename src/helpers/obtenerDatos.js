//importo los productos
import { listaProductos } from '../data/productos';

const obtenerPorId = (id, array) => array.find((elemento) => elemento.id === id);

// promesas
const obtenerProductos = new Promise((res, reject) => {
  setTimeout(() => {
    res(listaProductos);
  }, 2000);
});

//Async Await que setea mi hook de estado
const obtenerTodosLosProductos = async (setState) => {
  try {
    const resultado = await obtenerProductos;
    setState(resultado);
  } catch (error) {
    console.log(error);
    alert('No podemos mostrar los productos en este momento');
  }
};

//Async Await que setea mi hook de estado
const obtenerProductoPorId = async (id, setState) => {
  try {
    const resultado = await obtenerPorId;
    setState(obtenerPorId(id, resultado));
  } catch (error) {
    console.log(error);
  }
};

export { obtenerTodosLosProductos, obtenerProductoPorId };
