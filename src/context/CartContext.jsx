import React, { createContext, useState } from "react";

// Creacion de contexto
export const CartContext = createContext(null);
//

const CartProvider = (props) => {

    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    const addItem = (item, cantidad) => {

        const copiaProducto = {...item};
        copiaProducto.cantidad = cantidad;

        setCantidadTotal((cantidadTotal + cantidad));
        setTotal((total + (copiaProducto.price)* cantidad))

        if (carrito.some(elemento => elemento.id === item.id)) {

            let index = carrito.findIndex(elemento => elemento.id === item.id);

            let producto = carrito[index];

            producto.cantidad = producto.cantidad + cantidad;

            const nuevoCarrito = [...carrito];

            nuevoCarrito.splice(index, 1, producto);

            setCarrito([...nuevoCarrito]);

        } else {
            let producto = { ...item, cantidad };
            setCarrito([...carrito, producto]);
        }

    }

    const eliminarDeCarrito = ( id, cantidad, precio ) => {

    let filtrarCarrito = carrito.filter(item => item.id !== id)
    
    setCarrito(filtrarCarrito)
    setCantidadTotal(cantidadTotal - cantidad)
    setTotal(total - (cantidad * precio))

    const nuevoCarrito = [...carrito];
    let index = nuevoCarrito.findIndex(elemento => elemento.id === id);

    nuevoCarrito.splice( index, 1);

    setCarrito([...nuevoCarrito]);
    }

    const vaciarCarrito = () => {
    setCarrito([]);
    setCantidadTotal(0)
    setTotal(0)
    }


    return (
        <CartContext.Provider
            value={{
                carrito,
                setCarrito,
                addItem,
                eliminarDeCarrito,
                vaciarCarrito, 
                total,
                cantidadTotal
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;