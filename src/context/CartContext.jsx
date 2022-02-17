import React, { createContext, useState } from "react";

// Creacion de contexto
export const CartContext = createContext(null);
//

const CartProvider = (props) => {

    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);


    const addItem = (item, cantidad) => {
        if(carrito.some(elemento => elemento.id === item.id)){
            
            
            let index = carrito.findIndex(elemento => elemento.id === item.id);

            let producto = carrito[index];
            console.log(producto)

            producto.cantidad = producto.cantidad + cantidad;

            const nuevoCarrito = [...carrito];

            nuevoCarrito.splice( index, 1, producto );

            setCarrito([ ...nuevoCarrito ]);

        }else{
            let producto = {...item, cantidad};
            setCarrito([...carrito, producto ]);
        }
    }

    const eliminarDeCarrito = ( id ) => {
        const nuevoCarrito = [...carrito];
        let index = nuevoCarrito.findIndex(el => el.id === id);
        
        nuevoCarrito.splice( index, 1 );

        setCarrito([...nuevoCarrito]);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }


    return(
        <CartContext.Provider 
            value={{ 
                        carrito, 
                        setCarrito,
                        addItem,
                        eliminarDeCarrito,
                        vaciarCarrito, 
                   }}
        >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;