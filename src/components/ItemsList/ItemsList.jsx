import React from 'react';
import Items from '../Items/Items';

const ItemsList = ({products}) => {

return (

<>
        { !products ? 
            <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
            </div> 
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