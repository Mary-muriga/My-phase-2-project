import React from "react";


function Header(props) {
    const { countCartItems} = props;
  return (
    <header className="row-block-1">
      <div>

          <h1>Simple Shopping Cart</h1>
    
      </div>
      <div>
        Cart{''}
        {countCartItems ? (
            <button className="badge">{countCartItems}</button>
        ) : (
            ''
        )
        }
         {''}
      </div>
    </header>
  );
}

export default Header;
