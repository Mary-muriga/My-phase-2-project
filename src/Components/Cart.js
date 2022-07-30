

import  {useState} from "react";


function Cart(props) {
 
  const itemsPrice = cartItems.reduce((d, c) => d + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  
  const [cartItems, setCartItems] = useState([])

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

  return (
  
      <div>
      <h2> Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart Is Empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.title}</div>
            <div className="col-2">
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>
            </div>
            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-3">Items Price</div>
              <div className="col-1 text-right"> ${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-3">Tax Price</div>
              <div className="col-1 text-right"> ${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-3">Shipping Price</div>
              <div className="col-1 text-right">
                {" "}
                ${shippingPrice.toFixed(2)}
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                {" "}
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr/>
            {/* <div className="row ">
              <button onClick={() => alert('Thanks')}>
                Checkout
              </button> */}
            {/* </div> */}
          </>
        )}
      </div>
      </div>
    
  );
}
}
export default Cart;

