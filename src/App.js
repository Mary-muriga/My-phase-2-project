import React from "react";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Login from "./Components/Login";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Main from "./Components/Main";
import AddProductForm from "./Components/AddProductForm";

import "./index.css";

function App(props) {
  const [products, setProducts] = useState([]);
  const { onAdd, onRemove, cartItems } = props;

  useEffect(() => {
    fetch("https://simpleshoppingapi.herokuapp.com/cars")
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, []);
  //console.log(products)

  

  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/AddProductForm" element={<AddProductForm />} />
          {/* <Route exact path="/login" element={<Login />}/> */}
          <Route
            exact
            path="/main"
            element={<Main products={products} onAdd={onAdd} />}
          />
          <Route
            exact
            path="/cart"
            element={
              <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
