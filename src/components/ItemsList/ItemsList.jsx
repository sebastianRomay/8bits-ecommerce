import React from 'react';
import Items from '../Items/Items';
import Spinner from '../Spinner/Spinner';

const ItemsList = ({products}) => {
console.log(products)
return (

<>
        { !products ? 
            <Spinner/>
: 
        products.map(prod => {
            return (

                <Items img={prod.image} precio={prod.price} title={prod.title}/>

                )

        })}
</>
)
};

export default ItemsList;