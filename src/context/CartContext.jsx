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

            producto.cantidad = producto.cantidad + cantidad;

            const nuevoCarrito = [...carrito];

            nuevoCarrito.splice( index, 1, producto );

            setCarrito([ ...nuevoCarrito ]);

        }else{
            let producto = {...item, cantidad};
            setCarrito([...carrito, producto ]);
        }
    }

    // const deleteCartById = ( id ) => {
    //     const nuevoCarrito = [...cart];
    //     let index = nuevoCarrito.findIndex(el => el.id === id);
        
    //     nuevoCarrito.splice( index, 1 );

    //     setCart([...nuevoCarrito]);
    // }

    // const deleteCart = () => {
    //     setCart([]);
    // }


    return(
        <CartContext.Provider 
            value={{ 
                        carrito, 
                        setCarrito,
                        addItem,
                        // deleteCartById,
                        // deleteCart, 
                   }}
        >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;