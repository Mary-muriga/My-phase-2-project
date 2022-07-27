import React from "react";

function Header(props) {
    const { countCartItems} = props;
  return (
    <header className="row block center">
      <div>
        <a href="#/">
          <h1>Simple Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">  
        Cart{''}
        {countCartItems ? (
            <button className="badge">{countCartItems}</button>
        ) : (
            ''
        )
        }
        </a> {''}
        
        
      </div>
    </header>
  );
}

export default Header;
