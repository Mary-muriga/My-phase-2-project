import React from "react";


function Header(props) {
    const { countCartItems} = props;
  return (
    <header className="row-block-1">
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
        < a href="#/login"> Login</a>
        
      </div>
    </header>
  );
}

export default Header;
