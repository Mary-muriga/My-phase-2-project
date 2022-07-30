import React from "react";

function Product({ product, onAdd , handleDelete}) {
  
  
  function handleDeleteClick(e){
    let id = (e.target.id)
    
    fetch(`https://simpleshoppingapi.herokuapp.com/cars/${id}`, {
     method: "DELETE",
    })
    .then((r) => r.json())
    .then((deletedItem) => handleDelete(deletedItem));
  }
  //console.log(product.id);
  
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
        <button id={product.id} className="remove" onClick={handleDeleteClick}>Delete</button>
      </div>
      <hr/>

    </div>
  );
}
export default Product;
