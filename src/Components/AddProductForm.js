import React, { useState } from 'react'


 function AddProductForm({onAddCar}) {
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
.then((car) => onAddCar(car));
}
//console.log(car)


  return (
    <div className='form'> 
      <h2>Add your new product here!</h2>
      <h2> Then  go back to showroom to see the results.</h2>
          
        <form className="addcar"onSubmit = {handleSubmit}>
        {/* <label htmlFor="image">image</label> */}
  <input  className="form-1"placeholder= "enter the image"type="text" name="image" value={car.image} onChange={handleChange}/>
 {/* <label htmlFor="price"> price</label> */}

 <input  className="form-1" placeholder="enter the price"type="text" name="price" value={car.price} onChange={handleChange}/>
{/* <label htmlFor="company">company</label> */}

  <input  className="form-1" placeholder="enter company"type="text" name="company"  value={car.company} onChange={handleChange}/>
  {/* <label htmlFor="info">info</label> */}

  <input  className="form-1" placeholder="enter the info" type="text" name="info" value={car.info} onChange={handleChange}/>
  <input className="sub" type="submit" value="Submit" />
  </form>
        </div>
  )
}
export default AddProductForm;