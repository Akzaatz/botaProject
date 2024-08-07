//FloatingCartButton :

import { useState } from "react";
import shoppingCart from "/shopping-cart.svg";
import { useSelector } from "react-redux";
import { createPortal } from "react-dom";
import Cart from "../cart/Cart";

const FloatingCartButton = () => {
  const [showModal, setShowModal] = useState(false);
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <div className="floating-cart-button">
        <button
          onClick={() => setShowModal(!showModal)}
          className="cart-button"
        >
          <img src={shoppingCart} alt="image caddy" />
          <span>Aller au panier : {cart.cartItems.length}</span>
        </button>
      </div>

      {showModal &&
        createPortal(
          <Cart onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
};

export default FloatingCartButton;
