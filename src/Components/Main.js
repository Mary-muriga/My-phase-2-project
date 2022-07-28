import React from "react";
import Product from "./Product";

function Main(props) {

    const {products, onAdd} = props;
  return (
    <main className="row">
      <h2>Products</h2>
      <hr/>
      <div className=""></div>
      {products.map((product) =>(
      <Product key={product.id} product={product} onAdd={onAdd}></Product>
      ))}
    </main>
  );
}

export default Main;