import React from "react";
import Navbar from "./Components/Navbar";

import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Main from "./Components/Main";
import AddProductForm from "./Components/AddProductForm";

import "./index.css";

function App(props) {
  const [products, setProducts] = useState([]);
  const { onAdd } = props;

  useEffect(() => {
    fetch("https://simpleshoppingapi.herokuapp.com/cars")
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, [products]);

  function handleDelete(deletedItem){
   const updateItems =products.filter (item => item.id !== deletedItem.id)
   setProducts(updateItems)
  }

  //console.log(products)
  function onAddCar(car){
    setProducts([...products, car])

  }

  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/AddProductForm" element={<AddProductForm  onAddCar={onAddCar}/>} />
          <Route
            exact
            path="/main"
            element={<Main products={products} onAdd={onAdd} handleDelete={handleDelete} />}
          />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
