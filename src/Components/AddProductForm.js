import React, { useState } from 'react'


 function AddProductForm() {
  const[car, setCar]=useState({
    image: "",
    price: "",
    company: "",
    info: ""
  });
  
function handleChange(e){
  setCar({...car, [e.target.name]: e.target.value})
  
}

function handleSubmit(e){
  e.preventDefault();


fetch("https://simpleshoppingapi.herokuapp.com/cars", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(car)
})
.then((r) => r.json())
.then((car) => (car));
}
//console.log(car)


  return (
    <div> 
      <h2>Add your new product here!</h2>
      <h2> Then  go back to showroom to see the results.</h2>
          
        <form className='form' onSubmit = {handleSubmit}>
        <label htmlFor="image">image</label>
  <input clasName="label"type="text" name="image" value={car.image} onChange={handleChange}/>
 <label htmlFor="price"> price</label>

 <input type="text" name="price" value={car.price} onChange={handleChange}/>
<label htmlFor="company">company</label>

  <input type="text" name="company" value={car.company} onChange={handleChange}/>
  <label htmlFor="info">info</label>

  <input type="text" name="info" value={car.info} onChange={handleChange}/>
  <input className="button"type="submit" value="Submit" />
  </form>
        </div>
  )
}
export default AddProductForm;