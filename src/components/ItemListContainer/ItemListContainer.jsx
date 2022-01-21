import './ItemListContainer.css';

const ItemListContainer = (props) => {
  return (
  <>
    <div className="card m-3">
        <img src={props.img} className="card-img-top" alt="..."/>
        <div className="card-body d-flex justify-content-between">
            <h5 className="card-title">{props.title}</h5>
            <h5 className="card-text">$ {props.precio}</h5>
        </div>
        <div className='d-flex justify-content-center'>
        <button className='btn btn-outline-success w-50 m-2'>Añadir al carrito</button>

        </div>
    </div>
  </>
  );
};

export default ItemListContainer;
