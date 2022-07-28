import React, { useState } from 'react'


export default function AddItemForm() {
  const[image, setImage]=useState("");
  const[price, setPrice]=useState("");
  const[company, setCompany]=useState("");
  const[info, setInfo]=useState("");

function imageChange(e){
  setImage(e.target.value);

}
function priceChange(e){
  setPrice(e.target.value);

}

function companyChange(e){
  setCompany(e.target.value);

}

function infoChange(e){
  setInfo(e.target.value);

}

function handleSubmit(e){
  e.preventDefault();
  const newItem
}
  return (
    <div>
        <h4>I am checkout</h4>
        </div>
  )
}
