import React from "react";
import Product from "./Product";

function Main(props) {
  const { products, onAdd, handleDelete } = props;
  return (
    <>
      <main className="block col-2">
        <h2 className="h2-2">Products</h2>
        <hr />
        <div className=""></div>
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            product={product}
            onAdd={onAdd}
            handleDelete={handleDelete}
          />
        ))}
      </main>
    </>
  );
}

export default Main;
