import React from "react";
import Item from "../Item/Item";
import Spinner from "../Spinner/Spinner";

const ItemsList = ({ products }) => {
  console.log(products);
  return (
    <>
      {!products ? (
        <Spinner />
      ) : (
        products.map((prod) => {
          return (
            <Item img={prod.image} precio={prod.price} title={prod.title} />
          );
        })
      )}
    </>
  );
};

export default ItemsList;
