import React from "react";
import Item from "../Item/Item";
import Spinner from "../Spinner/Spinner";

const ItemsList = ({ products }) => {
  return (
    <>
      {!products ? (
        <Spinner />
      ) : (
        products.map((prod) => {
          return (
            <Item img={prod.image} precio={prod.price} title={prod.title} id={prod.id} key={prod.id}/>
          );
        })
      )}
    </>
  );
};

export default ItemsList;
