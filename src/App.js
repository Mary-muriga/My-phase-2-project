import React from "react";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import { useEffect, useState } from "react";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Main from "./Components/Main";

import "./index.css";

function App() {

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([])
  
  useEffect(() => {

    fetch("https://simpleshoppingapi.herokuapp.com/cars")
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, []);
   //console.log(products)

   const onAdd =(product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) => 
        x.id === product.id ? {...exist, qty: exist.qty + 1}: x)
      )
    } else {
      setCartItems([...cartItems, {...product, qty: 1}])
    }
   }
   const onRemove = (product) => {
   const exist = cartItems.find((x) => x.id === product.id);
   if (exist.qty === 1) {
     setCartItems(
       cartItems.filter((x) => 
       x.id !== product.id));
   } else {
     setCartItems( cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty-1} : x)
     );
    }

  };


return(


<div className="App">    

<Header countCartItems={cartItems.length}></Header>
<div className="row">
  <Main onAdd={onAdd} products={products}></Main>
  <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Cart>
</div>

  <Router>
  <div>
    <Navbar />
  </div>
  <Routes>
    <Route exact path="/Home" element={<Home />}></Route>
    <Route exact path="/login" element={<Login />}></Route>
  </Routes>
  </Router>
  </div>

)

  
  
}

export default App;