import React from "react";

function Product(props) {
  const { product, onAdd } = props;
  
  return (
    <div className="col-1">
     <img className="image" src={product.image} alt= "Jeep"/>
      
      <h3>{product.title}</h3>
      <div>Price: ${product.price}</div>
      <div>Company: {product.company}</div>
      <div>Info: {product.info}</div>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
      <hr/>

    </div>
  );
}
export default Product;
