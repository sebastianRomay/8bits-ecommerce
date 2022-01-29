import React , {useState, useEffect} from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemsList = () => {

    const url = 'https://fakestoreapi.com/products';
    const [productos, setProductos] = useState();
    const fetchApi = async () =>{
        const response = await fetch(url);
        const responseJSON = await response.json()
        setProductos(responseJSON)
        console.log(productos)
    }

    useEffect(() => {
      fetchApi();
    }, []);

return (

<>
        { !productos ? 
            <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
            </div> 
: 
        productos.map(prod => {
            return <div className="card m-3">
            <img src={prod.image} className="card-img-top" alt="..."/>
            <div className="card-body d-flex justify-content-center flex-column">
                <h6 className="card-text text-center">USD {prod.price}</h6>
                <h6 className="card-title text-center">{prod.title}</h6>
            </div>
            <ItemCount initial='0' stock='5' />
        </div>
        })}
</>
)
};

export default ItemsList;