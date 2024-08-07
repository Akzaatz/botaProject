import { useSelector, useDispatch } from "react-redux";
import React from "react";
import styles from "./cart.module.scss";

const Cart = ({ onClose }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className={styles.modalContent}>
        <button onClick={onClose} className={styles.cartModalClose}>
          X
        </button>
        <ul>
          {cart.cartItems.length > 0 ? (
            cart.cartItems.map((product) => (
              <li key={product.id}>
                <img
                  src={`/img/img-product/${product.image}`}
                  alt={product.name}
                />
                <p>{product.name}</p>
                <div className="select-buttons">
                  <select
                    name="quantity"
                    id=""
                    // onChange={e=>dispatch()}</div>
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>
                <div className="delete_button">
                  <button>Supprimer du panier</button>
                </div>
              </li>
            ))
          ) : (
            <li className="cart-2">Ajoutez des articles au panier</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
