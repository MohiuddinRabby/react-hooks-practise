import React from "react";
import { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState(1);
  const price = 10;
  return (
    <div>
      <h1>Cart</h1>
      <input
        type="number"
        value={cart}
        // onClick={handleCart}
        onChange={(e) => setCart(cart + 1)}
      />
      <h2>{cart * price}</h2>
    </div>
  );
};

export default Cart;
