import React from "react";
import shoppingCart from "/shopping-cart.svg";

const Cart = () => {
  return (
    <div>
      <button>
        <img className="shopping-cart" src={shoppingCart} alt="Panier" />
        <span>Aller au Panier : 0</span>
      </button>
    </div>
  );
};

export default Cart;
