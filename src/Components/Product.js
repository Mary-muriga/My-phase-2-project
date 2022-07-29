import React from "react";

function Product(props) {
  const { product, onAdd } = props;

  function handleDeleteClick(){
    fetch(`https://simpleshoppingapi.herokuapp.com/cars/${product.id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => console.log("deleted"));
  }
  //console.log(product);
  
  return (
    <div className="col-1">
     <img className="image" src={product.image} alt= "car"/>
      
      <h3>{product.title}</h3>
      <div>Price: ${product.price}</div>
      <div>Company: {product.company}</div>
      <div>Info: {product.info}</div>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
      <div>
        <button className="remove" onClick={handleDeleteClick}>Delete</button>
      </div>
      <hr/>

    </div>
  );
}
export default Product;
